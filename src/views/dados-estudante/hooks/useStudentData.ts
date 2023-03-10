import { FormikHelpers } from 'formik'
import { useQuery } from 'react-query'
import { toast } from 'react-toastify'
import * as Yup from 'yup'
import {
  getFetchStudentData,
  putFetchStudentData,
  getFetchFormData
} from '../service'
import { IErrorInterface, RecevedStudentData } from '../type'
import { generateFrameOptions } from '../utils'

export const UseStudentData = () => {
  let optionsSelects: any = {
    grauId: [],
    cursoId: [],
    universidadeId: [],
    provinciaId: [],
    municipioId: []
  }

  const { data, isFetching } = useQuery(
    'getStudentDate',
    async () => {
      try {
        const studentData = await getFetchStudentData()
        const formsData = await getFetchFormData()
        if (studentData && formsData)
          toast('Estudante Encotrado com sucesso', {
            autoClose: 2000,
            type: 'success'
          })

        return { studentData, formsData }
      } catch (err) {
        const error = err as IErrorInterface
        toast(error.response?.data?.error, { autoClose: 2000, type: 'error' })
      }
    },
    { refetchOnWindowFocus: false }
  )

  if (data) {
    const { studentData, formsData } = data
    optionsSelects = {
      grauId: generateFrameOptions(studentData.grauId, formsData.graus),
      cursoId: generateFrameOptions(studentData.cursoId, formsData.cursos),
      universidadeId: generateFrameOptions(
        studentData.universidadeId,
        formsData.universidades
      ),
      provinciaId: generateFrameOptions(
        studentData.provinciaId,
        formsData.provincias
      ),
      municipioId: generateFrameOptions(
        studentData.municipioId,
        formsData.municipios
      )
    }
  }

  return {
    optionsSelects,
    data,
    isFetching,
    initialValues: data?.studentData,
    validationShema: Yup.object({
      email: Yup.string()
        .email('E-mail inválido')
        .required('O Campo E-mail não pode estar vázio'),
      nome: Yup.string()
        .min(3, 'O nome deve ter no mínimo 3 caracteres')
        .required('O Campo nome não pode estar vázio'),
      sobrenome: Yup.string()
        .min(3, 'O sobrenome deve ter no mínimo 3 caracteres')
        .required('O Campo sobrenome não pode estar vázio'),
      telefone: Yup.string()
        .matches(
          /^\9[1-9]\d{7}$/,
          'Por favor, digite um número de telefone válido de Angola'
        )
        .required('número de telefone é obrigatório'),
      grauId: Yup.string().required('Selecione uma das opções'),
      cursoId: Yup.string().required('Selecione uma das opções'),
      universidadeId: Yup.string(),
      provinciaId: Yup.string().required('Selecione uma das opções'),
      municipioId: Yup.string().required('Selecione uma das opções'),
      bairro: Yup.string().required('Especifique O bairro que moras')
    }),
    handleSubmit: async (
      values: RecevedStudentData,
      { setSubmitting }: FormikHelpers<RecevedStudentData>
    ) => {
      try {
        const data = await putFetchStudentData(values)

        if (data)
          toast('Dados atualizado com sucesso', {
            autoClose: 2000,
            type: 'success'
          })
      } catch (err) {
        const error = err as IErrorInterface
        toast(error.response?.data?.error, { autoClose: 2000, type: 'error' })
      }

      setSubmitting(false)
    }
  }
}
