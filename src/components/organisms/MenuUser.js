import { useSelector, useDispatch } from 'react-redux'

import { Avatar, Flex, Menu, MenuButton, MenuList } from '@chakra-ui/react'
import { MenuItem } from 'components/molecules'

import {
  BsBookmark,
  BsFillPersonFill,
  BsShieldCheck,
  BsClipboard
} from 'react-icons/bs'
import { TbLogout } from 'react-icons/tb'
import { HiOutlineDocumentText } from 'react-icons/hi'
import { ChevronDownIcon } from '@chakra-ui/icons'
import { Text } from 'components/atoms'
import { useNavigate } from 'react-router-dom'
import { setAll } from 'services/store/slices/user'

export const MenuUser = ({ setShowModal }) => {
  const userStore = useSelector((state) => state.user)
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const logout = () => {
    localStorage.clear()
    dispatch(
      setAll({
        token: null,
        user: null
      })
    )
    navigate('/')
  }

  const listMenu = [
    {
      id: 0,
      name: 'Favoritos',
      icon: BsBookmark,
      divider: false,
      onClick: () => navigate('/favorites')
    },
    {
      id: 1,
      name: 'Dados Pessoais',
      icon: BsFillPersonFill,
      divider: false,
      onClick: () => setShowModal('user')
    },
    {
      id: 2,
      name: 'Alterar Senha',
      icon: BsShieldCheck,
      divider: true,
      onClick: () => setShowModal('password')
    },
    {
      id: 3,
      name: 'Termo de Uso',
      icon: HiOutlineDocumentText,
      divider: false,
      onClick: () => setShowModal('terms')
    },
    {
      id: 4,
      name: 'Política de Privacidade',
      icon: BsClipboard,
      divider: true,
      onClick: () => setShowModal('policy')
    },
    {
      id: 5,
      name: 'Sair',
      icon: TbLogout,
      divider: false,
      onClick: () => logout()
    }
  ]

  return (
    <Menu>
      <MenuButton>
        <Flex flexDir="row" alignItems="center">
          <Avatar
            name={userStore?.user?.name}
            src={userStore?.user?.avatar_url}
            mr="6px"
            bg="brand.primary"
            color="brand.black"
            w={['42px', '48px']}
            h={['42px', '48px']}
            borderStyle="solid"
            borderWidth="2px"
            borderColor="brand.primary"
          />
          <Flex display={['none', 'none', 'none', 'flex']}>
            <Text.title mr="6px">{userStore?.user?.name}</Text.title>
          </Flex>
          <ChevronDownIcon boxSize={8} />
        </Flex>
      </MenuButton>
      <MenuList>
        {listMenu.map((item) => (
          <MenuItem
            key={`menu_item${item.id}`}
            id={item.id}
            text={item.name}
            icon={item.icon}
            divider={item.divider}
            onClick={item.onClick}
          />
        ))}
      </MenuList>
    </Menu>
  )
}
