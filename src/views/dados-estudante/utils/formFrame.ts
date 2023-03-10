import {
  MdBook,
  MdDomain,
  MdEdit,
  MdEmail,
  MdPerson,
  MdPhone,
  MdPlace,
  MdSchool
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
    id: 'grauId',
    name: 'grauId',
    labelName: 'Grau académico',
    as: 'select',
    StarIcon: MdSchool,
    EndIcon: MdEdit
  },
  {
    id: 'cursoId',
    name: 'cursoId',
    labelName: 'Curso',
    as: 'select',
    StarIcon: MdBook,
    EndIcon: MdEdit
  },
  {
    id: 'universidadeId',
    name: 'universidadeId',
    labelName: 'Universidade',
    as: 'select',
    StarIcon: MdDomain,
    EndIcon: MdEdit
  },
  {
    id: 'provinciaId',
    name: 'provinciaId',
    labelName: 'Provincia',
    as: 'select',
    StarIcon: MdPlace,
    EndIcon: MdEdit
  },
  {
    id: 'municipioId',
    name: 'municipioId',
    labelName: 'Municipio',
    as: 'select',
    StarIcon: MdPlace,
    EndIcon: MdEdit
  }
]
