import { useEffect, useState } from 'react'
import { api } from 'src/services/api'
import { SolicitacaoFormSchema, SolicitacaoFormType } from '../validation'
import { useFormik } from 'formik'
import { toast } from 'react-toastify'
import { useQuery } from 'react-query'
import { Estudante } from 'src/model/estudante.model'

export function useSolicitacao(userId?: string) {
  const {
    data: studentData,
    isLoading,
    refetch
  } = useQuery({
    queryKey: [Estudante.ENDPOINT],
    queryFn: () => loadData(),
    enabled: !!userId
  })

  const loadData = async () => {
    const { data } = await api.get<Estudante>(`${Estudante.ENDPOINT}/dados`)
    return data
  }

  const handleSolicitation = async (data: SolicitacaoFormType) => {
    const formData = new FormData()
    formData.append('valorConfirmacao', data.valorConfirmacao.toString())
    formData.append('valorProprina', data.valorProprina.toString())
    formData.append('bilhete', data.bilhete as Blob)
    formData.append('certificado', data.certificado as Blob)
    formData.append('declaracaoNotas', data.declaracaoNotas as Blob)
    formData.append('declaracaoSemNotas', data.declaracaoSemNotas as Blob)
    formData.append('extratoBancario', data.extratoBancario as Blob)
    formData.append('videoMotivacional', data.videoMotivacional as Blob)

    try {
      const response = await api.post(`/`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      })

      const data = await response.data

      if (!data) {
        return toast.info('Operação não completa', { delay: 1500 })
      }

      toast.done('Salvo com sucesso')
    } catch (err) {
      console.log('Something error')
    }
  }

  const formik = useFormik({
    initialValues: {
      bilhete: '',
      declaracaoNotas: '',
      certificado: '',
      declaracaoSemNotas: '',
      extratoBancario: '',
      videoMotivacional: '',
      valorProprina: 0,
      valorConfirmacao: 0
    },
    validationSchema: SolicitacaoFormSchema,
    onSubmit: handleSolicitation
  })

  return { isLoading, studentData, formik }
}
