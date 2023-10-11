import { api } from 'services/api'
import { userKeyToken } from 'services/constants'
import { restoreToken } from 'services/storage'

export const querySearch = (query) =>
  api.get(`/search?name=${query}`, {
    headers: {
      Authorization: `bearer ${restoreToken(userKeyToken)}`
    }
  })
