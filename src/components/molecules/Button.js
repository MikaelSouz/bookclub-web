import { Button as ChakraButton } from '@chakra-ui/react'

export const Button = ({ children, secondary, ...props }) => {
  return (
    <ChakraButton
      w="100%"
      h="56px"
      bgColor={secondary ? 'brand.grayDark' : 'brand.primary'}
      borderRadius="12px"
      _hover={{ bgColor: 'none' }}
      textColor={secondary ? 'brand.white' : 'brand.black'}
      secondary={secondary}
      {...props}
    >
      {children}
    </ChakraButton>
  )
}
