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

export type RecevedStudentData = {
  id: string
  nome: string
  sobrenome: string
  cursoId: string
  grauId: string
  universidadeId: string
  email: string
  telefone: string
  provinciaId: string
  municipioId: string
  bairro: string
  enderecoId: string
}

export type SelectsType = {
  grauId: OptionType[]
  cursoId: OptionType[]
  universidadeId: OptionType[]
  provinciaId: OptionType[]
}

export type OptionType = {
  desc: any
  value: any
  selected: boolean
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
