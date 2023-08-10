import type { GetServerSideProps } from 'next'
import { isAuthenticated } from 'src/functions/checkIsUserAuthenticated'

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

export default getServerSideProps

// export { default as getServerSideProps } from "src/utils/serverSideProps";
