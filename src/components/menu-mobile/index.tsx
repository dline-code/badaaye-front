import React from 'react'
import Image from 'next/image'
import * as S from './styles'
import { IoClose } from 'react-icons/io5'
import { BsFacebook, BsTwitter } from 'react-icons/bs'
import { AiOutlineWhatsApp } from 'react-icons/ai'
import { useRouter } from 'next/router'
import { MenuProps } from './type'
import Link from 'next/link'

const menuMobile: React.FC<MenuProps> = ({ onClick }) => {
  const router = useRouter()
  const currentRoute = router.pathname

  return (
    <S.Container>
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
        universitários, aonde irão criar vínculo com instituições comerciais
        filantrópicas e padrinhos, com o intuito de seremfinanciados os estudos.
      </S.Resume>

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
    </S.Container>
  )
}
export default menuMobile
