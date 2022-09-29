import React from 'react'
import * as S from './styles';
import * as SS from '../input/styles'
import { SelectContainerProps } from './type'
import { FaCaretDown } from 'react-icons/fa';



const select: React.FC<SelectContainerProps> = ({
  icon,
  options,
  ...rest
}) => {
  return (
    <SS.Container >
      <>
      <span>{icon}</span>
      <S.Select>
        {options.map((option,index)=>(
          <option value={option} key={index}>{option}</option>
        ))}
        </S.Select >
      </>
      <FaCaretDown/>
    </SS.Container>
  )
}

export default select
