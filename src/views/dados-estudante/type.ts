export type OptionsDataProps = {
  graus: OptionProps[]
  cursos: OptionProps[]
  universidades: OptionProps[]
  provincias: OptionProps[]
}

export type OptionProps = {
  desc?: string | number
  value?: string | number
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

export type SendStudentData = {
  enderecoId: string
  nome: string
  sobrenome: string
  grauId: string
  cursoId: string
  universidadeId: string
  email: string
}

export type AddressSend = {
  municipioId: string
  bairro: string
}

export type UpdateStudentData = {
  enderecoData: AddressSend
  studentData: SendStudentData
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
