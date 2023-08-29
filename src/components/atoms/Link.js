import { Link as ChakraLink } from '@chakra-ui/react'

export const Link = ({ children, ...props }) => {
  return (
    <ChakraLink fontSize="14px" color="brand.black" {...props}>
      {children}
    </ChakraLink>
  )
}
