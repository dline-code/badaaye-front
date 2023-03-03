export interface SendDATA {
  nome: string
  dataNascimento: string
  sobrenome: string
  loginId: string
  universidadeId: string
  enderecoId: string
  grauId: string
  cursoId: string
}

export type RecevedStudentData = {
  id: string
  nome: string
  sobrenome: string
  email: string
  emailId: string
  telefone: string
  telefoneId: string
  curso: string
  cursoId: string
  dataNascimento: string
  endereco: string
  enderecoId: string
  grau: string
  grauId: string
  universidade: string
  universidadeId: string
  senha: string
}

export interface IResponse {
  status: number
  statusText: string
  data: {
    error: string
    status: number
  }
}

export interface IErrorInterface {
  message: string
  name: string
  stack: string
  response: IResponse
}
