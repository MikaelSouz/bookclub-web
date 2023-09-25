import { useSelector } from 'react-redux'

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

export const MenuUser = () => {
  const userStore = useSelector((state) => state.user)

  const listMenu = [
    {
      id: 0,
      name: 'Favoritos',
      icon: BsBookmark,
      divider: false
    },
    {
      id: 1,
      name: 'Dados Pessoais',
      icon: BsFillPersonFill,
      divider: false
    },
    {
      id: 2,
      name: 'Alterar Senha',
      icon: BsShieldCheck,
      divider: true
    },
    {
      id: 3,
      name: 'Termo de Uso',
      icon: HiOutlineDocumentText,
      divider: false
    },
    {
      id: 4,
      name: 'Política de Privacidade',
      icon: BsClipboard,
      divider: true
    },
    {
      id: 5,
      name: 'Sair',
      icon: TbLogout,
      divider: false
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
          />
          <Text.title mr="6px">{userStore?.user?.name}</Text.title>
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
          />
        ))}
      </MenuList>
    </Menu>
  )
}
