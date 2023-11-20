import { api } from 'src/services/api'
import { AddressSend, RecevedStudentData, UpdateStudentData } from '../type'
import { Grau } from 'src/model/grau.model'
import { Curso } from 'src/model/curso.model'
import { Universidade } from 'src/model/universidade.model'
import { Provincia } from 'src/model/provincia.model'
import { Municipio } from 'src/model/municipio.model'

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
  const data: Grau[] = resp.data

  return data
}

const getFetchCursoData = async () => {
  const resp = await api.get('/curso')
  const data: Curso[] = resp.data

  return data
}

const getFetchUnivData = async () => {
  const resp = await api.get('/universidade')
  const data: Universidade[] = resp.data

  return data
}

const getFetchProvinceData = async () => {
  const resp = await api.get('/provincia')
  const data: Provincia[] = resp.data

  return data
}

async function getFetchMunicipios(provinciaId: string) {
  const response = await api.get(`/municipio/${provinciaId}`)
  const municipios: Municipio[] = response.data

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
