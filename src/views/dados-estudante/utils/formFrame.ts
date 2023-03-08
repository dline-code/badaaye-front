import {
  MdBook,
  MdDomain,
  MdEdit,
  MdEmail,
  MdPerson,
  MdPhone,
  MdPlace,
  MdSchool,
  MdColorize
} from 'react-icons/md'

export const inputControls = [
  {
    id: 'email',
    name: 'email',
    labelName: 'E-mail',
    as: 'input',
    StarIcon: MdEmail,
    EndIcon: MdEdit
  },
  {
    id: 'nome',
    name: 'nome',
    labelName: 'Nome',
    as: 'input',
    StarIcon: MdPerson,
    EndIcon: MdEdit
  },
  {
    id: 'sobrenome',
    name: 'sobrenome',
    labelName: 'SobreNome',
    as: 'input',
    StarIcon: MdPerson,
    EndIcon: MdEdit
  },
  {
    id: 'telefone',
    name: 'telefone',
    labelName: 'Número de telefone',
    as: 'input',
    StarIcon: MdPhone,
    EndIcon: MdEdit
  }
]

export const selectControls = [
  {
    id: 'grau',
    name: 'grau',
    labelName: 'Grau académico',
    as: 'select',
    StarIcon: MdSchool,
    EndIcon: MdEdit
  },
  {
    id: 'curso',
    name: 'curso',
    labelName: 'Curso',
    as: 'select',
    StarIcon: MdBook,
    EndIcon: MdEdit
  },
  {
    id: 'universidade',
    name: 'universidade',
    labelName: 'Universidade',
    as: 'select',
    StarIcon: MdDomain,
    EndIcon: MdEdit
  },
  {
    id: 'provincia',
    name: 'provincia',
    labelName: 'Provincia',
    as: 'select',
    StarIcon: MdPlace,
    EndIcon: MdEdit
  },
  {
    id: 'municipio',
    name: 'municipio',
    labelName: 'Municipio',
    as: 'select',
    StarIcon: MdPlace,
    EndIcon: MdEdit
  }
]
