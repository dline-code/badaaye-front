import { useFormik } from 'formik'
import { IErrorInterface, IPartner } from '../type'
import { toast } from 'react-toastify'
import * as yup from 'yup'
import { postPartner } from '../services'
import { useRouter } from 'next/router'
import { setCookie } from 'react-use-cookie'
import { useState } from 'react'

export const usePartner = () => {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const router = useRouter()

  const partnerResistration = async (data: IPartner) => {
    setIsSubmitting(true)

    try {
      const response = await postPartner(data)

      if (response) {
        toast('Cadastro feito com sucesso', {
          autoClose: 2000,
          type: 'success'
        })

        setCookie('baadaye-token', response.token)
        setCookie('parceiroId', response.usuario.id)

        router.push('/parceiro-cadastro-interesse')
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
      nome: '',
      email: '',
      tipoParceiroId: '',
      telefone: '',
      senha: '',
      confirmeSenha: ''
    },
    validationSchema: yup.object({
      nome: yup
        .string()
        .min(2, 'selecione o campo')
        .required('O nome é obrigatório'),
      email: yup
        .string()
        .email('digite um email valido')
        .required('O curso é obrigatório'),
      tipoParceiroId: yup
        .string()
        .min(1, 'selecione o campo')
        .required('tipo de parceiro é obrigatório'),
      telefone: yup
        .string()
        .matches(
          /^\9[1-9]\d{7}$/,
          'Por favor, digite um número de telefone válido de Angola'
        )
        .required('número de telefone é obrigatório'),
      senha: yup
        .string()
        .min(8, 'a senha deve ter pelo menos 8 digitos')
        .required('a senha é obrigatoria'),
      confirmeSenha: yup
        .string()
        .required('A confirmação de senha é obrigatoria')
        .oneOf([yup.ref('senha')], 'As senhas não correspondem')
    }),
    onSubmit: data => {
      partnerResistration(data)
    }
  })

  return {
    formik,
    isSubmitting
  }
}
