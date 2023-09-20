import { GetServerSideProps, NextPage } from 'next'
import { isAuthenticated } from 'src/functions/checkIsUserAuthenticated'
import { SolicitacaoDeFinanciamentoView } from 'src/views/solicitacao-de-financiamento'

const SolicitacaoFinanciamento: NextPage = () => {
  return <SolicitacaoDeFinanciamentoView />
}

// export const getServerSideProps: GetServerSideProps<{}> = async ({
//   req,
//   res
// }) => {
//   if (!isAuthenticated(req)) {
//     res.writeHead(303, { Location: '/login' })
//     res.end()
//   }

//   if (isAuthenticated(req)?.tipo_usuario !== 'parceiro') {
//     res.writeHead(303, { Location: '/tela-principal-estudante' })
//     res.end()
//   }

//   return { props: {} }
// }

export default SolicitacaoFinanciamento
