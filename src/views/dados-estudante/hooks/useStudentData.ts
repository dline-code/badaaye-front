import { FormikHelpers } from 'formik'
import { useEffect, useState } from 'react'
import { useQuery } from 'react-query'
import { toast } from 'react-toastify'
import {
  getFetchStudentData,
  putFetchStudentData,
  getFetchGrauData,
  getFetchCursoData,
  getFetchUnivData,
  getFetchProvinceData,
  getFetchMunicipios
} from '../service'
import {
  IErrorInterface,
  RecevedStudentData,
  OptionsDataProps,
  OptionProps
} from '../type'
import { generateFrameOptions, validationSchema } from '../utils'

export function UseStudentData() {
  const [options, setOptions] = useState<OptionsDataProps>()
  const [optionMunicipio, setOptionMunicipio] = useState<OptionProps[]>([])

  const {
    data: studentData,
    isFetching,
    error,
    refetch
  } = useQuery(
    'getStudentDate',
    async () => {
      try {
        const studentData = await getFetchStudentData()
        await loadGeralData()

        if (studentData)
          toast('Estudante Encotrado com sucesso', {
            autoClose: 2000,
            type: 'success'
          })

        return studentData
      } catch (err) {
        const error = err as IErrorInterface
        toast(error.response?.data?.error, { autoClose: 2000, type: 'error' })
      }
    },
    { refetchOnWindowFocus: false }
  )

  const loadGeralData = async () => {
    const graus = await getFetchGrauData()
    const cursos = await getFetchCursoData()
    const universidades = await getFetchUnivData()
    const provincias = await getFetchProvinceData()

    setOptions(() => ({
      graus: graus.map(item => ({
        desc: item.designacao,
        value: item.id
      })),
      cursos: cursos.map(item => ({
        desc: item.nome,
        value: item.id
      })),
      universidades: universidades.map(item => ({
        desc: item.nome,
        value: item.id
      })),
      provincias: provincias.map(item => ({
        desc: item.designacao,
        value: item.id
      }))
    }))
  }

  useEffect(() => {
    if (studentData?.provinciaId) {
      handleChangeTheProvice(studentData?.provinciaId)
    }
  }, [studentData, studentData?.provinciaId])

  async function handleChangeTheProvice(currentProvince?: string) {
    try {
      const provinciaId = currentProvince ? currentProvince : ''

      const municipioData = await getFetchMunicipios(provinciaId)
      if (municipioData) {
        setOptionMunicipio(() =>
          municipioData.map(item => ({ desc: item.designacao, value: item.id }))
        )
      }
    } catch (err) {
      const error = err as IErrorInterface
      toast(error.response?.data?.error, { autoClose: 2000, type: 'error' })
    }
  }

  async function handleSubmit(
    values: RecevedStudentData,
    { setSubmitting }: FormikHelpers<RecevedStudentData>
  ) {
    try {
      const data = await putFetchStudentData(values)

      if (data)
        toast('Dados atualizado com sucesso', {
          autoClose: 2000,
          type: 'success'
        })

      refetch()
    } catch (err) {
      const error = err as IErrorInterface
      toast(error.response?.data?.error, { autoClose: 2000, type: 'error' })
    }

    setSubmitting(false)
  }

  return {
    error,
    isFetching,
    initialValues: studentData!,
    validationSchema,
    options,
    optionMunicipio,
    handleChangeTheProvice,
    handleSubmit
  }
}
