import { useQuery } from 'react-query'
import { api } from 'src/services/api'
import { FinancingType } from '../types'
import { useAuth } from 'src/hooks/useAuth'

export const useFetchData = () => {
  const { usuarioId } = useAuth()
  const { data: financingData, isLoading } = useQuery<FinancingType[]>(
    'financing',
    async () => {
      const response = await api.get(`/financiamento/parceiro/${usuarioId}`)

      return response.data
    },
    {
      refetchOnWindowFocus: false
    }
  )
  return { financingData, isLoading }
}
