import React, { useState } from 'react'
import Image from 'next/image'
import * as S from './styles'
import { IoClose } from 'react-icons/io5'
import { useRouter } from 'next/router'
import Link from 'next/link'

type menuProps = {
  onClick: () => void
}

const menuMobile: React.FC<menuProps> = ({ onClick }) => {
  const router = useRouter()
  const currentRoute = router.pathname

  return (
    <S.Container>
      <S.ContainerLogo>
        <Image
          src="/logo-baadaye.svg"
          alt="Picture of the author"
          width={120}
          height={120}
        />
        <S.Icon>
          <IoClose size={45} onClick={onClick} />
        </S.Icon>
      </S.ContainerLogo>

      <S.Lista>
        <Link href="/">
          <S.Item className={currentRoute === '/' ? 'active' : 'non-active'}>
            Financiamentos
          </S.Item>
        </Link>

        <Link href="/home">
          <S.Item
            className={currentRoute === '/home' ? 'active' : 'non-active'}
          >
            Descontos
          </S.Item>
        </Link>

        <Link href="">
          <S.Item>Outras Ajudas</S.Item>
        </Link>

        <Link href="">
          <S.Item>Seja Parceiro</S.Item>
        </Link>

        <Link href="">
          <S.Item>Sobre nós</S.Item>
        </Link>
      </S.Lista>
    </S.Container>
  )
}
export default menuMobile
