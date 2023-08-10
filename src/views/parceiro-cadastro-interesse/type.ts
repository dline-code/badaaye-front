export interface IPartnerPart2 {
  areaId: string
  descricao: string
  parceiroId: string | undefined
}

interface IResponse {
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
