import { Flex } from '@chakra-ui/react'
import { Text } from './Text'

export const EmptyMessage = ({ children }) => {
  return (
    <Flex
      w="100%"
      mt="24px"
      alignItems="flex-start"
      justifyContent="flex-start"
    >
      <Text>{children}</Text>
    </Flex>
  )
}
