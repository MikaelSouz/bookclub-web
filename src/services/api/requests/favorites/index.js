import { api } from 'services/api'
import { userKeyToken } from 'services/constants'
import { restoreToken } from 'services/storage'

export const addBookToFavorite = (data) =>
  api.post('/userbook', data, {
    headers: {
      Authorization: `bearer ${restoreToken(userKeyToken)}`
    }
  })

export const removeBookFromFavorite = (id) =>
  api.delete(`/userbook/${id}`, {
    headers: {
      Authorization: `bearer ${restoreToken(userKeyToken)}`
    }
  })
