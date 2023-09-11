import { Input as ChakraInput } from '@chakra-ui/react'
import { Text } from 'components/atoms'

export const Input = ({ ...props }) => {
  return (
    <>
      <ChakraInput
        w="100%"
        h="56px"
        borderRadius="12px"
        focusBorderColor="brand.primary"
        fontSize="16px"
        {...props}
      ></ChakraInput>
      {props.error && <Text.error>{props.error}</Text.error>}
    </>
  )
}
