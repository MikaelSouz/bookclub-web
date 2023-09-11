import { Flex, Image } from '@chakra-ui/react'
import { Text, Link, Input, Button } from 'components'
import { useNavigate } from 'react-router-dom'
import * as Yup from 'yup'
import { useFormik } from 'formik'

export const LoginScreen = () => {
  const { handleSubmit, handleChange, values, errors } = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email('E-mail inválido.')
        .required('E-mail é obrigatório.'),
      password: Yup.string().required('Senha é obrigatória.')
    }),
    onSubmit: (data) => {
      console.log({ data })
    }
  })

  console.log({ values, errors })

  const navigate = useNavigate()

  return (
    <Flex w="100vw" h="100vh" flexDir="row" justifyContent="center">
      <Flex
        w={['95%', '95%', '60%', '50%']}
        h="100%"
        flexDir="column"
        padding={['0', '0', '0 24px', '0 64px']}
        justifyContent="center"
        alignItems="center"
      >
        <Flex w={['100%', '416px']}>
          <Image
            src="img/logo.svg"
            alt="bookclub logo"
            w="160px"
            h="48px"
            mb="48px"
          />
        </Flex>
        <Flex w={['100%', '416px']} flexDir="column">
          <Text.title mb="24px">Login</Text.title>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="email@example.com"
            value={values.email}
            onChange={handleChange}
            error={errors.email}
          ></Input>
          <Input
            id="password"
            name="password"
            type="password"
            placeholder="**********"
            value={values.password}
            onChange={handleChange}
            error={errors.password}
            mt="24px"
          ></Input>
          <Link
            mt="24px"
            textAlign="end"
            onClick={() => navigate('/forgot-password')}
          >
            Esqueceu a senha?
          </Link>
          <Button mt="24px" mb="24px" onClick={handleSubmit}>
            Entrar
          </Button>
          <Flex justifyContent="center">
            <Text mr="6px">Não possui uma conta?</Text>
            <Link fontWeight="bold" onClick={() => navigate('/cadastro')}>
              Cadastre-se aqui
            </Link>
          </Flex>
        </Flex>
      </Flex>
      <Flex
        w={['0', '0', '40%', '50%']}
        h="100%"
        bgImage="url('/img/bgAuth.svg')"
        bgSize="cover"
        bgPosition="center"
        bgRepeat="no-repeat"
        borderLeftRadius="24px"
      />
    </Flex>
  )
}
