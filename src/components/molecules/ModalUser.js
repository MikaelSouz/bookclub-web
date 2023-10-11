import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Flex,
  Avatar,
  useToast,
  Icon
} from '@chakra-ui/react'
import { Input } from './Input'
import { Button } from './Button'
import { Text } from 'components/atoms'
import { useDispatch, useSelector } from 'react-redux'
import { useMutation } from 'react-query'
import { updateUser, updateUserAvatar } from 'services/api/requests'
import { setUser } from 'services/store/slices/user'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { useRef } from 'react'

import { MdOutlineModeEdit } from 'react-icons/md'

export const ModalUser = ({ onClose }) => {
  const toast = useToast()
  const dispatch = useDispatch()
  const userStore = useSelector((state) => state?.user)
  const inputFileRef = useRef()

  const mutationUser = useMutation((data) => updateUser(data), {
    onError: (error) => {
      toast({
        title: 'Erro ao atualizar dados.',
        description:
          error?.response?.data?.error || 'Por favor tente novamente.',
        status: 'error',
        duration: 4000,
        isClosable: true,
        position: 'top-right'
      })
    },
    onSuccess: (data) => {
      toast({
        title: 'Dados atualizados com sucesso.',
        status: 'success',
        duration: 4000,
        isClosable: true,
        position: 'top-right'
      })

      dispatch(
        setUser({
          user: data?.data?.user
        })
      )
    }
  })

  const mutationAvatar = useMutation((data) => updateUserAvatar(data), {
    onError: (error) => {
      toast({
        title: 'Erro ao atualizar imagem.',
        description:
          error?.response?.data?.error || 'Por favor tente novamente.',
        status: 'error',
        duration: 4000,
        isClosable: true,
        position: 'top-right'
      })
    },
    onSuccess: (data) => {
      toast({
        title: 'Imagem atualizada com sucesso.',
        status: 'success',
        duration: 4000,
        isClosable: true,
        position: 'top-right'
      })

      dispatch(
        setUser({
          user: data?.data
        })
      )
    }
  })

  const { values, handleChange, handleSubmit, errors } = useFormik({
    initialValues: {
      name: userStore?.user?.name,
      email: userStore?.user?.email
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .min(6, 'Nome deve conter no mínimo 6 caracteres.')
        .required('Nome é obrigatório.'),
      email: Yup.string()
        .email('E-mail inválido.')
        .required('E-mail é obrigatório.')
    }),
    onSubmit: (data) => {
      mutationUser.mutate(data)
    }
  })

  const onChangeImage = (event) => {
    const file = event?.target?.files[0]
    const type = file?.type
    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onload = () => {
      const base64 = reader?.result

      mutationAvatar.mutate({
        mime: type,
        base64
      })
    }
  }

  return (
    <Drawer isOpen={true} placement="right" onClose={onClose} size="sm">
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton />
        <DrawerHeader>
          <Text.title>Dados Pessoais</Text.title>
        </DrawerHeader>

        <DrawerBody>
          <Flex w="100%" alignItems="center" justifyContent="center" mb="24px">
            <input
              type="file"
              accept="image/*"
              style={{ display: 'none' }}
              onChange={onChangeImage}
              ref={inputFileRef}
            />

            <Avatar
              name={userStore?.user?.name}
              src={userStore?.user?.avatar_url}
              mr="6px"
              bg="brand.grayLight"
              color="brand.black"
              w="100px"
              h="100px"
              borderStyle="solid"
              borderWidth="4px"
              borderColor="brand.primary"
              cursor="pointer"
              onClick={() => inputFileRef?.current?.click()}
            />
            <Flex
              w="32px"
              h="32px"
              alignItems="center"
              justifyContent="center"
              borderRadius="16px"
              bgColor="brand.primary"
              pos="relative"
              top="35px"
              right="18px"
              margin="-18px"
              cursor="pointer"
              onClick={() => inputFileRef?.current?.click()}
            >
              <Icon as={MdOutlineModeEdit} color="brand.black" boxSize={18} />
            </Flex>
          </Flex>
          <Input
            id="name"
            name="name"
            value={values?.name}
            onChange={handleChange}
            error={errors?.name}
            placeholder="Nome"
            mb="12px"
          />
          <Input
            id="email"
            name="email"
            value={values?.email}
            onChange={handleChange}
            error={errors?.email}
            placeholder="E-mail"
            mb="24px"
          />
          <Button onClick={handleSubmit} isLoading={mutationUser.isLoading}>
            Atualizar
          </Button>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  )
}
