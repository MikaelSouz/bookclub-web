import { Flex, Image } from '@chakra-ui/react'
import { Button, Input, Link, Text } from 'components'
import { useFormik } from 'formik'
import { useNavigate } from 'react-router-dom'
import * as Yup from 'yup'

export const RegisterScreen = () => {
  const { handleChange, handleSubmit, values, errors } = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
      confirmPassword: ''
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .min(6, 'Nome deve conter no mínimo 6 caracteres.')
        .required('Nome é obrigatório.'),
      email: Yup.string()
        .email('E-mail inválido.')
        .required('E-mail é obrigatório.'),
      password: Yup.string()
        .min(6, 'Senha deve conter no mínimo 6 caracteres.')
        .required('Senha é obrigatória.'),
      confirmPassword: Yup.string()
        .required('Confirmação de senha obrigatória.')
        .oneOf([Yup.ref('password'), null], 'Confirmação de senha inválida.')
    }),
    onSubmit: (data) => {}
  })

  console.log({ values })

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
          <Image src="/img/logo.svg" w="160px" h="48px" />
        </Flex>
        <Flex w={['100%', '416px']} flexDir="column">
          <Text.title mb="24px">Cadastro</Text.title>
          <Input
            id="name"
            name="name"
            type="text"
            placeholder="Nome Completo"
            values={values.name}
            onChange={handleChange}
            error={errors.name}
          />
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="E-mail"
            values={values.email}
            onChange={handleChange}
            error={errors.email}
            mt="12px"
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
          <Button onClick={handleSubmit} mt="24px" mb="24px">
            Cadastrar
          </Button>
          <Flex alignItems="center" justifyContent="center">
            <Text mr="6px">Já possui conta?</Text>
            <Link fontWeight="bold" onClick={() => navigate('/')}>
              Faça login aqui
            </Link>
          </Flex>
        </Flex>
      </Flex>
      <Flex
        w={['0', '0', '40%', '50%']}
        h="100vh"
        bgImage="url('/img/bgAuth.svg')"
        bgRepeat="no-repeat"
        bgSize="cover"
        bgPosition="center"
        borderLeftRadius="24px"
      ></Flex>
    </Flex>
  )
}
