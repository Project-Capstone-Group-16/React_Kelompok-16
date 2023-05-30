import axios from 'axios'

export const baseAPI = axios.create({
  baseURL: 'http://13.55.207.170:8080/',
})
