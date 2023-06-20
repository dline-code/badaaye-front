import { useFormik } from 'formik'
import { useRouter } from 'next/router'
import { setCookie } from 'cookies-next'
import { useState } from 'react'
import { toast } from 'react-toastify'
import * as yup from 'yup'
import { postFecthStudent1 } from '../services'
import { IErrorInterface, IStudent } from '../type'

interface StudentProps {
  usuario: IStudent
}

const UseStudent = () => {
  const [isSubmitting, setIsSubmitting] = useState(false)

  const router = useRouter()

  async function studentRegistration1(data: IStudent) {
    setIsSubmitting(true)

    try {
      const response = await postFecthStudent1(data)
      if (response.usuario) {
        toast('Cadastro feito com sucesso', {
          autoClose: 2000,
          type: 'success'
        })

        setCookie('baadaye-token', response.token)
        setCookie('estudanteId', response.usuario.id)

        router.push('/estudate-cadastro-info-academica')
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
      dataNascimento: '',
      email: '',
      telefone: '',
      bi: '',
      senha: '',
      confirmarSenha: ''
    },
    validationSchema: yup.object({
      nome: yup.string().required('O nome é obrigatorio'),
      telefone: yup
        .string()
        .matches(
          /^\9[1-9]\d{7}$/,
          'Por favor, digite um número de telefone válido de Angola'
        )
        .required('número de telefone é obrigatório'),
      dataNascimento: yup
        .string()
        .required('A data de Nascimento é obrigatoria'),
      email: yup
        .string()
        .email('digite um email valido')
        .required('O email é obrigatorio'),
      bi: yup
        .string()
        .matches(/^\d{9}[a-zA-Z]{2}\d{3}$/, 'digite um bi válido')
        .required(''),
      senha: yup
        .string()
        .min(8, 'a senha deve ter pelo menos 8 digitos')
        .required('a senha é obrigatoria'),
      confirmarSenha: yup
        .string()
        .required('A confirmação de senha é obrigatoria')
        .oneOf([yup.ref('senha')], 'As senhas não correspondem')
    }),
    onSubmit: data => studentRegistration1(data)
  })

  return {
    formik,
    isSubmitting
  }
}

export { UseStudent }
