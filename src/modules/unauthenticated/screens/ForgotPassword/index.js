import { Flex, Image } from '@chakra-ui/react'
import { Button, Input, Text } from 'components'
import { useNavigate } from 'react-router-dom'
import { useFormik } from 'formik'
import * as Yup from 'yup'

export const ForgotPasswordScreen = () => {
  const { handleChange, handleSubmit, values, errors } = useFormik({
    initialValues: {
      email: ''
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email('E-mail inválido.')
        .required('E-mail é obrigatório.')
    }),
    onSubmit: () => {
      navigate('/reset-password')
    }
  })

  const navigate = useNavigate()

  return (
    <Flex w="100vw" h="100vh">
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
          <Button onClick={handleSubmit} mt="24px">
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
