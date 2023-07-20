import axios from 'axios'
import { getCookie } from 'cookies-next'

const token = getCookie("baadaye-token")?.toString()

export const api = axios.create({
  baseURL: "http://localhost:5554",
  headers: {
    Accept: 'application/json',
    Authorization: `Bearer ${token}`
  }
})
