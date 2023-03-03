import {
  MdBook,
  MdDomain,
  MdEdit,
  MdEmail,
  MdLock,
  MdPerson,
  MdPhone,
  MdPlace,
  MdSchool
} from 'react-icons/md'

export const formControls = [
  {
    id: 'email',
    name: 'email',
    inputTitle: 'E-mail',
    StarIcon: MdEmail,
    EndIcon: MdEdit
  },
  {
    id: 'nome',
    name: 'nome',
    inputTitle: 'Nome completo',
    StarIcon: MdPerson,
    EndIcon: MdEdit
  },
  {
    id: 'telefone',
    name: 'telefone',
    inputTitle: 'Número de telefone',
    StarIcon: MdPhone,
    EndIcon: MdEdit
  },
  {
    id: 'senha',
    name: 'senha',
    inputTitle: 'Senha',
    StarIcon: MdLock,
    EndIcon: MdEdit
  },
  {
    id: 'grade',
    name: 'grade',
    inputTitle: 'Grau académico',
    StarIcon: MdSchool,
    EndIcon: MdEdit
  },
  {
    id: 'course',
    name: 'course',
    inputTitle: 'Curso',
    StarIcon: MdBook,
    EndIcon: MdEdit
  },
  {
    id: 'school',
    name: 'school',
    inputTitle: 'Instituição de ensino',
    StarIcon: MdDomain,
    EndIcon: MdEdit
  },
  {
    id: 'prov',
    name: 'prov',
    inputTitle: 'Província',
    StarIcon: MdPlace,
    EndIcon: MdEdit
  },
  {
    id: 'muni',
    name: 'muni',
    inputTitle: 'Munícipio',
    StarIcon: MdPlace,
    EndIcon: MdEdit
  },
  {
    id: 'street',
    name: 'street',
    inputTitle: 'Bairro',
    StarIcon: MdPlace,
    EndIcon: MdEdit
  }
]
