import React from 'react'
import * as S from './styles'
import { ButtonProps, LinkBtnProps } from './type'
import Link from 'next/link'

const Button: React.FC<ButtonProps> = ({
  type = 'submit',
  disabled,
  onClick,
  children
}) => {
  return (
    <S.Button
      type={type}
      className={`button btn-submit`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </S.Button>
  )
}

export default Button

export function LinkButton({ value, href }: LinkBtnProps) {
  return (
    <Link href={href}>
      <S.LinkButton>{value}</S.LinkButton>
    </Link>
  )
}
