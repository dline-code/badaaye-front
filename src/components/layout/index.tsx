import React from 'react'
import Footer from '../footer'
import Header from '../header'
import * as S from './styles'

type LayoutProps = {
  children: React.ReactNode
  hideFooter?: boolean
}

export const Layout = ({ children, hideFooter }: LayoutProps) => {
  return (
    <S.Wrapper>
      <S.Content>
        <Header />
        <S.Main>{children}</S.Main>
        {!hideFooter && <Footer/>}
      </S.Content>
    </S.Wrapper>
  )
}

