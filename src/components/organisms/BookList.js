import { Flex } from '@chakra-ui/react'
import { Text } from 'components/atoms'
import { BookCard } from 'components/molecules'
import { useQuery } from 'react-query'
import { getBookHighlightedCall } from 'services/api/requests'

export const BookList = () => {
  const { data } = useQuery('getBookHighLighted', getBookHighlightedCall)

  return (
    <Flex
      w="100%"
      flexDir="column"
      paddingX={['12px', '12px', '48px', '112px']}
      mt={['24px', '48px']}
    >
      <Text.title>Destaques</Text.title>
      <Flex
        w="100%"
        h="100%"
        flexDir="row"
        overflowX={['scroll', 'auto']}
        css={{
          '::-webkit-scrollbar': {
            display: 'none'
          }
        }}
      >
        {data?.data.map((item) => (
          <BookCard
            key={`book_${item.id}`}
            image={item?.cover_url}
            title={item?.name}
            author={item?.author?.name}
            id={item?.id}
          />
        ))}
      </Flex>
    </Flex>
  )
}
