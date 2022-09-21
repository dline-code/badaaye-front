import React, { useEffect } from 'react'
import Image from 'next/image'
import * as S from './styles'
import { IoClose } from 'react-icons/io5'
import { BsFacebook } from 'react-icons/bs'
import { AiFillInstagram } from 'react-icons/ai'
import { FaLinkedin } from 'react-icons/fa'
import { MenuProps } from './type'
import Aos from 'aos'
import 'aos/dist/aos.css'

const menuMobile: React.FC<MenuProps> = ({ onClick }) => {
  useEffect(() => {
    Aos.init({ duration: 2000 })
  })
  return (
    <S.Container data-aos="fade-right">
      <S.ContainerLogo>
        <Image src="/logo-baadaye.svg" width={170} height={170} />

        <S.IconClose>
          <IoClose size={40} onClick={onClick} />
        </S.IconClose>
      </S.ContainerLogo>

      <S.List>
        <S.Item>
          <S.Ancora href="">Financiamentos</S.Ancora>
        </S.Item>

        <S.Item>
          <S.Ancora href="">Descontos</S.Ancora>
        </S.Item>

        <S.Item>
          <S.Ancora href="">Outras Ajudas</S.Ancora>
        </S.Item>

        <S.Item>
          <S.Ancora href="">Seja Parceiro</S.Ancora>
        </S.Item>

        <S.Item>
          <S.Ancora href="">Sobre nós</S.Ancora>
        </S.Item>

        <S.Item>
          <S.Ancora href="">Entrar</S.Ancora>
        </S.Item>
      </S.List>

      <S.Resume>
        O Baadaye é uma plataforma de ajuda direccionada aos estudantes
        universitários, aonde criam vínculo com instituições comerciais,
        filantrópicas e padrinhos, com o intuito de serem financiados os seus
        estudos.
      </S.Resume>

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
      </S.ContainerIcons>
    </S.Container>
  )
}
export default menuMobile
