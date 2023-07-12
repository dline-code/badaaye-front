import Link from 'next/link'
import { useEffect, useState } from 'react'
import { AiOutlineArrowLeft } from 'react-icons/ai'
import Button from 'src/components/button'
import { Layout } from 'src/components/layout'
import * as S from './styles'
import { PageProps } from './types'
import { useFetchData } from './hooks'
import PopOver from './Components/PopOver'

export default function TelaEstudantesFinaciadosView(props: PageProps) {
  const { financingData, isFetching, isLoading } = useFetchData()

  const [data, setData] = useState(financingData)
  const [seached, setSeached] = useState('')

  useEffect(() => {
    setData(financingData)
  }, [isFetching, isLoading])

  const handleFilterFinancigData = () => {
    const text = seached.toLowerCase().trim()
    const newData = financingData?.filter(
      ({
        estudante,
        anoAcademico,
        valorConfirmacao,
        estadoFinanciamento,
        valorProprina
      }) =>
        estudante.nome.toLowerCase().includes(text) ||
        anoAcademico.toLowerCase().includes(text) ||
        valorConfirmacao.toLowerCase().includes(text) ||
        valorProprina.toLowerCase().includes(text) ||
        estadoFinanciamento.designacao.toLowerCase().includes(text)
    )

    setData(newData)
  }

  if (isFetching && isLoading) {
    return <>Carregando...</>
  }

  return (
    <Layout {...Object.assign({}, props, { hideFooter: true, isLogged: true })}>
      <S.Main>
        <S.Content>
          <S.ContentHeader>
            <Link href={'/tela-principal-parceiro'}>
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
            <S.SearchFilterSide>
              <input
                type="search"
                name="filter"
                id="filter"
                placeholder="Procurar por nome, ano academico, estado...."
                onChange={e => setSeached(e.target.value)}
              />
              <Button onClick={handleFilterFinancigData}>Procurar</Button>
            </S.SearchFilterSide>
            <table>
              <S.THead>
                <tr>
                  <th>Nome</th>
                  <th>Ano Academico</th>
                  <th>Confirmação</th>
                  <th>Próprinas</th>
                  <th>Estado</th>
                  <th>Opções</th>
                </tr>
              </S.THead>

              <S.TBody>
                {data?.map(
                  ({
                    estudante,
                    anoAcademico,
                    id,
                    valorConfirmacao,
                    valorProprina,
                    estadoFinanciamento,
                    declaracaoNotas,
                    declaracaoSemNotas,
                    certificado,
                    bilhete,
                    extratoBancario
                  }) => (
                    <tr key={id}>
                      <td>{estudante.nome}</td>
                      <td>{anoAcademico}</td>
                      <td>{valorConfirmacao}</td>
                      <td>{valorProprina}</td>
                      <td style={{ color: '#00B37E' }}>
                        {estadoFinanciamento.designacao}
                      </td>
                      <td>
                        <PopOver
                          files={[
                            declaracaoNotas,
                            declaracaoSemNotas,
                            certificado,
                            bilhete,
                            extratoBancario
                          ]}
                        />
                      </td>
                    </tr>
                  )
                )}
              </S.TBody>
            </table>

            <Button>Ver mais</Button>
          </S.ContentBody>
        </S.Content>
      </S.Main>
    </Layout>
  )
}
