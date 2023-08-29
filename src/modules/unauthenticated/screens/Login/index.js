import { Flex, Image, Text, Input, Button, Link } from '@chakra-ui/react'

export const LoginScreen = () => {
  return (
    <Flex w="100vw" h="100vh" flexDir="row">
      <Flex
        w="40%"
        h="100%"
        flexDir="column"
        padding="0 64px"
        justifyContent="center"
      >
        <Image
          src="img/logo.svg"
          alt="bookclub logo"
          w="160px"
          h="48px"
          mb="48px"
        />

        <Flex w="416px" flexDir="column">
          <Text>Login</Text>
          <Input></Input>
          <Input></Input>
          <Link>Esqueceu a senha?</Link>
          <Button></Button>
          <Text>Não possui uma conta?</Text>
          <Link>Cadastre-se aqui</Link>
        </Flex>
      </Flex>
      <Flex
        w="60%"
        h="100%"
        bgImage="url('/img/bgAuth.svg')"
        bgSize="cover"
        bgPosition="center"
        bgRepeat="no-repeat"
        borderTopLeftRadius="24px"
        borderBottomLeftRadius="24px"
      />
    </Flex>
  )
}
