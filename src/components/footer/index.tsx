import Image from 'next/image'
import React from 'react'
import { BsFacebook, BsTwitter } from 'react-icons/bs'
import { AiOutlineWhatsApp } from 'react-icons/ai'
import * as S from './styles'

const footer: React.FC = () => {
  return (
    <S.Footer>
      <S.BigFooter>
        <S.Lista>
          <Image src="/logo-baadaye.svg" width={100} height={100} />
          <S.IconList>
            <S.Icon>
              <BsFacebook />
            </S.Icon>
            <S.Icon>
              <BsTwitter />
            </S.Icon>
            <S.Icon>
              <AiOutlineWhatsApp />
            </S.Icon>
          </S.IconList>

          <S.Description>Baadaye © Todos os direitos reservados</S.Description>
        </S.Lista>

        <S.Lista>
          <S.Title>Navegação</S.Title>
          <div>
            <S.Item>Início</S.Item>
            <S.Item>Benefícios</S.Item>
            <S.Item>Bolsas</S.Item>
            <S.Item>Perguntas</S.Item>
            <S.Item>Contactos</S.Item>
          </div>
        </S.Lista>

        <S.Lista>
          <S.Title>Assine a newsletter para receber as novidades</S.Title>
          <S.ContainerInputs>
            <S.Input placeholder="Digite o seu email" />
            <S.Button>Enviar</S.Button>
          </S.ContainerInputs>
        </S.Lista>
      </S.BigFooter>

      <S.MinFooter>
        <S.Ancora>Política de privacidade</S.Ancora>
        <S.Ancora>Desenvolvido por DLine-Code</S.Ancora>
      </S.MinFooter>
    </S.Footer>
  )
}

export default footer
