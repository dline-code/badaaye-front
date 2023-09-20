import { useEffect, useState } from 'react'
import { api } from 'src/services/api'
import { SolicitacaoFormSchema, SolicitacaoFormType } from '../validation'
import { useFormik } from 'formik'
import { toast } from 'react-toastify'

export function useSolicitacao(userId?: string) {
  const [studentData, setStudentData] = useState({})
  const [isLoading, setIsLoading] = useState(false)

  const getStudentData = async () => {
    const resp = await api.get(`/estudante/dados?usuarioId=${userId}`)
    const data = resp.data
    console.log(data)
    setStudentData(data)
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

  useEffect(() => {
    if (userId) {
      getStudentData()
    }
  }, [userId])
  return { isLoading, studentData, formik }
}
