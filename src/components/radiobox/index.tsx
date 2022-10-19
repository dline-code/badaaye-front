import React from 'react'
import { RadioboxProps } from './type'
import * as S from './styles'
import { useState } from 'react'

const radiobox: React.FC<RadioboxProps> = ({
  type,
  title,
  description,
  icon
}) => {
  const [color, setColor] = useState('gray')

  return (
    <S.RadioBox
      onClick={() => setColor('blue')}
      isActive={color === 'gray'}
      activeColor="gray"
    >
      <S.Icon>{icon}</S.Icon>
      <S.Container>
        <S.Title>{title}</S.Title>
        <S.Description>{description}</S.Description>
        <S.Input type={type} />
      </S.Container>
    </S.RadioBox>
  )
}

export default radiobox
