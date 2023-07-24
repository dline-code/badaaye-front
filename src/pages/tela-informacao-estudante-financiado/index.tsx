import { GetServerSideProps, InferGetServerSidePropsType, NextPage } from 'next'
import { useRouter } from 'next/router'
import { isAuthenticated } from 'src/functions/checkIsUserAuthenticated'

function TelaInformacaoEstudanteFinanciado() {
  return <>Os dados virão aqui!</>
}

export const getServerSideProps: GetServerSideProps<{}> = async ({
  req,
  res
}) => {
  if (!isAuthenticated(req)) {
    res.writeHead(303, { Location: '/login' })
    res.end()
  }

  if (isAuthenticated(req)?.tipo_usuario !== 'parceiro') {
    res.writeHead(303, { Location: '/tela-principal-estudante' })
    res.end()
  }

  return { props: {} }
}

export default TelaInformacaoEstudanteFinanciado
