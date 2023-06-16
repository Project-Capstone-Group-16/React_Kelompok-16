import { baseAPI } from '../configs/apiServices'

const token = localStorage.getItem('token')

export const api = {
  //login
  login: (body) => {
    return baseAPI.post('/login/admin', body)
  },

  //register
  register: (body) => {
    return baseAPI.post('/register/admin', body)
  },

  //upload image
  uploadImage: (body) => {
    return baseAPI.post('/upload/image', body)
  },

  //ENDPOINT YANG MENGGUNAKAN TOKEN
  //dashboard
  //get data warehouse
  getWarehouse: () => {
    return baseAPI.get('/admin/warehouse', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
  },

  //create warehouse
  createWarehouse: (body) => {
    return baseAPI.post('/admin/warehouse', body, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
  },
  //update warehouse
  updateWarehouse: (id, body) => {
    return baseAPI.put(`/admin/warehouse/${id}`, body, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
  },
  //delete warehouse
  deleteWatrehouse: (id) => {
    return baseAPI.delete(`/admin/warehouse/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
  },

  //get user
  getUser: () => {
    return baseAPI.get('/admin/users', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
  },

  //get staff
  getStaff: () => {
    return baseAPI.get('/admin/staff', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
  },

  //create staff
  createStaff: (body) => {
    return baseAPI.post('/admin/staff', body, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
  },

  //update staff
  updateStaff: (id, body) => {
    return baseAPI.put('/admin/staff/', id, body, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
  },

  //delete staff
  deleteStaff: (id) => {
    return baseAPI.delete('/admin/staff', id, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
  },
}
