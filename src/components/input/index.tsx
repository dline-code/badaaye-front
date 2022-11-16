import React from 'react'
import * as S from './styles';
import { InputContainerProps } from './type'
import { IoEye, IoEyeOff } from 'react-icons/io5'

const Input: React.FC<InputContainerProps> = ({
  Icon,
  placeholder,
  type,
  open,
  ...rest
}) => {
  return (
    <S.Container >
      <span>
        <Icon/>
      </span>
      <S.Input {...rest} placeholder={placeholder}/>
      {type === 'password' && (open ? <IoEyeOff /> : <IoEye />)}
    </S.Container>
  )
}

export default Input;
