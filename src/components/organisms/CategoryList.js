import { useState, useEffect } from 'react'
import { useQuery } from 'react-query'
import { Flex } from '@chakra-ui/react'
import { CategoryCard, BookCard } from 'components/molecules'
import { Text } from 'components/atoms'

import { getCategories, getBookByCategory } from 'services/api/requests'

export const CategoryList = () => {
  const [selected, setSelected] = useState()

  const { data } = useQuery('getCategory', getCategories)
  const bookQuery = useQuery(['getBookById', selected], () =>
    getBookByCategory(selected)
  )

  console.log({ bookQuery })
  useEffect(() => {
    if (!selected) {
      setSelected(data?.data[0].id)
    }
  }, [data])

  return (
    <Flex
      w="100%"
      flexDir="column"
      mt="48px"
      paddingX={['12px', '12px', '48px', '112px']}
    >
      <Text.title>Categorias</Text.title>

      <Flex>
        {data &&
          data?.data?.map((item) => (
            <CategoryCard
              key={`cetegory_${item?.id}`}
              name={item?.name}
              selected={selected === item?.id}
              onClick={() => setSelected(item?.id)}
            />
          ))}
      </Flex>
      <Flex h="350px">
        {bookQuery &&
          bookQuery?.data?.data?.map((item) => (
            <BookCard
              key={`bookId_${item?.id}`}
              image={item?.cover_url}
              title={item?.name}
              author={item?.author?.name}
            />
          ))}
      </Flex>
    </Flex>
  )
}
