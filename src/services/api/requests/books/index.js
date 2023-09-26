import { api } from 'services/api'
import { userKeyToken } from 'services/constants'
import { restoreToken } from 'services/storage'

export const getBookHighlightedCall = () =>
  api.get('/book?highlighted=true', {
    headers: {
      Authorization: `bearer ${restoreToken(userKeyToken)}`
    }
  })

export const getBookByCategory = (id) =>
  api.get(`/book?category_id=${id}`, {
    headers: {
      Authorization: `bearer ${restoreToken(userKeyToken)}`
    }
  })
