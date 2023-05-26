import axios from 'axios'
import jwt_decode from 'jwt-decode'

export const login = (data, callback) => {
  axios
    .post('https://fakestoreapi.com/auth/login', data)
    .then((res) => {
      console.log(res)
      callback(true, res.data.token)
    })
    .catch((error) => {
      console.log(error)
      callback(false, error)
    })
}

export const register = (data, callback) => {
  axios
    .post('https://fakestoreapi.com/users', data)
    .then((res) => {
      console.log(res)
      callback(true, res)
    })
    .catch((error) => {
      console.log(error)
      callback(false, error)
    })
}

export const getUsername = (token) => {
  const decoded = jwt_decode()
  console.log(decoded)
}
