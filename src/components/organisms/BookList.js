import { Flex } from '@chakra-ui/react'
import { Text, Loader } from 'components/atoms'
import { BookCard } from 'components/molecules'

export const BookList = ({ title, data, isLoading }) => {
  return (
    <Flex w="100%" flexDir="column">
      <Text.title>{title}</Text.title>
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
        {isLoading && <Loader />}
        {data?.map((item) => (
          <BookCard
            key={`book_${item?.id}`}
            id={item?.id}
            cover_url={item?.cover_url}
            name={item?.name}
            author={item?.author?.name}
          />
        ))}
      </Flex>
    </Flex>
  )
}
