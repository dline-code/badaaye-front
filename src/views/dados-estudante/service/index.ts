import { api } from 'src/services/api'
import {
  CursoType,
  GrauType,
  MunicipioType,
  AddressSend,
  ProvinciaType,
  RecevedStudentData,
  SendStudentData,
  UniversidadeType,
  UpdateStudentData
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
  let enderecoId = data.enderecoId

  const enderecoData = {
    municipioId: data.municipioId,
    bairro: data.bairro
  }

  const studentData = {
    // dataNascimento:data.da,
    // loginId:data.l,
    enderecoId: data.enderecoId,
    nome: data.nome,
    sobrenome: data.sobrenome,
    grauId: data.grauId,
    cursoId: data.cursoId,
    universidadeId: data.universidadeId,
    email: data.email
  }

  if (!enderecoId) {
    const resp = await setNewEnderecoStudent(
      { enderecoData, studentData },
      data.id
    )

    return resp
  }

  const [resp1, resp2] = await Promise.all([
    api.put(`endereco/${enderecoId}`, enderecoData),
    api.put(`estudante/${data.id}`, studentData)
  ])

  return { resp1, resp2 }
}

const setNewEnderecoStudent = async (
  { enderecoData, studentData }: UpdateStudentData,
  id: string
) => {
  const enderecoId = await setFetchEndereco(enderecoData)

  studentData = {
    ...studentData,
    enderecoId
  }
  const resp = await api.put(`estudante/${id}`, studentData)

  return resp
}

const setFetchEndereco = async (enderecoData: AddressSend) => {
  const resp = await api.post(`/endereco`, enderecoData)
  const enderecoId: string = resp.data.id

  return enderecoId
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
