import { useState } from 'react'
import { useFormik } from 'formik'
import { toast } from 'react-toastify'
import * as yup from 'yup'
import { putFetchStudentPart2 } from '../services'
import { IErrorInterface, IStudent } from '../type'
import Router from 'next/router'
import { getCookie, deleteCookie } from 'cookies-next'

const UseValidateData = () => {
  const [isSubmitting, setIsSubmitting] = useState(false)

  const estudanteId = getCookie('estudanteId')?.toString()

  async function studentRegistrationPart2(data: IStudent) {
    setIsSubmitting(true)

    try {
      const student = await putFetchStudentPart2(data)
      if (student) {
        toast('Cadastro feito com sucesso', {
          autoClose: 2000,
          type: 'success'
        })

        Router.push({
          pathname: '/tela-principal-estudante',
          query: { estudanteId }
        })

        deleteCookie('estudanteId')
      }
    } catch (err) {
      const error = err as IErrorInterface
      toast(error.response?.data?.error, { autoClose: 2000, type: 'error' })
    } finally {
      setTimeout(() => {
        setIsSubmitting(false)
      }, 2000)
    }
  }

  const formik = useFormik({
    initialValues: {
      grauId: '',
      cursoId: '',
      universidadeId: '',
      provinciaId: '',
      municipioId: '',
      bairro: ''
    },
    validationSchema: yup.object({
      grauId: yup
        .string()
        .min(1, 'selecione o campo')
        .required('O grau é obrigatório'),
      cursoId: yup
        .string()
        .min(1, 'selecione o campo')
        .required('O curso é obrigatório'),
      universidadeId: yup
        .string()
        .min(1, 'selecione o campo')
        .required('a universidade é obrigatório'),
      municipioId: yup
        .string()
        .min(1, 'selecione o campo')
        .required('O municipio é obrigatório'),
      bairro: yup.string().required('O bairro é obrigatório')
    }),
    onSubmit: data => {
      const targetData = Object.assign(data, { estudanteId })
      studentRegistrationPart2(targetData)
    }
  })
  return {
    formik,
    isSubmitting
  }
}
export { UseValidateData }
