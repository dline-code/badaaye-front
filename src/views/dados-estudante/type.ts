export type ProvinciaType = {
  id: string
  designacao: string
  createdAt: string
  updatedAt: string
}

export type MunicipioType = {
  id: string
  designacao: string
  provinciaId: string
  createdAt: string
  updatedAt: string
  provincia: ProvinciaType
}

export type GrauType = {
  id: string
  designacao: string
  createdAt: string
  updatedAt: string
}

export type UniversidadeType = {
  descricao: string
  nome: string
  logotipoId: string
  sigla: string
}

export type CursoType = {
  id: string
  nome: string
  descricao: string
  areaId: string
  createdAt: string
  updatedAt: string
  area: AreaType
}

export type AreaType = {
  id: string
  designacao: string
  createdAt: string
  updatedAt: string
}
export interface SendDATA {
  nome: string
  sobrenome: string
  dataNascimento: string
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
