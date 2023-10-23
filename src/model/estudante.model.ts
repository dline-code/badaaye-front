import { Contacto } from './contacto.model'
import { Curso } from './curso.model'
import { Endereco } from './endereco.model'
import { Grau } from './grau.model'
import { Universidade } from './universidade.model'

export class Estudante {
  static ENDPOINT = '/estudante'
  id?: string
  estudante?: {
    id: string
    nome: string
    dataNascimento: string
    sexo: string
    estadoCivil: string
    bi: string
    enderecoId: string
    cursoId: string
    grauId: string
    universidadeId: string
    createdAt: string
    updatedAt: string
    endereco: Endereco
    curso: Curso
    grau: Grau
    universidade: Universidade
  }
  telefone?: Contacto
  email?: Contacto
}
