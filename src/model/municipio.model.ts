import { Provincia } from './provincia.model'

export class Municipio {
  static ENDPOINT = '/municipio'
  id?: string
  designacao?: string
  provinciaId?: string
  createdAt?: string
  updatedAt?: string
  provincia?: Provincia
}
