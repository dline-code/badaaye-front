import { TipoContacto } from './tipoContacto.model'

export class Contacto {
  static ENDPOINT = '/tipoParceiro'
  id?: string
  designacao?: string
  tipoContactoId?: string
  usuario_id?: string
  tipo_usuario?: string
  createdAt?: string
  updatedAt?: string
  tipoContacto?: TipoContacto
}
