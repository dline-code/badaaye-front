import type { NextPage } from 'next'
import Head from 'next/head'
import Banner from 'src/components/banner'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Baadaye</title>
      </Head>
      <main>
        <Banner />
      </main>
    </>
  )
}

export default Home
