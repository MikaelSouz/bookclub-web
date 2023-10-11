import { Flex, InputGroup, Input, InputLeftElement } from '@chakra-ui/react'
import { SearchIcon } from '@chakra-ui/icons'
import { useLocation, useNavigate } from 'react-router-dom'
import { useState } from 'react'

export const SearchBar = ({ query, setQuery }) => {
  const navigate = useNavigate()
  const location = useLocation()

  const checkIfRoutes = () => {
    if (location.pathname !== '/search') {
      navigate('/search')
    }
  }

  return (
    <Flex
      w={['250px', '350px', '350px', '478px']}
      h="52px"
      flexDir="row"
      alignItems="center"
      borderRadius="12px"
      bg="brand.grayLight"
    >
      <InputGroup w="100%" h="100%">
        <InputLeftElement h="100%">
          <SearchIcon color="brand.grayDark" />
        </InputLeftElement>
        <Input
          placeholder="Digite o nome do livro ou autor"
          _placeholder={{ color: 'brand.grayDark' }}
          h="100%"
          border="none"
          focusBorderColor="transparent"
          fontSize="14px"
          fontWeight="500"
          color="brand.grayDark"
          onFocus={checkIfRoutes}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        ></Input>
      </InputGroup>
    </Flex>
  )
}
