import type { NextPage } from 'next'
import Head from 'next/head'
import Banner from 'src/components/banner'
import Step from 'src/components/financing-steps'
import Benefits from 'src/views/benefits'
import Institution from 'src/views/institution'
import Contactos from 'src/components/contactos'

import FrequentQuestions from 'src/components/frequent-question'
import { AiOutlineUser } from 'react-icons/ai'
import Select from 'src/components/select'


const Home: NextPage = () => {

  const list =['1','2','3','4']
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
        <Select icon={<AiOutlineUser/>} options={list}/>
        <FrequentQuestions />
        <Contactos />


      </main>
    </>
  )
}

export default Home
