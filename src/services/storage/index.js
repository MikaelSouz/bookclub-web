import { userKeyToken } from 'services/constants'

export const saveToken = (value) => {
  try {
    return localStorage.setItem(userKeyToken, value)
  } catch (error) {
    return error
  }
}

export const restoreToken = (key) => {
  try {
    return localStorage.getItem(key)
  } catch (error) {
    return error
  }
}
