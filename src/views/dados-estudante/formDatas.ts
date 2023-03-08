import {
  MdBook,
  MdDomain,
  MdEdit,
  MdEmail,
  MdLock,
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
    labelName: 'Nome completo',
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
  },
  {
    id: 'senha',
    name: 'senha',
    labelName: 'Senha',
    as: 'input',
    StarIcon: MdLock,
    EndIcon: MdEdit
  }
]

export const selectControls = [
  {
    id: 'grau',
    name: 'grau',
    labelName: 'Grau académico',
    as: 'select',
    options: [],
    StarIcon: MdSchool,
    EndIcon: MdEdit
  },
  {
    id: 'curso',
    name: 'curso',
    labelName: 'Curso',
    as: 'select',
    options: [],
    StarIcon: MdBook,
    EndIcon: MdEdit
  },
  {
    id: 'universidade',
    name: 'universidade',
    labelName: 'Instituição de ensino',
    as: 'select',
    options: [],
    StarIcon: MdDomain,
    EndIcon: MdEdit
  },
  {
    id: 'provinvia',
    name: 'provinvia',
    labelName: 'Província',
    as: 'select',
    options: [
      {
        desc: 'Luanda',
        value: 'luanda',
        selected: false
      },
      {
        desc: 'Uíge',
        value: 'uige',
        selected: true
      }
    ],
    StarIcon: MdPlace,
    EndIcon: MdEdit
  },
  {
    id: 'municipio',
    name: 'municipio',
    labelName: 'Munícipio',
    as: 'select',
    options: [],
    StarIcon: MdPlace,
    EndIcon: MdEdit
  },
  {
    id: 'bairro',
    name: 'bairro',
    labelName: 'Bairro',
    as: 'select',
    options: [],
    StarIcon: MdPlace,
    EndIcon: MdEdit
  },
  {
    id: 'color',
    name: 'color',
    labelName: 'Color',
    as: 'select',
    options: [],
    StarIcon: MdColorize,
    EndIcon: MdEdit
  }
]
