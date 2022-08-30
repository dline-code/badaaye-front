import type { NextPage } from 'next'
import Head from 'next/head'
import Banner from 'src/components/banner'
import Step from 'src/components/step-financiamento'
import Benefits from 'src/views/benefits'
import Institution from 'src/views/institution'
import Contactos from 'src/components/contactos'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Baadaye</title>
      </Head>
      <main>
        <Banner />
        <Step />
        <Benefits />
        <Institution />
        <Contactos />
      </main>
    </>
  )
}

export default Home
