import * as Yup from 'yup'

const validationSchema = Yup.object({
  email: Yup.string()
    .email('E-mail inválido')
    .required('O Campo E-mail não pode estar vázio'),
  nome: Yup.string()
    .min(3, 'O nome deve ter no mínimo 3 caracteres')
    .required('O Campo nome não pode estar vázio'),
  sobrenome: Yup.string()
    .min(3, 'O sobrenome deve ter no mínimo 3 caracteres')
    .required('O Campo sobrenome não pode estar vázio'),
  telefone: Yup.string()
    .matches(
      /^\9[1-9]\d{7}$/,
      'Por favor, digite um número de telefone válido de Angola'
    )
    .required('número de telefone é obrigatório'),
  grauId: Yup.string().required('Selecione uma das opções'),
  cursoId: Yup.string().required('Selecione uma das opções'),
  universidadeId: Yup.string(),
  provinciaId: Yup.string().required('Selecione uma das opções'),
  municipioId: Yup.string().required('Selecione uma das opções'),
  bairro: Yup.string().required('Especifique O bairro que moras')
})

function generateFrameOptions(optionId: string, options: any[]) {
  return options.map(option => {
    return {
      desc: option.designacao || option.nome,
      value: option.id,
      selected: optionId === option.id
    }
  })
}

export { generateFrameOptions, validationSchema }
