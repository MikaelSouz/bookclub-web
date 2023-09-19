import { Flex, Image, useToast } from '@chakra-ui/react'
import { Button, Input, Text } from 'components'
import { useNavigate } from 'react-router-dom'
import { useFormik } from 'formik'
import * as Yup from 'yup'

import { useMutation } from 'react-query'
import { forgotPasswordCall } from 'services/api/requests'

export const ForgotPasswordScreen = () => {
  const navigate = useNavigate()
  const toast = useToast()

  const mutation = useMutation((email) => forgotPasswordCall(email), {
    onError: (error) => {
      toast({
        title: 'Erro ao enviar e-mail.',
        description: error?.response?.data?.error,
        status: 'error',
        duration: 6000,
        isClosable: true,
        position: 'top-right'
      })
    },
    onSuccess: (data) => {
      toast({
        title: 'E-mail enviado com sucesso.',
        status: 'success',
        duration: 6000,
        isClosable: true,
        position: 'top-right'
      })
      navigate(`/reset-password?email=${values.email}`)
    }
  })

  // Validation form - Start
  const { handleChange, handleSubmit, values, errors } = useFormik({
    initialValues: {
      email: ''
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email('E-mail inválido.')
        .required('E-mail é obrigatório.')
    }),
    onSubmit: (data) => {
      mutation.mutate(data)
    }
  }) // Validation form - End

  return (
    <Flex w="100vw" h="100vh" flexDir="row" justifyContent="center">
      <Flex
        w={['95%', '95%', '60%', '50%']}
        h="100vh"
        flexDir="column"
        alignItems="center"
        justifyContent="center"
        padding={['0', '0', '0 24px', '0 64px']}
      >
        <Flex w={['100%', '416px']} mb="48px">
          <Image src="/img/logo.svg" w="160px" h="48px" />
        </Flex>
        <Flex w={['100%', '416px']} flexDir="column">
          <Text.title mb="12px">Esqueceu a senha</Text.title>
          <Text mb="12px">
            Digite abaixo seu e-mail que enviaremos um código de recuperação de
            senha:
          </Text>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="E-mail"
            values={values.email}
            error={errors.email}
            onChange={handleChange}
          />
          <Button
            onClick={handleSubmit}
            isLoading={mutation.isLoading}
            mt="24px"
          >
            Enviar
          </Button>
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
