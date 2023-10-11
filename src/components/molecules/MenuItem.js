import { MenuItem as ChakraMenuItem, Icon, MenuDivider } from '@chakra-ui/react'
import { Text } from 'components/atoms'

export const MenuItem = ({ icon, text, divider, onClick }) => {
  return (
    <ChakraMenuItem
      h="48px"
      borderBottom={divider ? '1px solid' : 'none'}
      borderColor={'brand.grayLight'}
      onClick={onClick}
    >
      <Icon as={icon} color="brand.grayDark" boxSize={18} mr="8px" />
      <Text fontWeight="600" color="brand.grayDark">
        {text}
      </Text>
      {divider ? <MenuDivider /> : null}
    </ChakraMenuItem>
  )
}
