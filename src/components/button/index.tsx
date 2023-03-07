import React from 'react'
import * as S from './styles'
import { ButtonProps } from './type'

const Button: React.FC<ButtonProps> = ({
  type = 'submit',
  isDisabled = false,
  onClick,
  children
}) => {
  return (
    <S.Button
      type={type}
      className={`button ${isDisabled ? "btn-disabled" : ""}`}
      onClick={onClick}
      disabled={isDisabled}
    >
      {children}
    </S.Button>
  )
}

export default Button
