import Image from 'next/image'
import React, { useEffect } from 'react'
import { BsFacebook, BsTwitter } from 'react-icons/bs'
import { AiOutlineWhatsApp } from 'react-icons/ai'
import * as S from './styles'
import Aos from 'aos'
import 'aos/dist/aos.css'

const footer: React.FC = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 })
  })
  return (
    <S.Footer data-aos="fade-down">
      <S.BigFooter>
        <S.List>
          <Image src="/logo-baadaye.svg" width={100} height={100} />

          <S.ContainerIcons>
            <S.Icon>
              <BsFacebook />
            </S.Icon>
            <S.Icon>
              <BsTwitter />
            </S.Icon>
            <S.Icon>
              <AiOutlineWhatsApp />
            </S.Icon>
          </S.ContainerIcons>

          <S.Description>Baadaye © Todos os direitos reservados</S.Description>
        </S.List>

        <S.List>
          <S.Title>Navegação</S.Title>
          <S.Box>
            <S.Item>Início</S.Item>
            <S.Item>Benefícios</S.Item>
            <S.Item>Bolsas</S.Item>
            <S.Item>Perguntas</S.Item>
            <S.Item>Contactos</S.Item>
          </S.Box>
        </S.List>

        <S.List>
          <S.Title>Assine a newsletter para receber as novidades</S.Title>
          <S.ContainerInputs>
            <S.InputText placeholder="Digite o seu email" />
            <S.InputButton>Enviar</S.InputButton>
          </S.ContainerInputs>
        </S.List>
      </S.BigFooter>

      <S.MinFooter>
        <S.Ancora>Política de privacidade</S.Ancora>
        <S.Ancora>Desenvolvido por DLine-Code</S.Ancora>
      </S.MinFooter>
    </S.Footer>
  )
}

export default footer
