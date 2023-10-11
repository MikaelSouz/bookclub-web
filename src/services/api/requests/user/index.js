import { api } from 'services/api'
import { userKeyToken } from 'services/constants'
import { restoreToken } from 'services/storage'

export const updateUser = (data) =>
  api.put('/user', data, {
    headers: {
      Authorization: `bearer ${restoreToken(userKeyToken)}`
    }
  })

export const updateUserAvatar = (data) =>
  api.put('/user/avatar', data, {
    headers: {
      Authorization: `bearer ${restoreToken(userKeyToken)}`
    }
  })
