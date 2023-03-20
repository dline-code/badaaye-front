import { api } from 'src/services/api'
import {
  CursoType,
  GrauType,
  MunicipioType,
  ProvinciaType,
  RecevedStudentData,
  UniversidadeType
} from '../type'

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
    grauId: estudante.grauId,
    cursoId: estudante.cursoId,
    universidadeId: estudante.universidadeId,
    provinciaId: estudante.endereco?.municipio.provinciaId,
    municipioId: estudante.endereco?.municipioId,
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

const getFetchGrauData = async () => {
  const resp = await api.get('/grau')
  const data: GrauType[] = resp.data

  return data
}

const getFetchCursoData = async () => {
  const resp = await api.get('/curso')
  const data: CursoType[] = resp.data

  return data
}

const getFetchUnivData = async () => {
  const resp = await api.get('/universidade')
  const data: UniversidadeType[] = resp.data

  return data
}

const getFetchProvinceData = async () => {
  const resp = await api.get('/provincia')
  const data: ProvinciaType[] = resp.data

  return data
}

async function getFetchMunicipios(provinciaId: string) {
  const response = await api.get(`/municipio/${provinciaId}`)
  const municipios: MunicipioType[] = response.data

  return municipios
}

export {
  getFetchProvinceData,
  getFetchGrauData,
  getFetchCursoData,
  getFetchStudentData,
  getFetchUnivData,
  putFetchStudentData,
  getFetchMunicipios
}
