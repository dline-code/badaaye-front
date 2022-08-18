import React, { useState } from 'react'
import * as S from './styles'
import { IoClose } from 'react-icons/io5'
import { useRouter } from 'next/router'
import { MenuProps } from './type'
import Link from 'next/link'

const menuMobile: React.FC<MenuProps> = ({ onClick }) => {
  const router = useRouter()
  const currentRoute = router.pathname

  return (
    <S.Container>
      <S.Icon>
        <IoClose size={45} onClick={onClick} />
      </S.Icon>

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
