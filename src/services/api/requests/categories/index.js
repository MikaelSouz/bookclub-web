import { api } from 'services/api'
import { restoreToken } from 'services/storage'
import { userKeyToken } from 'services/constants'

export const getCategories = () =>
  api.get('/category', {
    headers: {
      Authorization: `bearer ${restoreToken(userKeyToken)}`
    }
  })
