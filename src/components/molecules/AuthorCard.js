import { Flex } from '@chakra-ui/react'
import { Text } from 'components/atoms'
import { useNavigate } from 'react-router-dom'

export const AuthorCard = ({ avatar_url, name, id }) => {
  const navigate = useNavigate()

  return (
    <Flex
      flexDir="column"
      alignItems="center"
      justifyContent="center"
      mr="18px"
      mt="12px"
      mb="6px"
      cursor="pointer"
      onClick={() => navigate(`/author-detail/${id}`)}
    >
      <Flex
        w={['120px', '120px', '140px', '154px']}
        h={['180px', '180px', '210px', '230px']}
        bgImage={`url(${avatar_url})`}
        bgPos="center"
        bgSize="cover"
        bgRepeat="no-repeat"
        borderRadius="12px"
      />
      <Text
        noOfLines={1}
        fontWeight="600"
        mt="8px"
        fontSize="12px"
        align="center"
        maxW={['120px', '120px', '140px', '154px']}
      >
        {name}
      </Text>
    </Flex>
  )
}
