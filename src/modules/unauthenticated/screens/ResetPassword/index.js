import { Flex, Image, useToast } from '@chakra-ui/react'
import { Button, Input, Link, Text } from 'components'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { useFormik } from 'formik'
import * as Yup from 'yup'

import { useMutation } from 'react-query'
import { resetPasswordCall } from 'services/api/requests'

export const ResetPasswordScreen = () => {
  const navigate = useNavigate()
  const toast = useToast()
  const [searchParams] = useSearchParams()

  const mutation = useMutation(
    (newPassword) => resetPasswordCall(newPassword),
    {
      onError: (error) => {
        toast({
          title: 'Falha na requisição.',
          description: error?.response?.data?.error,
          status: 'error',
          duration: 6000,
          isClosable: true,
          position: 'top-right'
        })
      },
      onSuccess: () => {
        toast({
          title: 'Senha alterada com sucesso.',
          status: 'success',
          duration: 6000,
          isClosable: true,
          position: 'top-right'
        })
        navigate('/')
      }
    }
  )

  // Validation Form - Start
  const { handleChange, handleSubmit, values, errors } = useFormik({
    initialValues: {
      email: searchParams.get('email'),
      token: '',
      password: '',
      confirmPassword: ''
    },
    validationSchema: Yup.object({
      token: Yup.string()
        .length(6, 'Código de verificação deve conter 6 caracteres.')
        .required('Código de confirmação obrigatório.'),
      password: Yup.string()
        .min(6, 'Senha deve conter no mínimo 6 caracteres.')
        .required('Senha é obrigatória.'),
      confirmPassword: Yup.string()
        .required('Confirmação de senha é obrigatória.')
        .oneOf([Yup.ref('password'), null], 'Confirmação de senha inválida.')
    }),
    onSubmit: (data) => {
      mutation.mutate(data)
    }
  }) // Validation Form - End

  return (
    <Flex w="100vw" h="100vh" flexDir="row" justifyContent="center">
      <Flex
        w={['95%', '95%', '60%', '50%']}
        h="100vh"
        flexDir="column"
        justifyContent="center"
        alignItems="center"
        padding={['0', '0', '0 24px', '0 64px']}
      >
        <Flex w={['100%', '416px']} mb="48px">
          <Image src="/img/logo.svg" alt="bookclub logo" w="160px" h="48px" />
        </Flex>
        <Flex w={['100%', '416px']} flexDir="column">
          <Text.title mb="24px">Nova Senha</Text.title>
          <Text mb="12px">
            Digite o código enviado e uma nova senha nos campos abaixo:
          </Text>
          <Input
            id="token"
            name="token"
            type="text"
            placeholder="Ex.: 000000"
            values={values.token}
            error={errors.token}
            onChange={handleChange}
            maxLength={6}
          />
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
            mb="24px"
            mt="24px"
          >
            Salvar
          </Button>
          <Flex alignItems="center" justifyContent="center">
            <Text mr="6px">Não recebeu o código?</Text>
            <Link fontWeight="bold">Clique aqui para reenviar</Link>
          </Flex>
        </Flex>
      </Flex>
      <Flex
        w={['0', '0', '40%', '50%']}
        h="100vh"
        bgImage='url("/img/bgAuth.svg")'
        bgSize="cover"
        bgPosition="center"
        bgRepeat="no-repeat"
        borderLeftRadius="24px"
      />
    </Flex>
  )
}
