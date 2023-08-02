import { Layout } from 'src/components/layout'
import * as S from './styles'
import Button from '../../components/button'
import { BsFillTelephoneFill } from 'react-icons/bs'
import { HiUsers } from 'react-icons/hi'
import { FaBookOpen } from 'react-icons/fa'
import { IoMdSchool } from 'react-icons/io'
import { AiOutlineMail } from 'react-icons/ai'
import { BsBagDashFill } from 'react-icons/bs'
import React, { useState } from 'react'
import { PageProps } from './types'
import { useFetch } from 'src/hooks/useFetch'
import { usePartner } from './hooks/usePartner'
import { Router, useRouter } from 'next/router'
import Link from 'next/link'

const TelaPrincipalParceiroView: React.FC<PageProps> = props => {
  const { options } = usePartner()
  const router = useRouter()
  const { data: Partner, isLoading } = useFetch('/parceiro/dados', options)

  if (isLoading) return <h2>Loading...</h2>

  return (
    <Layout {...Object.assign({}, props, { hideFooter: true, isLogged: true })}>
      <S.Container>
        <S.Content>
          <S.ContentLeft>
            <S.Title>Bem-vindo</S.Title>
            <S.Description>
              Contribua para a garantia do sucesso académico dos estudantes
              angolanos
            </S.Description>
            <S.CardContentLeft>
              <h2>Sobre mim</h2>
              <S.Separator />
              <S.InfoContainer>
                <S.InfoSections>
                  <HiUsers />
                  <span>{Partner?.parceiro?.nome}</span>
                </S.InfoSections>
                <S.InfoSections>
                  <IoMdSchool />
                  <span>{Partner?.parceiro?.tipoParceiro?.designacao}</span>
                </S.InfoSections>
                <S.InfoSections>
                  <AiOutlineMail />
                  <span>{Partner?.email?.designacao}</span>
                </S.InfoSections>
                <S.InfoSections>
                  <BsFillTelephoneFill />
                  <span>{Partner?.telefone?.designacao}</span>
                </S.InfoSections>
                
              </S.InfoContainer>
              <Button
                type="button"
                onClick={() => router.push('/dados-do-parceiro')}
              >
                Meus dados
              </Button>
            </S.CardContentLeft>
          </S.ContentLeft>
          <S.ContentRight>
            <S.CardContentRight>
              <h2>Lista de estudantes</h2>
              <S.Separator />
              <p>
                Com auxílio dos parceiros e apoiadores ajudamos você a obter a
                bolsa de estudo que vai reduzir as suas despesas académicas.
              </p>
              <div>
                <Button type="button">
                  <Link href={'/tela-estudantes-finaciados'}>
                    <a>Saber mais</a>
                  </Link>
                </Button>
              </div>
            </S.CardContentRight>
            <S.CardContentRightMiddle>
              <h2>Lista de Solicitações</h2>
              <S.Separator />
              <p>
                Com auxílio dos parceiros e apoiadores ajudamos você a obter a
                bolsa de estudo que vai reduzir as suas despesas académicas.
              </p>
              <div>
                <Button type="button">Saber mais</Button>
              </div>
            </S.CardContentRightMiddle>
            <S.CardContentRightBottom>
              <h2>Área de pagamento</h2>
              <S.Separator />
              <p>
                Com auxílio dos parceiros e apoiadores ajudamos você a obter a
                bolsa de estudo que vai reduzir as suas despesas académicas.
              </p>
              <div>
                <Button type="button">Saber mais</Button>
              </div>
            </S.CardContentRightBottom>
          </S.ContentRight>
        </S.Content>
      </S.Container>
    </Layout>
  )
}

export { TelaPrincipalParceiroView }
