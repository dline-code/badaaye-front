import React from 'react'
import Footer from '../footer'
import Header from '../header'
import * as S from './styles'
import { useState, useEffect } from 'react'
import { checkIsUserAuthenticated } from 'src/functions/checkIsUserAuthenticated'

type LayoutProps = {
  children: React.ReactNode
  hideFooter?: boolean
  isLogged: boolean
}

export const Layout = ({ children, hideFooter /*isLogged*/ }: LayoutProps) => {
  const [isLogged, setIsLogged] = useState(false)
  useEffect(() => {
    setIsLogged(checkIsUserAuthenticated())
  }, [])
  return (
    <S.Wrapper>
      <S.Content>
        <Header isLogged={isLogged} />
        <S.Main>{children}</S.Main>
        {!hideFooter && <Footer />}
      </S.Content>
    </S.Wrapper>
  )
}
