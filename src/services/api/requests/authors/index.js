import { api } from 'services/api'
import { restoreToken } from 'services/storage'
import { userKeyToken } from 'services/constants'

export const getAuthorById = (id) =>
  api.get(`/author/${id}`, {
    headers: {
      Authorization: `bearer ${restoreToken(userKeyToken)}`
    }
  })
