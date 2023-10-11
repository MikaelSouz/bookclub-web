import { Flex } from '@chakra-ui/react'
import { BookList, Loader, NavBar, Text } from 'components'
import { useQuery } from 'react-query'
import { useParams } from 'react-router-dom'
import { getAuthorById } from 'services/api/requests'

export const AuthorDetailScreen = () => {
  const { id } = useParams()
  const { data, isLoading } = useQuery(
    ['getBookById', id],
    () => getAuthorById(id),
    {
      enabled: !!id
    }
  )

  return (
    <Flex flexDir="column" w="100vw" alignItems="center">
      <NavBar />
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <Flex
            w="100vw"
            flexDir={['column', 'column', 'row', 'row']}
            paddingX={['12px', '12px', '48px', '112px']}
            mt={['24px', '24px', '48px', '48px']}
            alignItems={['center', 'center', 'flex-start', 'flex-start']}
          >
            <Flex
              w={['200px', '200px', '240px', '288px']}
              h={['248px', '248px', '298px', '358px']}
              borderRadius="12px"
              bgImage={`url(${data?.data?.avatar_url})`}
              bgPosition="center"
              bgSize="cover"
              bgRepeat="no-repeat"
              mr={['0px', '0px', '24px', '24px']}
            />
            <Flex
              flexDir="column"
              w={['90%', '90%', '70%', '70%']}
              justifyContent={['center', 'center', 'flex-start', 'flex-start']}
              mr={['0px', '0px', '24px', '24px']}
            >
              <Text.title
                fontSize="24px"
                textAlign={['center', 'center', 'start', 'start']}
                mt={['12px', '12px', '0px', '0px']}
              >
                {data?.data?.name}
              </Text.title>

              <Text.title mt="12px">Sobre o autor(a)</Text.title>

              <Flex h="200px" overflowY="scroll" mt="12px">
                <Text>{data?.data?.bio}</Text>
              </Flex>
            </Flex>
          </Flex>
          <Flex w="100%" paddingX={['12px', '12px', '48px', '112px']} mt="36px">
            <BookList title={'Livro do autor(a)'} data={data?.data?.book} />
          </Flex>
        </>
      )}
    </Flex>
  )
}
