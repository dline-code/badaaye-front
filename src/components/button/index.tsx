import React from 'react'
import * as S from './styles'
import { ButtonProps } from './type'

const Button: React.FC<ButtonProps> = ({
  type = 'submit',
  onClick,
  children
}) => {
  return (
    <S.Button type={type} onClick={onClick} className="button">
      {children}
    </S.Button>
  )
}

export default Button
