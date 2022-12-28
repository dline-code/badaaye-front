import React from 'react'
import { RadioboxProps } from './type'
import * as S from './styles'

const radiobox: React.FC<RadioboxProps> = ({
  title,
  description,
  src,
  isActive,
  onClick
}) => {
  return (
    <S.Label
      htmlFor="radio"
      isActive={isActive}
      onClick={onClick}
    >
      <S.Image src={src} alt="image" />
      <S.Container>
        <S.Title>{title}</S.Title>
        <S.Description>{description}</S.Description>
      </S.Container>
      <S.Input type="radio" id="radio" name="radio" checked={isActive} />
    </S.Label>
  )
}

export default radiobox
