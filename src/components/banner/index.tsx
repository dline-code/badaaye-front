import React from 'react'
import * as S from './styles'
import { FiUsers } from 'react-icons/fi'
import { ParceirosProps } from './type'
import { parceiros } from './mock'
import Image from 'next/image'
import Button from '../button'

const banner: React.FC = () => {
  return (
    <S.Banner>
      <S.ContainerItems>
        <S.Title>Encontre o financimento para os seus estudos</S.Title>

        <S.Resume>
          Somos uma plataforma angolana para bolsas de estudos que conecta
          estudantes e parceiros capazes de financiar os seus estudos.
        </S.Resume>
        <S.Container>
          <Button children="Fazer Parte" />
          <S.Icon>
            <FiUsers />
          </S.Icon>
          <S.Span>125 financiamentos já atribuidos</S.Span>
        </S.Container>

        <S.Description>Nossos principais parceiros</S.Description>

        <S.ContainerParceiros>
          {parceiros.slice(0, 3).map((item: ParceirosProps) => {
            return (
              <S.ItemParceiro>
                <Image
                  key={item.id}
                  src={item.instituicao}
                  width={80}
                  height={80}
                />
              </S.ItemParceiro>
            )
          })}
        </S.ContainerParceiros>
      </S.ContainerItems>

      <Image src="/assets/Ilustracao-Estudante.svg" width={570} height={570} />
    </S.Banner>
  )
}

export default banner
