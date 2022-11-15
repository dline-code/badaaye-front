import React from 'react'
import * as S from './styles'
import { InputContainerProps } from './type'
import { IoEye, IoEyeOff } from 'react-icons/io5'

const input: React.FC<InputContainerProps> = ({
  icon,
  type,
  open,
  ...rest
}) => {
  return (
    <S.Container className="input">
      <span>{icon}</span>
      <S.Input {...rest} />
      <span>{type === 'password' && (open ? <IoEyeOff /> : <IoEye />)}</span>
    </S.Container>
  )
}

export default input
