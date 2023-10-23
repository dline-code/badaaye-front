import { Area } from './area.model'

export class Curso {
  static ENDPOINT = '/curso'
  id?: string
  nome?: string
  descricao?: string
  areaId?: string
  createdAt?: string
  updatedAt?: string
  area?: Area
}
