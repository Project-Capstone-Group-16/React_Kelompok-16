import { baseAPI } from '../configs/apiServices'

const token = localStorage.getItem('token')

export const api = {
  login: (body) => {
    return baseAPI.post('/login/admin', body)
  },

  register: (body) => {
    return baseAPI.post('/register/admin', body)
  },

  getAllWarehouse: () => {
    return baseAPI.get('/admin/warehouse', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
  },
}
