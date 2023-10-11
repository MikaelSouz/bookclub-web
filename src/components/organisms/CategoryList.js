import { useState, useEffect } from 'react'
import { useQuery } from 'react-query'
import { Flex } from '@chakra-ui/react'
import { CategoryCard } from 'components/molecules'
import { BookList } from './BookList'
import { EmptyMessage, Text } from 'components/atoms'

import { getCategories, getBookByCategory } from 'services/api/requests'

export const CategoryList = ({ title, categoryId }) => {
  const [selected, setSelected] = useState(categoryId)

  const { data } = useQuery('getCategory', getCategories)

  const bookQuery = useQuery(
    ['getBookByCategory', selected],
    () => getBookByCategory(selected),
    {
      enabled: !!selected
    }
  )

  useEffect(() => {
    if (!selected) {
      setSelected(data?.data[0]?.id)
    }
  }, [data])

  useEffect(() => {
    if (categoryId) {
      bookQuery.refetch()
    }
  }, [categoryId])

  return (
    <Flex
      w="100%"
      flexDir="column"
      mt={['24px', '48px']}
      paddingX={['12px', '12px', '48px', '112px']}
    >
      <Text.title>{title || 'Categorias'}</Text.title>

      {!categoryId && (
        <Flex
          overflowX={['scroll', 'auto']}
          css={{
            '::-webkit-scrollbar': {
              display: 'none'
            }
          }}
        >
          {data &&
            data?.data?.map((item) => (
              <CategoryCard
                key={`category_${item?.id}`}
                name={item?.name}
                selected={selected === item?.id}
                onClick={() => setSelected(item?.id)}
              />
            ))}
        </Flex>
      )}
      <Flex
        minH="300px"
        overflowX={['scroll', 'auto']}
        css={{
          '::-webkit-scrollbar': {
            display: 'none'
          }
        }}
      >
        {bookQuery?.data?.data.length === 0 && (
          <EmptyMessage>Nenhum livro encontrado</EmptyMessage>
        )}
        {bookQuery && (
          <BookList
            data={bookQuery?.data?.data}
            isLoading={bookQuery.isLoading}
          />
        )}
      </Flex>
    </Flex>
  )
}
