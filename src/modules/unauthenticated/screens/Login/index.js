import { Flex, Image } from '@chakra-ui/react'
import { Text, Link, Input, Button } from 'components'

export const LoginScreen = () => {
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
          <Input type="email" placeholder="email@example.com" mb="24px"></Input>
          <Input type="password" placeholder="**********" mb="24px"></Input>
          <Link mb="24px" textAlign="end">
            Esqueceu a senha?
          </Link>
          <Button mb="24px">Entrar</Button>
          <Flex justifyContent="center">
            <Link mr="6px">Não possui uma conta?</Link>
            <Link fontWeight="bold">Cadastre-se aqui</Link>
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
        borderTopLeftRadius="24px"
        borderBottomLeftRadius="24px"
      />
    </Flex>
  )
}
