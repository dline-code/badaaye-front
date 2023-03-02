import React from 'react'
import * as S from './styles';
import * as SS from '../input/styles'
import { IOption, SelectContainerProps } from './type'
import { FaCaretDown } from 'react-icons/fa';

const select: React.FC<SelectContainerProps> = ({
  icon,
  options,
  title,
  onChange,
  name,
  ...rest
}) => {
  return (
    <SS.Container >
      <>
        <span>{icon}</span>
        <S.Select name={name} onChange={onChange}>
          <option value={""} key={null}>{title}</option>
          {options?.map(({nome,designacao,id}:IOption)=>(
            <option value={id} key={id}>{designacao || nome}</option>
          ))}
        </S.Select >
      </>
      <FaCaretDown/>
    </SS.Container>
  )
}

export default select
