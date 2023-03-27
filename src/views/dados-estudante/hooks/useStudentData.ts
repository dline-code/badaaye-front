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
  SelectsType,
  RecevedStudentData,
  OptionType
} from '../type'
import { generateFrameOptions, validationSchema } from '../utils'

export function UseStudentData() {
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

  useEffect(() => {
    handleChangeTheProvice(studentData?.provinciaId)
  }, [studentData, studentData?.provinciaId])

  const { data: graus } = useQuery('getGrau', getFetchGrauData, {
    refetchOnWindowFocus: false
  })
  const { data: cursos } = useQuery('getCurso', getFetchCursoData, {
    refetchOnWindowFocus: false
  })
  const { data: universidades } = useQuery('getUniv', getFetchUnivData, {
    refetchOnWindowFocus: false
  })
  const { data: provincias } = useQuery('getProvincia', getFetchProvinceData, {
    refetchOnWindowFocus: false
  })

  let optionSelects: SelectsType = {
    grauId: [],
    cursoId: [],
    universidadeId: [],
    provinciaId: []
  }

  const [optionMunicipio, setOptionMunicipio] = useState<OptionType[]>([])

  async function handleChangeTheProvice(currentProvince?: string) {
    try {
      const municipioId = studentData?.municipioId
        ? studentData.municipioId
        : ''
      const provinciaId = currentProvince ? currentProvince : ''

      const municipioData = await getFetchMunicipios(provinciaId)
      if (municipioData) {
        setOptionMunicipio(generateFrameOptions(municipioId, municipioData))
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

  if (studentData && graus && cursos && universidades && provincias) {
    optionSelects = {
      grauId: generateFrameOptions(studentData.grauId, graus),
      cursoId: generateFrameOptions(studentData.cursoId, cursos),
      universidadeId: generateFrameOptions(
        studentData.universidadeId,
        universidades
      ),
      provinciaId: generateFrameOptions(studentData.provinciaId, provincias)
    }
  }

  return {
    error,
    isFetching,
    initialValues: studentData!,
    validationSchema,
    optionSelects,
    optionMunicipio,
    handleChangeTheProvice,
    handleSubmit
  }
}
