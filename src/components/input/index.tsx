import React from 'react'
import * as S from './styles';
import { InputContainerProps } from './type'



const input: React.FC<InputContainerProps> = ({
  child,
  ...rest
}) => {
  return (
    <S.Container >
      <span>{child}</span>
      <S.Input {...rest}/>
    </S.Container>
  )
}

export default input
