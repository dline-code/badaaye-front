import type { NextPage } from 'next'
import Head from 'next/head'
import Banner from 'src/components/banner'
import Step from 'src/components/step-financiamento'
import Benefits from 'src/views/benefits'
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
      </main>
    </>
  )
}

export default Home
