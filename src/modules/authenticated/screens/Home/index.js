import { Flex } from '@chakra-ui/react'
import { NavBar, BookList, CategoryList } from 'components'

export const HomeScreen = () => {
  return (
    <Flex w="100vw" flexDir="column" alignItems="center">
      <NavBar />
      <Flex
        w="100%"
        h="200px"
        paddingX={['12px', '12px', '48px', '112px']}
        mt="48px"
      >
        <Flex
          w="100%"
          h="100%"
          bgImage='url("/img/banner.svg")'
          bgPosition="center"
          bgSize="contain"
          bgRepeat="no-repeat"
        />
      </Flex>
      <BookList />
      <CategoryList />
    </Flex>
  )
}
