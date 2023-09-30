import { Flex, useToast } from '@chakra-ui/react'
import { CategoryList, Button, NavBar, Text } from 'components'
import { useMutation, useQuery } from 'react-query'
import { useParams } from 'react-router-dom'
import {
  getBookById,
  addBookToFavorite,
  removeBookFromFavorite
} from 'services/api/requests'

export const BookDetailScreen = () => {
  const toast = useToast()

  const { id } = useParams()
  const { data, refetch, isLoading } = useQuery(
    ['getBookById', id],
    () => getBookById(id),
    {
      enabled: !!id
    }
  )

  console.log({ data })

  const addFavoriteMutation = useMutation(
    (addBook) => addBookToFavorite(addBook),
    {
      onError: (error) => {
        toast({
          title: 'Erro ao adicionar livro aos favoritos.',
          description:
            error.response?.data?.error || 'Por favor tente novamente.',
          status: 'error',
          duration: 4000,
          isClosable: true,
          position: 'top-right'
        })
        refetch()
      },
      onSuccess: () => {
        toast({
          title: 'Livro adicionado aos favoritos com sucesso.',
          status: 'success',
          duration: 4000,
          isClosable: true,
          position: 'top-right'
        })
        refetch()
      }
    }
  )

  const removeFavoriteMutation = useMutation(
    (removeBook) => removeBookFromFavorite(removeBook),
    {
      onError: (error) => {
        toast({
          title: 'Erro ao remover o livro dos favoritos.',
          description:
            error?.response?.data?.error || 'Por favor tente novamente.',
          status: 'error',
          duration: 4000,
          isClosable: true,
          position: 'top-right'
        })
        refetch()
      },
      onSuccess: () => {
        toast({
          title: 'Livro removido dos favoritos com sucesso.',
          status: 'success',
          duration: 4000,
          isClosable: true,
          position: 'top-right'
        })
        refetch()
      }
    }
  )

  const clickButtonFavorite = () => {
    if (data?.data?.favorite) {
      removeFavoriteMutation.mutate(data?.data?.favorite?.id)
    } else {
      addFavoriteMutation.mutate({
        book_id: id
      })
    }
  }

  return (
    <Flex flexDir="column" w="100vw" alignItems="center">
      <NavBar />
      <Flex
        w="100%"
        flexDir="row"
        paddingX={['12px', '12px', '48px', '112px']}
        mt={['24px', '48px']}
      >
        <Flex
          w="288px"
          h="358px"
          borderRadius="12px"
          bgImage={`url(${data?.data?.book?.cover_url})`}
          bgPosition="center"
          bgSize="cover"
          bgRepeat="no-repeat"
          mr="24px"
        />
        <Flex flexDir="column" w="70%" mr="24px">
          <Text.title fontSize="24px">{data?.data?.book?.name}</Text.title>
          <Text mt="4px" fontSize="16px" color="brand.grayDark">
            {data?.data?.book?.author?.name}
          </Text>
          <Text.title mt="24px">Informações</Text.title>
          <Flex mt="4px" justifyContent="space-between">
            <Text fontSize="14px" color="brand.grayDark">
              Categoria: {data?.data?.book?.category?.name}
            </Text>
            <Text fontSize="14px" color="brand.grayDark">
              Páginas: {data?.data?.book?.pages}
            </Text>
            <Text fontSize="14px" color="brand.grayDark">
              Ano de lançamento:{' '}
              {new Date(data?.data?.book?.release_date).getFullYear()}
            </Text>
          </Flex>
          <Text.title mt="24px">Sinopse</Text.title>
          <Flex h="160px" overflowY="scroll">
            <Text>{data?.data?.book?.synopsis}</Text>
          </Flex>
        </Flex>
        <Flex>
          <Button
            onClick={clickButtonFavorite}
            secondary={data?.data?.favorite}
            isLoading={
              isLoading ||
              addFavoriteMutation.isLoading ||
              removeFavoriteMutation.isLoading
            }
          >
            {!data?.data?.favorite
              ? 'Adicionar aos favoritos'
              : 'Remover dos favoritos'}
          </Button>
        </Flex>
      </Flex>

      <CategoryList
        title="Livros Relacionados"
        categoryId={data?.data?.book?.category_id}
      />
    </Flex>
  )
}
