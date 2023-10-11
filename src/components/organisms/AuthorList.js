import { Flex } from '@chakra-ui/react'
import { AuthorCard } from 'components/molecules'

export const AuthorList = ({ data }) => {
  return (
    <Flex w="100%" flexDir="column">
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
        {data?.map((item) => (
          <AuthorCard key={`author_${item.id}`} {...item} />
        ))}
      </Flex>
    </Flex>
  )
}
