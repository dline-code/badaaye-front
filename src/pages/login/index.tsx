import type { GetServerSideProps, NextPage } from 'next'
import { isAuthenticated } from 'src/functions/checkIsUserAuthenticated'
import Login from 'src/views/login'

const PageLogin: NextPage = () => {
  return <Login />
}

export const getServerSideProps: GetServerSideProps<{}> = async ({
  req,
  res
}) => {
  if (isAuthenticated(req)) {
    res.writeHead(303, { Location: '/' })
    res.end()
  }

  return { props: {} }
}

export default PageLogin
