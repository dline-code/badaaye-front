import { useQuery } from 'react-query'
import { api } from 'src/services/api'
import { FinancingType } from '../types'
import { useAuth } from 'src/hooks/useAuth'
import { getCookie } from 'cookies-next'

export const useFetchData = () => {
  const { usuarioId } = useAuth()
  const token = getCookie(`${process.env.NEXT_PUBLIC_TOKEN_KEY}`)?.toString()

  return useQuery<FinancingType[]>('financingData', async () => {
    const response = await api.get(`/financiamento/parceiro/${usuarioId}`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })

    return response.data
  })
}
