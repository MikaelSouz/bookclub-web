import { Flex } from '@chakra-ui/react'
import { NavBar, Text, BookCard } from 'components'
import { useQuery } from 'react-query'
import { getBookFavorites } from 'services/api/requests'

export const FavoriteScreen = () => {
  const { data } = useQuery('getBookFavorites', getBookFavorites)

  return (
    <Flex w="100vw" h="100vh" flexDir="column">
      <NavBar />
      <Flex
        w="100%"
        flexDir="column"
        paddingX={['12px', '12px', '48px', '112px']}
        mt={['24px', '24px', '48px', '48px']}
      >
        <Text.title>Favoritos</Text.title>
        <Flex
          flexWrap="wrap"
          alignItems="center"
          justifyContent={['center', 'center', 'flex-start', 'flex-start']}
        >
          {data &&
            data?.data?.map((item) => (
              <BookCard
                key={`book_favorite_id_${item?.id}`}
                cover_url={item?.book?.cover_url}
                name={item?.book?.name}
                author={item?.book?.author?.name}
                id={item?.book_id}
              />
            ))}
        </Flex>
      </Flex>
    </Flex>
  )
}
