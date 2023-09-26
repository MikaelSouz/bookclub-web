import { Flex } from '@chakra-ui/react'
import { Text } from 'components/atoms'

export const CategoryCard = ({ selected, name, onClick }) => {
  return (
    <Flex
      alignItems="center"
      justifyContent="center"
      h="36px"
      px="12px"
      py="14px"
      bgColor={selected ? 'brand.black' : 'brand.background'}
      borderStyle="solid"
      borderWidth="1px"
      borderRadius="8px"
      borderColor={selected ? 'brand.black' : 'brand.grayLight'}
      mr="8px"
      mt="12px"
      cursor="pointer"
      onClick={onClick}
    >
      <Text fontWeight="600" color={selected ? 'brand.white' : 'brand.black'}>
        {name}
      </Text>
    </Flex>
  )
}
