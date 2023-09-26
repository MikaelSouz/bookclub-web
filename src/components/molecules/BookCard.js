import { Flex } from '@chakra-ui/react'
import { Text } from 'components/atoms'

export const BookCard = ({ image, title, author }) => {
  return (
    <Flex
      flexDir="column"
      alignItems="center"
      justifyContent="center"
      mr="8px"
      mt="12px"
    >
      <Flex
        w={['120px', '120px', '140px', '154px']}
        h={['180px', '180px', '210px', '230px']}
        bgImage={`url(${image})`}
        bgPos="center"
        bgSize="cover"
        bgRepeat="no-repeat"
        borderRadius="12px"
      />
      <Text
        noOfLines={1}
        fontWeight="600"
        mt="8px"
        fontSize="12px"
        align="center"
      >
        {title}
      </Text>
      <Text fontSize="10px" mt="4px" align="center">
        {author}
      </Text>
    </Flex>
  )
}
