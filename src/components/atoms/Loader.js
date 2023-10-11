import { Flex, Spinner } from '@chakra-ui/react'

export const Loader = () => {
  return (
    <Flex w="100%" mt="24px" alignItems="center" justifyContent="center">
      <Spinner />
    </Flex>
  )
}
