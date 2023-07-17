import React from 'react'
import Footer from '../footer'
import Header from '../header'
import * as S from './styles'
import { useState, useEffect } from 'react'
import { getCookie } from 'cookies-next'

type LayoutProps = {
  children: React.ReactNode
  hideFooter?: boolean
  isLogged: boolean
}

export const Layout = ({ children, hideFooter /*isLogged*/ }: LayoutProps) => {
  const [isLogged, setIsLogged] = useState(false)
  useEffect(() => {
    setIsLogged(getCookie('baadaye-token') ? true : false)
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
