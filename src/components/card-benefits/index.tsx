import React, { useEffect } from 'react'
import * as S from './styles'
import { BenefitsProps } from './type'
import Link from 'next/link'
import Image from 'next/image'

const benefits: React.FC<BenefitsProps> = ({
  image,
  title,
  description,
  children,
  link
}) => {
  return (
    <S.Card>
      <Image src={image} alt="image-benefits" width={50} height={50} />
      <S.ContainerText>
        <S.Title>{title}</S.Title>
        <S.Description>{description}</S.Description>
      </S.ContainerText>
      <S.Ancora>
        <Link href={link}>{children}</Link>
      </S.Ancora>
    </S.Card>
  )
}

export default benefits
