export interface PageProps {
  hideFooter?: boolean
  isLogged?: boolean
}

export type FileType = {
  id: string
  link: string
  nome: string
  extensao: string
  createdAt: string
  updatedAt: string
}

export type StatusType = {
  id: string
  designacao: string
  createdAt: string
  updatedAt: string
}
export type CourseType = {
  id: string
  descricao:string,
  areaId:string
  nome:string
  createdAt: string
  updatedAt: string
}
export type GradType = {
  id: string
  designacao: string
  createdAt: string
  updatedAt: string
}
export type UniversityType = {
  id: string,
	descricao:string,
  nome:string,
  logotipoId: string,
  sigla: string
  createdAt: string
  updatedAt: string
}

export type StudentDataType = {
  id: string
  nome: string
  dataNascimento: string
  sexo: string
  estadoCivil: string
  bi: string
  endereco: {}
  curso:CourseType
  grau: GradType
  universidade: UniversityType
}

export type FinanciesDataProps = {
  id: string
  anoAcademico: string
  bi: string
  valorProprina: string
  valorConfirmacao: string
  createdAt: string
  updatedAt: string

  certificadoId: string
  bilheteId: string
  videoMotivacionalId: string
  declaracaoNotasId: string
  declaracaoSemNotasId: string
  extratoBancarioId: string
  estadoFinanciamentoId: string
  estudanteId: string

  certificado: FileType
  bilhete: FileType
  videoMotivacional: FileType
  declaracaoNotas: FileType
  declaracaoSemNotas: FileType
  extratoBancario: FileType
  estadoFinanciamento: StatusType

  estudante: StudentDataType
}