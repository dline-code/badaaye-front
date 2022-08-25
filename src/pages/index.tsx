import type { NextPage } from 'next'
import Head from 'next/head'
import Banner from 'src/components/banner'
import Step from 'src/components/step-financiamento'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Baadaye</title>
      </Head>
      <main>
        <Banner />
        <Step />
      </main>
    </>
  )
}

export default Home
