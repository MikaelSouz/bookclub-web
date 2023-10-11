import { Flex } from '@chakra-ui/react'
import { NavBar, BookList, CategoryList } from 'components'
import { useQuery } from 'react-query'
import { getBookHighlightedCall } from 'services/api/requests'

export const HomeScreen = () => {
  const { data, isLoading } = useQuery(
    'getBookHighLighted',
    getBookHighlightedCall
  )

  return (
    <Flex w="100vw" flexDir="column" alignItems="center">
      <NavBar />
      <Flex
        w="100%"
        h={['72px', '72px', '120px', '200px']}
        paddingX={['12px', '12px', '48px', '112px']}
        mt={['24px', '48px']}
      >
        <Flex
          w="100%"
          h="100%"
          bgImage='url("/img/banner.svg")'
          bgPosition={['start', 'start', 'start', 'center']}
          bgSize="cover"
          bgRepeat="no-repeat"
          borderRadius={['12px', '12px', '12px', '24px']}
        />
      </Flex>
      <Flex
        w="100%"
        mt={['24px', '48px']}
        paddingX={['12px', '12px', '48px', '112px']}
      >
        <BookList title={'Destaques'} data={data?.data} isLoading={isLoading} />
      </Flex>
      <CategoryList />
    </Flex>
  )
}
