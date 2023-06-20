import { useFormik } from 'formik'
import { IErrorInterface, IPartnerPart2 } from '../type'
import { postFetchPartner } from '../services'
import { toast } from 'react-toastify'
import * as yup from 'yup'
import { getCookie, deleteCookie } from 'cookies-next'
import { useRouter } from 'next/router'
import { useState } from 'react'

const UseValidatePartnerData = () => {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const router = useRouter()

  const parceiroId = getCookie('parceiroId')?.toString()

  deleteCookie('parceiroId')

  async function partnerResistration(data: IPartnerPart2) {
    setIsSubmitting(true)
    try {
      const partner = await postFetchPartner(data)
      if (partner) {
        toast('Cadastro feito com sucesso', {
          autoClose: 2000,
          type: 'success'
        })

        router.push('/tela-principal-parceiro')
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
      areaId: '',
      descricao: ''
    },
    validationSchema: yup.object({
      areaId: yup
        .string()
        .min(1, 'seleccione a area de interesse')
        .required('a area de interece é obrigatoria'),
      descricao: yup
        .string()
        .max(255, 'máximo de 255 caracteres')
        .required('a descricao é obrigatoria')
    }),
    onSubmit: data => {
      const targetData = Object.assign(data, { parceiroId })
      partnerResistration(targetData)
    }
  })
  return {
    formik,
    isSubmitting
  }
}
export { UseValidatePartnerData }
