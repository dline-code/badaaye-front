import { useEffect, useState } from 'react'
import { api } from 'src/services/api'
import { SolicitacaoFormSchema, SolicitacaoFormType } from '../validation'
import { useFormik } from 'formik'

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
    console.log(data)

    // console.log(student, "estudante");
    // try{
    //     const formData1 = new FormData();
    //     const formData2 = new FormData();
    //     const formData3 = new FormData();
    //     const formData4 = new FormData();
    //     const formData5 = new FormData();
    //     formData1.append('file', data.bilheteId[0])
    //     formData2.append('file', data.certificadoId[0])
    //     formData3.append('file', data.declaracaoNotasId[0])
    //     formData4.append('file', data.declaracaoSemNotasId[0])
    //     formData5.append('file', data.extratoBancarioId[0])
    //     const [bilheteId, certificadoId, declaracaoNotasId, declaracaoSemNotasId, extratoBancarioId]:any = await Promise.all([
    //         getFile(formData1),
    //         getFile(formData2),
    //         getFile(formData3),
    //         getFile(formData4),
    //         getFile(formData5)
    //     ]).then((results) => {
    //         return {
    //         bilheteId: results[0],
    //         certificadoId: results[1],
    //         declaracaoNotasId: results[2],
    //         declaracaoSemNotasId: results[3],
    //         extratoBancarioId: results[4]
    //         };
    //     });
    //     data = {...data, bilheteId, certificadoId, declaracaoNotasId, declaracaoSemNotasId, extratoBancarioId }
    //     console.log(data);
    // }catch(err){
    //     console.log(err?.response?.data?.message);
    // }
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
  return { handleSolicitation, isLoading, studentData, formik }
}
