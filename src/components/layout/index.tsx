import React from 'react'
import Header from '../header'
import * as S from './styles'

type LayoutProps = {
  children: React.ReactNode
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <S.Wrapper>
      <S.Content>
        <Header />
        <S.Main>{children}</S.Main>
      </S.Content>
    </S.Wrapper>
  )
}
