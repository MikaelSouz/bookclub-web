import { Flex, Image } from '@chakra-ui/react'
import {
  SearchBar,
  MenuUser,
  ModalUser,
  ModalPassword,
  ModalTerms,
  ModalPrivacyPolicy
} from 'components'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export const NavBar = ({ query, setQuery }) => {
  const [showModal, setShowModal] = useState()
  const navigate = useNavigate()

  const onClose = () => {
    setShowModal()
  }

  return (
    <Flex
      w="100vw"
      flexDir="row"
      justifyContent="space-between"
      mt="24px"
      paddingX={['12px', '12px', '48px', '112px']}
    >
      <Image
        src="/img/logo.svg"
        alt="bookclub logo"
        w={['100px', '100px', '120px', '160px']}
        h="48px"
        onClick={() => navigate('/home')}
        cursor="pointer"
      />
      <Flex display={['none', 'none', 'flex', 'flex']}>
        <SearchBar query={query} setQuery={setQuery} />
      </Flex>
      <MenuUser setShowModal={setShowModal} />

      {showModal === 'user' && <ModalUser onClose={onClose} />}
      {showModal === 'password' && <ModalPassword onClose={onClose} />}
      {showModal === 'terms' && <ModalTerms onClose={onClose} />}
      {showModal === 'policy' && <ModalPrivacyPolicy onClose={onClose} />}
    </Flex>
  )
}
