import { useQuery } from 'react-query'
import { api } from 'src/services/api'

export function useFormData() {
  const { data } = useQuery(
    'getFormData',
    async () => {
      const [resp1, resp2, resp3, resp4, resp5] = await Promise.all([
        api.get('/grau'),
        api.get('/curso'),
        api.get('/universidade'),
        api.get('/provincia'),
        api.get('/municipio/124ab94e-a8c8-4f52-bfd8-06f4141b5347')
      ])

      const data = {
        graus: resp1.data,
        cursos: resp2.data,
        universidades: resp3.data,
        provincias: resp4.data,
        municipios: resp5.data
      }

      return data
    },
    { refetchOnWindowFocus: false }
  )

  return data
}
