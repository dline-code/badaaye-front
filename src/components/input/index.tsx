import React from 'react'
import * as S from './styles';
import { InputContainerProps } from './type'
import { IoEye, IoEyeOff } from 'react-icons/io5'



const input: React.FC<InputContainerProps> = ({
  icon,
  type,
  open,
  ...rest
}) => {
  return (
    <S.Container >
      <span>{icon}</span>
      <S.Input {...rest}/>
      {type === 'password' && (open ? <IoEyeOff /> : <IoEye />)}
    </S.Container>
  )
}

export default input
