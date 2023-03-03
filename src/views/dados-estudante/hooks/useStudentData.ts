import { FormikHelpers } from 'formik'
import { useQuery } from 'react-query'
import { toast } from 'react-toastify'
import * as Yup from 'yup'
import { getFetchStudentData, putFetchStudentData } from '../service'
import { IErrorInterface, RecevedStudentData, SendDATA } from '../type'

const UseStudentData = () => {
  const { data, isFetching } = useQuery('getStudentDate', async () => {
    try {
      const data = await getFetchStudentData()
      if (data)
        toast('Estudante Encotrado com sucesso', {
          autoClose: 2000,
          type: 'success'
        })
      return data
    } catch (err) {
      const error = err as IErrorInterface
      toast(error.response?.data?.error, { autoClose: 2000, type: 'error' })
    }
  })

  return {
    data,
    isFetching,
    initialValues: data,
    validationShema: Yup.object({
      email: Yup.string()
        .email('E-mail inválido')
        .required('O E-mail é obrigatório'),
      nome: Yup.string()
        .min(3, 'O nome deve ter no mínimo 3 caracteres')
        .required('O nome é obrigatório'),
      telefone: Yup.string()
        .matches(
          /^\9[1-9]\d{7}$/,
          'Por favor, digite um número de telefone válido de Angola'
        )
        .required('número de telefone é obrigatório'),
      senha: Yup.string()
        .min(8, 'a senha deve ter pelo menos 8 digitos')
        .required('a senha é obrigatoria'),
      grau: Yup.string()
        .min(5, 'O campo deve ter no mínimo 5 caracteres')
        .required('O Campo é Obrigatório'),
      curso: Yup.string()
        .min(5, 'O campo deve ter no mínimo 5 caracteres')
        .required('O Campo é Obrigatório'),
      universidade: Yup.string()
        .min(5, 'O campo deve ter no mínimo 5 caracteres')
        .required('O Campo é Obrigatório'),
      provinvia: Yup.string()
        .min(5, 'O campo deve ter no mínimo 5 caracteres')
        .required('O Campo é Obrigatório'),
      municipio: Yup.string()
        .min(5, 'O campo deve ter no mínimo 5 caracteres')
        .required('O Campo é Obrigatório'),
      bairro: Yup.string()
        .min(5, 'O campo deve ter no mínimo 5 caracteres')
        .required('O Campo é Obrigatório')
    }),
    handleSubmit: async (
      values: RecevedStudentData,
      { setSubmitting }: FormikHelpers<RecevedStudentData>
    ) => {
      await putFetchStudentData(values.id, values)

      setSubmitting(false)
    }
  }
}

export { UseStudentData }
