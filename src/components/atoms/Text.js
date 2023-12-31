import { Text as ChakraText } from '@chakra-ui/react'

export const Text = ({ children, ...props }) => {
  return (
    <ChakraText fontSize={['14px']} {...props}>
      {children}
    </ChakraText>
  )
}

Text.title = ({ children, ...props }) => {
  return (
    <ChakraText
      fontSize={['16px', '20px']}
      fontWeight="bold"
      color="brand.black"
      {...props}
    >
      {children}
    </ChakraText>
  )
}

Text.error = ({ children, ...props }) => {
  return (
    <ChakraText fontSize="14px" color="red" fontStyle="italic" {...props}>
      {children}
    </ChakraText>
  )
}
