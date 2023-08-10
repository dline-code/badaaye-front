import React, { useState } from 'react'
import * as S from './styles'
import { InputContainerProps } from './type'
import { IoEye, IoEyeOff } from 'react-icons/io5'

const Input: React.FC<InputContainerProps> = ({
  icon,
  type,
  open,
  label,
  ...rest
}) => {
  const [passwordType, setPasswordType] = useState<'password' | 'text'>(
    'password'
  )

  const ShowHidePassword = () => {
    setPasswordType(prevPasswordType =>
      prevPasswordType === 'password' ? 'text' : 'password'
    )
  }
  return (
    <S.Container className="input">
      {label ? (<span>{label}</span>) : null}
      {icon ? (<span>{icon}</span>) : null}
      <input type={type === 'password' ? passwordType: type} {...rest} required/>
      <span onClick={ShowHidePassword}>
        {type === 'password' ? (
          passwordType === 'password' ? (
            <IoEyeOff />
          ) : (
            <IoEye />
          )
        ) : null}
      </span>
    </S.Container>
  )
}

export default Input
