import type { NextPage } from 'next'
import Head from 'next/head'
import Banner from 'src/components/banner'
import Step from 'src/components/financing-steps'
import Benefits from 'src/views/benefits'
import Institution from 'src/views/institution'
import { Layout } from 'src/components/layout'
import FrequentQuestions from 'src/components/frequent-question'
import React from 'react'

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
        <FrequentQuestions />
        {/* <Contactos /> */}
      </main>
    </>
  )
}

Object.assign(Home,{
  Layout:Layout
})

export default Home;
