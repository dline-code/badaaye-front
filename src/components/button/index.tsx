import React from 'react'
import * as S from './styles'
import { ButtonProps } from './type'

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
