import React from 'react'
import Image from 'next/image'
import * as S from './styles'
import { InstitutionProps } from './type'

const institution: React.FC<InstitutionProps> = ({
  image,
  title,
  previousprice,
  nextprice
}) => {
  return (
    <S.Card>
      <Image src={image} alt="image-institution" width={50} height={50} />
      <S.Title>{title}</S.Title>
      <S.PreviousPrice>{previousprice}</S.PreviousPrice>
      <S.NextPrice>{nextprice}</S.NextPrice>
    </S.Card>
  )
}

export default institution
