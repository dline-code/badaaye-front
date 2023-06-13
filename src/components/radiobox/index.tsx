import React from 'react'
import { RadioboxProps } from './type'
import * as S from './styles'
import Link from 'next/link'

const radiobox: React.FC<RadioboxProps> = ({
  title,
  description,
  src,
  onClick,
  checked = false,
  ...rest
}) => {
  return (
    <S.Label htmlFor="radio" isActive={checked} onClick={onClick}>
      <Link href="/cadastro-estudante">{'  '}</Link>
      <S.Image src={src} alt="image" />
      <S.Container>
        <S.Title>{title}</S.Title>
        <S.Description>{description}</S.Description>
      </S.Container>
      <input type="radio" id="radio" checked={checked} {...rest} />
    </S.Label>
  )
}

export default radiobox
