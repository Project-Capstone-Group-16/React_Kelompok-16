import axios from 'axios'
import jwt_decode from 'jwt-decode'

export const login = (data, callback) => {
  axios
    .post('http://143.198.92.250:8080/login/admin', data) //port menyesuaikan server API backend
    .then((res) => {
      console.log(res)
      callback(true, res.data.data.token)
    })
    .catch((error) => {
      console.log(error)
      callback(false, error)
    })
}

export const register = (data, callback) => {
  axios
    .post('http://143.198.92.250:8080/register/admin', data) //port menyesuaikan server API backend
    .then((res) => {
      console.log(res)
      callback(true, res.data)
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
