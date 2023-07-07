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

export type StudentDataType = {
  id: string
  nome: string
  dataNascimento: string
  sexo: string
  estadoCivil: string
  bi: string
  endereco: {}
  curso: {}
  grau: {}
  universidade: {}
}

export type PartnerDataType = {
  id: string
  nome: string
  descricao: string
}

export type FinancingType = {
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
  parceiroId: string

  certificado: FileType
  bilhete: FileType
  videoMotivacional: FileType
  declaracaoNotas: FileType
  declaracaoSemNotas: FileType
  extratoBancario: FileType
  estadoFinanciamento: StatusType

  estudante: StudentDataType
  parceiro: PartnerDataType
}

export interface PopOverProps {
  files: FileType[]
}
