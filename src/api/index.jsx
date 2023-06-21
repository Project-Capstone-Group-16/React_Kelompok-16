import Cookies from 'js-cookie'
import { baseAPI } from '../configs/apiServices'

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
    return baseAPI.post('/upload/imageweb', body)
  },

  //ENDPOINT YANG MENGGUNAKAN TOKEN
  //dashboard
  getDashboard: () => {
    return baseAPI.get('/admin/dashboard', {
      headers: {
        Authorization: `Bearer ${Cookies.get('token')}`,
      },
    })
  },
  //get data warehouse
  getWarehouse: () => {
    return baseAPI.get('/admin/warehouse', {
      headers: {
        Authorization: `Bearer ${Cookies.get('token')}`,
      },
    })
  },

  //create warehouse
  createWarehouse: (body) => {
    return baseAPI.post('/admin/warehouse', body, {
      headers: {
        Authorization: `Bearer ${Cookies.get('token')}`,
      },
    })
  },
  //update warehouse
  updateWarehouse: (id, body) => {
    return baseAPI.put(`/admin/warehouse/${id}`, body, {
      headers: {
        Authorization: `Bearer ${Cookies.get('token')}`,
      },
    })
  },
  //delete warehouse
  deleteWatrehouse: (id) => {
    return baseAPI.delete(`/admin/warehouse/${id}`, {
      headers: {
        Authorization: `Bearer ${Cookies.get('token')}`,
      },
    })
  },

  //get user
  getUser: () => {
    return baseAPI.get('/admin/users', {
      headers: {
        Authorization: `Bearer ${Cookies.get('token')}`,
      },
    })
  },

  //get staff
  getStaff: () => {
    return baseAPI.get('/admin/staff', {
      headers: {
        Authorization: `Bearer ${Cookies.get('token')}`,
      },
    })
  },

  //create staff
  createStaff: (body) => {
    return baseAPI.post('/admin/staff', body, {
      headers: {
        Authorization: `Bearer ${Cookies.get('token')}`,
      },
    })
  },

  //update staff
  updateStaff: (id, body) => {
    return baseAPI.put(`/admin/staff/${id}`, body, {
      headers: {
        Authorization: `Bearer ${Cookies.get('token')}`,
      },
    })
  },

  //delete staff
  deleteStaff: (id) => {
    return baseAPI.delete(`/admin/staff/${id}`, {
      headers: {
        Authorization: `Bearer ${Cookies.get('token')}`,
      },
    })
  },

  //get all transaction
  getTransaction: () => {
    return baseAPI.get('/admin/transactions', {
      headers: {
        Authorization: `Bearer ${Cookies.get('token')}`,
      },
    })
  },
}
