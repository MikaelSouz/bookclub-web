import { Flex } from '@chakra-ui/react'
import { Text } from 'components/atoms'
import { BookCard } from 'components/molecules'

export const BookList = ({ data }) => {
  return (
    <Flex
      w="100%"
      flexDir="column"
      paddingX={['12px', '12px', '48px', '112px']}
      mt="48px"
    >
      <Text.title>Destaques</Text.title>
      <Flex w="100%" h="100%" flexDir="row">
        {data?.map((item) => (
          <BookCard
            key={`book_${item.id}`}
            image={item?.cover_url}
            title={item?.name}
            author={item?.author?.name}
          />
        ))}
      </Flex>
    </Flex>
  )
}
