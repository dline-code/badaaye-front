import axios from 'axios'

export const api = axios.create({
  baseURL: " http://localhost:5554",
  headers: {
    Accept: 'application/json'
  }
})
