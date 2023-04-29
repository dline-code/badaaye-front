import Link from 'next/link'
import { AiOutlineArrowLeft } from 'react-icons/ai'
import { Layout } from 'src/components/layout'
import * as S from './styles'
import { PageProps } from './types'

export default function TelaEstudantesFinaciadosView(props: PageProps) {
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
