import { Flex, Image } from '@chakra-ui/react'
import { Button, Input, Link, Text } from 'components'
import { useNavigate } from 'react-router-dom'
import { useFormik } from 'formik'
import * as Yup from 'yup'

export const ResetPasswordScreen = () => {
  const { handleChange, handleSubmit, values, errors } = useFormik({
    initialValues: {
      pin: '',
      password: '',
      confirmPassword: ''
    },
    validationSchema: Yup.object({
      pin: Yup.string()
        .length(6, 'Código de verificação deve conter 6 caracteres.')
        .required('Código de confirmação obrigatório.'),
      password: Yup.string()
        .min(6, 'Senha deve conter no mínimo 6 caracteres.')
        .required('Senha é obrigatória.'),
      confirmPassword: Yup.string()
        .required('Confirmação de senha é obrigatória.')
        .oneOf([Yup.ref('password'), null], 'Confirmação de senha inválida.')
    }),
    onSubmit: () => {
      navigate('/')
    }
  })

  const navigate = useNavigate()

  return (
    <Flex w="100vw" h="100vh">
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
            id="pin"
            name="pin"
            type="text"
            placeholder="Ex.: 000000"
            values={values.pin}
            error={errors.pin}
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
            mt="24px"
          />
          <Button onClick={handleSubmit} mb="24px" mt="24px">
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
