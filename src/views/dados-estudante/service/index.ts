import { api } from 'src/services/api'
import { FormDataType, RecevedStudentData } from '../type'

const getFetchStudentData = async (): Promise<RecevedStudentData> => {
  const {
    data: { estudante, telefone, email }
  } = await api.get(`/estudante/dados`)

  const recevedData = {
    id: estudante.id,
    email: email.designacao,
    nome: estudante.nome,
    sobrenome: estudante.sobrenome,
    telefone: telefone.designacao,
    grauId: estudante.grauId || '',
    cursoId: estudante.cursoId || '',
    universidadeId: estudante.universidadeId || '',
    provinciaId: estudante.endereco?.municipio.provinciaId || '',
    municipioId: estudante.endereco?.municipioId || '',
    bairro: estudante.endereco?.bairro,
    enderecoId: estudante.endereco?.id
  }

  return recevedData
}

const putFetchStudentData = async (data: RecevedStudentData) => {
  const enderecoUpdateData = {
    municipioId: data.municipioId,
    bairro: data.bairro
  }

  const studentUpdateData = {
    nome: data.nome,
    sobrenome: data.sobrenome,
    grauId: data.grauId,
    cursoId: data.cursoId,
    universidadeId: data.universidadeId,
    email: data.email
  }

  const [resp1, resp2] = await Promise.all([
    api.put(`estudante/${data.id}`, studentUpdateData),
    api.put(`endereco/${data.enderecoId}`, enderecoUpdateData)
  ])

  return { resp1, resp2 }
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
