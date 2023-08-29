import { Input as ChakraInput } from '@chakra-ui/react'

export const Input = (props) => {
  return (
    <ChakraInput
      w="100%"
      h="56px"
      borderRadius="12px"
      focusBorderColor="brand.primary"
      fontSize="16px"
      {...props}
    ></ChakraInput>
  )
}
