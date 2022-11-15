import React from 'react'
import * as S from './styles'
import Image from 'next/image'
import { LayoutProps } from './type'

const layoutAuthentication: React.FC<LayoutProps> = ({
  title,
  description,
  childrenContainerSelect
}) => {
  return (
    <S.Wrapper>
      <Image
        src="/logo-baadaye.svg"
        alt="Picture of the author"
        width={115}
        height={90}
      />
      <S.Title>{title}</S.Title>
      <S.Description>{description}</S.Description>
      <S.ContainerSelect>{childrenContainerSelect}</S.ContainerSelect>
    </S.Wrapper>
  )
}

export default layoutAuthentication
