import Link from 'next/link'
import { AiOutlineArrowLeft } from 'react-icons/ai'
import { Layout } from 'src/components/layout'
import { financingData } from './mock'
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
          <S.ContentBody>
            <table>
              <S.THead>
                <tr>
                  <th>Nome</th>
                  <th>Grau</th>
                  <th>Curso</th>
                  <th>Instituição</th>
                  <th>Estado</th>
                </tr>
              </S.THead>

              <S.TBody>
                {financingData.map(item => (
                  <tr key={item.id}>
                    <td>{item.nome}</td>
                    <td>{item.grau}</td>
                    <td>{item.curso}</td>
                    <td>{item.instituicao}</td>
                    {item.estado === 'Finaciando' ? (
                      <td style={{ color: '#00B37E' }}>{item.estado}</td>
                    ) : (
                      <td style={{ color: '#F12929' }}>{item.estado}</td>
                    )}
                  </tr>
                ))}
              </S.TBody>
            </table>
          </S.ContentBody>
        </S.Content>
      </S.Main>
    </Layout>
  )
}
