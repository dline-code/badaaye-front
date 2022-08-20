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

      <S.List>
        <Link href="/">
          <S.Item className={currentRoute === '/' ? 'active' : 'non-active'}>
            Financiamentos
          </S.Item>
        </Link>

        <Link href="">
          <S.Item>Descontos</S.Item>
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
      </S.List>
    </S.Container>
  )
}
export default menuMobile
