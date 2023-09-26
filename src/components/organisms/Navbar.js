import { Flex, Image } from '@chakra-ui/react'
import { SearchBar, MenuUser } from 'components'

export const NavBar = () => {
  return (
    <Flex
      w="100vw"
      flexDir="row"
      justifyContent="space-between"
      mt="24px"
      paddingX={['12px', '12px', '48px', '112px']}
    >
      <Image
        src="img/logo.svg"
        alt="bookclub logo"
        w={['100px', '100px', '120px', '160px']}
        h="48px"
      />
      <Flex display={['none', 'none', 'flex', 'flex']}>
        <SearchBar />
      </Flex>
      <MenuUser />
    </Flex>
  )
}
