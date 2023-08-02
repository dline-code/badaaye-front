import axios from 'axios'
import { getCookie } from 'cookies-next'

const token = getCookie(`${process.env.NEXT_PUBLIC_TOKEN_KEY}`)?.toString()

export const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,

  headers: {
    Accept: 'application/json',
    Authorization: `Bearer ${process.env.NEXT_PUBLIC_TOKEN_KEY}`
  }
})