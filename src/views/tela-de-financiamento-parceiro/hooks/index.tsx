import { getCookie } from 'cookies-next'
import { useQuery } from 'react-query'
import { api } from 'src/services/api'
import {FinanciesDataProps} from "../types"

export const useFetchData = () => {
  const token = getCookie(`${process.env.NEXT_PUBLIC_TOKEN_KEY}`)?.toString()

  return useQuery<FinanciesDataProps[]>('financiesData', async () => {
    const response = await api.get(`/financiamento`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })

    return response.data
  })
}