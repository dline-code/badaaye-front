import React from 'react'
import * as S from './styles'
import { FiUsers } from 'react-icons/fi'
import { PartnersProps } from './type'
import { partners } from './mock'
import Image from 'next/image'
import Button from '../button'

const banner: React.FC = () => {
  return (
    <S.Banner>
      <S.ContainerItems>
        <S.Title>Encontre o financimento para os seus estudos</S.Title>

        <S.Summary>
          Somos uma plataforma angolana para bolsas de estudos que conecta
          estudantes e parceiros capazes de financiar os seus estudos.
        </S.Summary>

        <S.Box>
          <Button children="Fazer Parte" />
          <S.IconUsers>
            <FiUsers />
          </S.IconUsers>
          <S.Span>125 financiamentos já atribuidos</S.Span>
        </S.Box>

        <S.Description>Nossos principais parceiros</S.Description>

        <S.Partners>
          {partners.slice(0, 3).map((item: PartnersProps) => {
            return (
              <S.PartnersItems>
                <Image
                  key={item.id}
                  src={item.instituicao}
                  width={80}
                  height={80}
                />
              </S.PartnersItems>
            )
          })}
        </S.Partners>
      </S.ContainerItems>

      <Image src="/assets/Ilustracao-Estudante.svg" width={570} height={570} />
    </S.Banner>
  )
}

export default banner
