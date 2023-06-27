import { GetServerSideProps, NextPage } from 'next'
import { isAuthenticated } from 'src/functions/checkIsUserAuthenticated'
import { TelaPrincipalEstudanteView } from 'src/views/tela-principal-estudante'

const TelaPrincipalEstudante: NextPage = () => {
  return <TelaPrincipalEstudanteView />
}

export const getServerSideProps: GetServerSideProps<{}> = async ({
  req,
  res
}) => {
  if (!isAuthenticated(req)) {
    res.writeHead(303, { Location: '/login' })
    res.end()
  }

  if (isAuthenticated(req)?.tipo_usuario !== 'estudante') {
    res.writeHead(303, { Location: '/tela-principal-parceiro' })
    res.end()
  }

  return { props: {} }
}

export default TelaPrincipalEstudante
