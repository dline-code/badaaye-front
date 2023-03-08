import { api } from 'src/services/api'
import { RecevedStudentData, SendDATA } from '../type'

const getFetchStudentData = async (): Promise<RecevedStudentData> => {
  const {
    data: { estudante, telefone, email }
  } = await api.get(`/estudante/dados`)

  const recevedData = {
    id: estudante.id,
    nome: estudante.nome,
    sobrenome: estudante.sobrenome,
    curso: estudante.curso || 'Engenharia Informática',
    cursoId: estudante.cursoId,
    dataNascimento: estudante.dataNascimento,
    endereco: estudante.endereco,
    enderecoId: estudante.enderecoId,
    grau: estudante.grau || 'Ensino Superior',
    grauId: estudante.grauId,
    universidade: estudante.universidade || 'Universidade Agostinho Neto',
    universidadeId: estudante.universidadeId,
    emailId: email.id,
    email: email.designacao,
    telefoneId: telefone.id,
    telefone: telefone.designacao,
    senha: estudante.login.senha,
    color: ['red', 'blue', 'green', 'yellow']
  }

  return recevedData
}

const putFetchStudentData = async (id: string, data: RecevedStudentData) => {
  const response = await api.put(`estudante/${id}`, data)
  return response.data
}

export { getFetchStudentData, putFetchStudentData }
