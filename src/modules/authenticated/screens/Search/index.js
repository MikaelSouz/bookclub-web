import { Flex } from '@chakra-ui/react'
import {
  NavBar,
  Text,
  BookList,
  AuthorList,
  Loader,
  EmptyMessage
} from 'components'
import { useState } from 'react'
import { useQuery } from 'react-query'
import { querySearch } from 'services/api/requests'

export const SearchScreen = () => {
  const [query, setQuery] = useState('')

  const { data, isLoading } = useQuery(
    ['querySearch', query],
    () => querySearch(query),
    {
      enabled: query?.length >= 3
    }
  )

  return (
    <Flex flexDir="column" w="100vw" alignItems="center">
      <NavBar query={query} setQuery={setQuery} />
      <Flex
        w="100vw"
        flexDir="column"
        paddingX={['12px', '12px', '48px', '112px']}
        mt={['24px', '24px', '48px', '48px']}
        alignItems={['center', 'center', 'flex-start', 'flex-start']}
      >
        <Text.title>Resultado da pesquisa</Text.title>
        {isLoading ? (
          <Loader />
        ) : !data ||
          (data?.data?.books?.length === 0 &&
            data?.data?.authors?.length === 0) ? (
          <EmptyMessage>Sem resultados encontrados</EmptyMessage>
        ) : (
          <>
            {data?.data?.books && data?.data?.books?.length > 0 && (
              <Flex w="100%" flexDir="column" mt="12px">
                <Text.title>Livros</Text.title>
                {data?.data?.books && <BookList data={data?.data?.books} />}
              </Flex>
            )}
            {data?.data?.authors && data?.data?.authors?.length > 0 && (
              <Flex w="100%" flexDir="column" mt="12px">
                <Text.title>Autores</Text.title>
                {data?.data?.authors && (
                  <AuthorList data={data?.data?.authors} />
                )}
              </Flex>
            )}
          </>
        )}
      </Flex>
    </Flex>
  )
}
