import Image from 'next/image'
import React, { useEffect } from 'react'
import { BsFacebook } from 'react-icons/bs'
import { AiFillInstagram } from 'react-icons/ai'
import { FaLinkedin } from 'react-icons/fa'
import { RiWhatsappFill } from 'react-icons/ri'
import * as S from './styles'
import Aos from 'aos'
import Link from 'next/link'

const footer: React.FC = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 })
  })
  return (
    <S.Footer data-aos="fade-down">
      <S.BigFooter>
        <S.List>
          <S.Logo>
            <Link href="/">
              <a>
                <Image src="/logo-baadaye.svg" width={100} height={100} />
              </a>
            </Link>
          </S.Logo>

          <S.ContainerIcons>
            <S.Icon href="https://www.facebook.com/baadayeangola">
              <BsFacebook />
            </S.Icon>
            <S.Icon href="https://www.linkedin.com/company/baadayebolsas/?viewAsMember=true">
              <FaLinkedin />
            </S.Icon>
            <S.Icon href="https://www.instagram.com/baadayebolsas/">
              <AiFillInstagram />
            </S.Icon>
            <S.Icon href="https://api.whatsapp.com/send?phone=5524953068428">
              <RiWhatsappFill />
            </S.Icon>
          </S.ContainerIcons>

          <S.Description>Baadaye © Todos os direitos reservados</S.Description>
        </S.List>

        <S.List>
          <S.Title>Navegação</S.Title>
          <S.Box>
            <Link href="/">
                <a>
                  <S.Item>Início</S.Item>
                </a>
            </Link>
            <Link href="/">
                <a>
                  <S.Item>Benefícios</S.Item>
                </a>
            </Link>
            <Link href="/">
                <a>
                  <S.Item>Bolsas</S.Item>
                </a>
            </Link>
            <Link href="#frequent-questions">
                <a>
                  <S.Item>Perguntas</S.Item>
                </a>
            </Link>
            <Link href="/">
                <a>
                  <S.Item>Contactos</S.Item>
                </a>
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
        <Link href="/">
          <a>
            <S.Ancora>Desenvolvido por DLine-Code</S.Ancora>
          </a>
        </Link>
      </S.MinFooter>
    </S.Footer>
  )
}

export default footer
