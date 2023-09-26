import { Flex } from '@chakra-ui/react'
import { Text } from 'components/atoms'

export const BookCard = ({ image, title, author }) => {
  return (
    <Flex
      w="152px"
      h="278px"
      flexDir="column"
      alignItems="center"
      justifyContent="space-between"
      mr="8px"
      mt="12px"
    >
      <Flex
        w="100%"
        h="100%"
        bgImage={`url(${image})`}
        bgPos="center"
        bgSize="contain"
        bgRepeat="no-repeat"
      />
      <Text fontWeight="600" align="center">
        {title}
      </Text>
      <Text fontSize="10px">{author}</Text>
    </Flex>
  )
}
