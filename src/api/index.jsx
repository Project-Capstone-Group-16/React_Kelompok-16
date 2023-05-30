import { baseAPI } from '../configs/apiServices'

export const api = {
  login: (body) => {
    return baseAPI.post('/login/admin', body)
  },

  register: (body) => {
    return baseAPI.post('/register/admin', body)
  },
}
