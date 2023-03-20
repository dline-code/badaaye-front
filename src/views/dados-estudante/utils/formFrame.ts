import { MdEdit, MdEmail, MdPerson, MdPhone } from 'react-icons/md'

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
