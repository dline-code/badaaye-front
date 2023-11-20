import * as yup from 'yup'

export const SolicitacaoFormSchema = yup.object().shape({
  bilhete: yup.mixed().required('campo obrigatório'),
  declaracaoNotas: yup.mixed().required('campo obrigatório'),
  certificado: yup.mixed().required('campo obrigatório'),
  declaracaoSemNotas: yup.mixed().required('campo obrigatório'),
  extratoBancario: yup.mixed().required('campo obrigatório'),
  videoMotivacional: yup.mixed().required('campo obrigatório'),
  valorProprina: yup.number().required('campo obrigatório'),
  valorConfirmacao: yup.number().required('campo obrigatório')
})

export type SolicitacaoFormType = yup.InferType<typeof SolicitacaoFormSchema>
