import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useToast
} from '@chakra-ui/react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { useMutation } from 'react-query'
import { updateUser } from 'services/api/requests'
import { Input } from './Input'
import { Text } from 'components/atoms'
import { Button } from './Button'

export const ModalPassword = ({ onClose }) => {
  const toast = useToast()

  const { values, handleChange, handleSubmit, errors } = useFormik({
    initialValues: {
      password: '',
      confirmPassword: ''
    },
    validationSchema: Yup.object({
      password: Yup.string()
        .min(6, 'Senha deve conter no mínimo 6 caracteres.')
        .required('Senha é obrigatória.'),
      confirmPassword: Yup.string()
        .required('Confirmação de senha é obrigatória.')
        .oneOf([Yup.ref('password'), null], 'Confirmação de senha inválida.')
    }),
    onSubmit: (data) => {
      mutation.mutate({
        password: data?.password
      })
    }
  })

  const mutation = useMutation((data) => updateUser(data), {
    onError: (error) => {
      toast({
        title: 'Erro ao alterar senha.',
        description:
          error?.response?.data?.error || 'Por favor tente novamente.',
        status: 'error',
        duration: 4000,
        isClosable: true,
        position: 'top-right'
      })
    },
    onSuccess: () => {
      toast({
        title: 'Senha alterada com sucesso.',
        status: 'success',
        duration: 4000,
        isClosable: true,
        position: 'top-right'
      })
      onClose()
    }
  })

  return (
    <Drawer isOpen={true} placement="right" onClose={onClose} size="sm">
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton />
        <DrawerHeader>
          <Text.title>Alterar Senha</Text.title>
        </DrawerHeader>

        <DrawerBody>
          <Input
            id="password"
            name="password"
            type="password"
            placeholder="Senha"
            values={values.password}
            error={errors.password}
            onChange={handleChange}
            mt="12px"
          />
          <Input
            id="confirmPassword"
            name="confirmPassword"
            type="password"
            placeholder="Confirme a senha"
            values={values.confirmPassword}
            error={errors.confirmPassword}
            onChange={handleChange}
            mt="12px"
          />
          <Button
            onClick={handleSubmit}
            isLoading={mutation.isLoading}
            mt="36px"
          >
            Atualizar
          </Button>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  )
}
