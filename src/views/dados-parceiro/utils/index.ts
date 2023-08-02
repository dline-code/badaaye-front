import * as Yup from 'yup'

const validationSchema = Yup.object({
  nome: Yup.string().required('O campo nome não pode estar vázio'),
  descricao: Yup.string().required('O campo descrição não pode estar vázio'),
  tipoParceiro: Yup.string().required(
    'O campo tipo de Parceiro não pode estar vázio'
  ),
  telefone: Yup.string().required(
    'O campo numero de telefone não pode estar vázio'
  )
})

export { validationSchema }
