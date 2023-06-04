import axios from 'axios'

export const baseAPI = axios.create({
  baseURL: 'http://143.198.92.250:8080/',
  headers: {
    'Content-Type': 'application/json',
    
  },
})
