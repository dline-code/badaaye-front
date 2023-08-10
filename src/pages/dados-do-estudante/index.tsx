import type { GetServerSideProps, NextPage } from 'next'
import { isAuthenticated } from 'src/functions/checkIsUserAuthenticated'
import { DadosEstudante } from 'src/views/dados-estudante'

const PaginaDadosEstudante: NextPage = () => {
  return <DadosEstudante />
}

export const getServerSideProps: GetServerSideProps<{}> = async ({
  req,
  res
}) => {
  if (!isAuthenticated(req)) {
    res.writeHead(303, { Location: '/login' })
    res.end()
  }

  return { props: {} }
}

export default PaginaDadosEstudante
