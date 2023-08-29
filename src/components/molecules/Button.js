import { Button as ChakraButton } from '@chakra-ui/react'

export const Button = ({ children, ...props }) => {
  return (
    <ChakraButton
      w="100%"
      h="56px"
      bgColor="brand.primary"
      borderRadius="12px"
      _hover={{ bgColor: 'none' }}
      {...props}
    >
      {children}
    </ChakraButton>
  )
}
