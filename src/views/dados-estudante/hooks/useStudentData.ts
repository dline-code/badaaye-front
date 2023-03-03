import { FormikHelpers } from 'formik'
import { useQuery } from 'react-query'
import { toast } from 'react-toastify'
import * as Yup from 'yup'
import { getFetchStudentData } from '../service'
import { StudentData } from '../type'

const UseStudentData = () => {
  const { data } = useQuery('getStudentDate', async () => {
    // try {
    //   // const student = await getFecthStudent1(data)
    //   // if(student) toast("Cadastro feito com sucesso", {autoClose: 2000, type: "success"})
    // } catch (err) {
    //   // const error = err as IErrorInterface
    //   // toast(error.response?.data?.error, {autoClose: 2000, type: "error"})
    // }
    const initialValues = await getFetchStudentData('id')
    return initialValues
  })

  return {
    initialValues: data!,
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
      grade: Yup.string()
        .min(5, 'O campo deve ter no mínimo 5 caracteres')
        .required('O Campo é Obrigatório'),
      course: Yup.string()
        .min(5, 'O campo deve ter no mínimo 5 caracteres')
        .required('O Campo é Obrigatório'),
      school: Yup.string()
        .min(5, 'O campo deve ter no mínimo 5 caracteres')
        .required('O Campo é Obrigatório'),
      prov: Yup.string()
        .min(5, 'O campo deve ter no mínimo 5 caracteres')
        .required('O Campo é Obrigatório'),
      muni: Yup.string()
        .min(5, 'O campo deve ter no mínimo 5 caracteres')
        .required('O Campo é Obrigatório'),
      street: Yup.string()
        .min(5, 'O campo deve ter no mínimo 5 caracteres')
        .required('O Campo é Obrigatório')
    }),
    handleSubmit: (
      values: StudentData,
      { setSubmitting }: FormikHelpers<StudentData>
    ) => {
      setTimeout(() => {
        console.table(values)
        setSubmitting(false)
      }, 500)
    }
  }
}

export { UseStudentData }
