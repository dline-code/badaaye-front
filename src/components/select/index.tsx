import React from 'react'
import * as S from './styles';
import * as SS from '../input/styles'
import { InputContainerProps } from './type'



const select: React.FC<InputContainerProps> = ({
  onClick,
  child,
  list,
  ...rest
}) => {
  return (
    <SS.Container >
      <>
      <span>{child}</span>
      <S.Select/>
       {list.map((option, index)=>{
        <option key={index} value={option}>{option}</option>
      })}
      </>
    </SS.Container>
  )
}

export default select
