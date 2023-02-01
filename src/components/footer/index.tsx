import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect } from 'react'
import { BsFacebook } from 'react-icons/bs'
import { AiFillInstagram } from 'react-icons/ai'
import { FaLinkedin } from 'react-icons/fa'
import { RiWhatsappFill } from 'react-icons/ri'
import * as S from './styles'
import Aos from 'aos'

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
            <S.Icon href="https://www.facebook.com/baadayeangola" target="_blank">
              <BsFacebook />
            </S.Icon>
            <S.Icon href="https://www.linkedin.com/company/baadayebolsas/?viewAsMember=true" target="_blank">
              <FaLinkedin />
            </S.Icon>
            <S.Icon href="https://www.instagram.com/baadayebolsas/" target="_blank">
              <AiFillInstagram />
            </S.Icon>
            <S.Icon href="https://api.whatsapp.com/send?phone=5524953068428" target="_blank">
              <RiWhatsappFill />
            </S.Icon>
          </S.ContainerIcons>

          <S.Description>Baadaye © Todos os direitos reservados</S.Description>
        </S.List>

        <S.List>
          <S.Title>Navegação</S.Title>
          <S.Box>
            <Link href="#banner">
              <S.Item>Início</S.Item>
            </Link>
            <Link href="#benefits">
              <S.Item>Benefícios</S.Item>
            </Link>
            <Link href="#instituition">
              <S.Item>Bolsas</S.Item>
            </Link>
            <Link href="#frequent-questions">
              <S.Item>Perguntas</S.Item>
            </Link>
            <Link href="#contacts">
              <S.Item>Contactos</S.Item>
            </Link>
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
