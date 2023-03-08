import { api } from 'src/services/api'
import { FormDataType, RecevedStudentData } from '../type'

const getFetchStudentData = async (): Promise<RecevedStudentData> => {
  const {
    data: { estudante, telefone, email }
  } = await api.get(`/estudante/dados`)

  const recevedData = {
    id: estudante.id,
    nome: estudante.nome,
    sobrenome: estudante.sobrenome,
    dataNascimento: estudante.dataNascimento,
    cursoId: estudante.cursoId,
    grauId: estudante.grauId,
    universidadeId: estudante.universidadeId,
    emailId: email.id,
    email: email.designacao,
    telefoneId: telefone.id,
    telefone: telefone.designacao
  }

  return recevedData
}

const putFetchStudentData = async (id: string, data: RecevedStudentData) => {
  const response = await api.put(`estudante/${id}`, data)
  return response.data
}

const getFetchFormData = async () => {
  const [resp1, resp2, resp3, resp4, resp5] = await Promise.all([
    api.get('/grau'),
    api.get('/curso'),
    api.get('/universidade'),
    api.get('/provincia'),
    api.get('/municipio/124ab94e-a8c8-4f52-bfd8-06f4141b5347')
  ])

  const data: FormDataType = {
    graus: resp1.data,
    cursos: resp2.data,
    universidades: resp3.data,
    provincias: resp4.data,
    municipios: resp5.data
  }

  return data
}

export { getFetchStudentData, getFetchFormData, putFetchStudentData }
