import Link from 'next/link'
import { useState } from 'react'
import { AiOutlineArrowLeft } from 'react-icons/ai'
import Button from 'src/components/button'
import { Layout } from 'src/components/layout'
import { financingData } from './mock'
import * as S from './styles'
import { PageProps } from './types'

export default function TelaEstudantesFinaciadosView(props: PageProps) {
  const [data, setData] = useState(financingData)
  const [seached, setSeached] = useState('')

  const handleFilterFinancigData = () => {
    const text = seached.trim()
    const newData = financingData.filter(
      ({ nome, curso, instituicao, grau }) =>
        nome.includes(text) ||
        curso.includes(text) ||
        instituicao.includes(text) ||
        grau.includes(text)
    )

    setData(newData)
  }
  return (
    <Layout {...Object.assign({}, props, { hideFooter: true, isLogged: true })}>
      <S.Main>
        <S.Content>
          <S.ContentHeader>
            <Link href={'../'}>
              <a>
                <AiOutlineArrowLeft />
              </a>
            </Link>

            <h2> Estudantes financiados por si</h2>

            <p>
              Visualize os dados dos estudantes que estão a ser <br />
              financiados ou já foram financiados por si
            </p>
          </S.ContentHeader>

          <S.ContentBody></S.ContentBody>
        </S.Content>
      </S.Main>
    </Layout>
  )
}
