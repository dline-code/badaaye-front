import type { NextPage } from 'next'
import Head from 'next/head'
import Contactos from '../components/contactos'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Baadaye</title>
      </Head>
      <main>
        <Contactos />
      </main>
    </>
  )
}

export default Home
