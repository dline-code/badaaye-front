import React from 'react'
import { RadioboxProps } from './type'
import * as S from './styles'
import { useState } from 'react'

const radiobox: React.FC<RadioboxProps> = ({ title, description, src }) => {
  const [color, setColor] = useState('gray')

  return (
    <S.RadioBox
      onClick={() => setColor('blue')}
      isActive={color === 'gray'}
      activeColor="gray"
    >
      <S.Image src={src} alt="image" />
      <S.Container>
        <S.Title>{title}</S.Title>
        <S.Description>{description}</S.Description>
      </S.Container>
      <div>
        <S.Label htmlFor="radio">
          <S.Input type="radio" id="radio" />
        </S.Label>
      </div>
    </S.RadioBox>
  )
}

export default radiobox
