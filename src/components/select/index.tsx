import React from 'react'
import * as S from './styles';
import * as SS from '../input/styles'
import { SelectContainerProps } from './type'
import { FaCaretDown } from 'react-icons/fa';

const Select: React.FC<SelectContainerProps> = ({
  Icon,
  options,
  ...rest
}) => {
  return (
    <SS.Container >
      <>
      <Icon/>
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

export default Select
