import React, { useEffect } from 'react'
import * as S from './styles'
import { FiUsers } from 'react-icons/fi'
import { PartnersProps } from './type'
import { partners } from './mock'
import Image from 'next/image'
import Button from '../button'
import Aos from 'aos'
import Link from 'next/link'

const banner: React.FC = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 })
  })
  return (
    <S.Banner>
      <S.ContainerItems data-aos="fade-right">
        <S.Title>
          Aqui encontras bolsas de estudo para melhorar a tua vida académica!
        </S.Title>

        <S.Summary>
          A startup angolana que cria parceria com empresas, padrinhos e escolas
          com a finalidade de ceder bolsas de estudos aos estudantes.
        </S.Summary>

        <S.Box>
          <S.ContainerButton>
            <Link href="/cadastro-estudante">
              <a>
                <Button children="Fazer Parte" />
              </a>
            </Link>
          </S.ContainerButton>

          <S.Paragraph>
            <S.IconUsers>
              <FiUsers />
            </S.IconUsers>
            <S.Span>125 financiamentos já atribuidos</S.Span>
          </S.Paragraph>
        </S.Box>

        <S.Description>Nossos principais parceiros</S.Description>

        <S.Partners>
          {partners.slice(0, 3).map((item: PartnersProps) => {
            return (
              <S.PartnersItems key={item.id}>
                <Image src={item.instituicao} width={80} height={80} />
              </S.PartnersItems>
            )
          })}
        </S.Partners>
      </S.ContainerItems>

      <Image
        src="/assets/Ilustracao-Estudante.svg"
        alt="Ilustração do Estudante"
        width={900}
        height={690}
        data-aos="fade-left"
        className="student"
      />
    </S.Banner>
  )
}

export default banner
