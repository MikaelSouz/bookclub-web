import axios from 'axios'
import { QueryClient } from 'react-query'

import { restoreToken } from 'services/storage'
import { userKeyToken } from 'services/constants'

export const api = axios.create({
  baseURL: 'https://api.bookclub.mapadaprogramacao.com.br',
  headers: {
    Authorization: `bearer ${restoreToken(userKeyToken)}`
  }
})

export const queryClient = new QueryClient()
