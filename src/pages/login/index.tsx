import type { GetServerSideProps, NextPage } from 'next'
import { isAuthenticated } from 'src/functions/checkIsUserAuthenticated'
import Login from 'src/views/login'

const PageLogin: NextPage = () => {
  return <Login />
}

export default PageLogin
