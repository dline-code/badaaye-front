import React, { useEffect } from 'react'
import * as S from './styles'
import { FiUsers } from 'react-icons/fi'
import { PartnersProps } from './type'
import { partners } from './mock'
import Image from 'next/image'
import Button from '../button'
import Aos from 'aos'
import 'aos/dist/aos.css'

const banner: React.FC = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 })
  })
  return (
    <S.Banner>
      <S.ContainerItems data-aos="fade-right">
        <S.Title>Encontre o financimento para os seus estudos</S.Title>

        <S.Summary>
          Somos uma plataforma angolana para bolsas de estudos que conecta
          estudantes e parceiros capazes de financiar os seus estudos.
        </S.Summary>

        <S.Box>
          <Button children="Fazer Parte" />
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
