import React, { ComponentType } from 'react'
import type { NextPage } from 'next'
import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import GlobalStyles from '../styles/global'
import { theme } from '../styles/theme'
import { Layout } from '../components/layout'
import 'aos/dist/aos.css'

type NextPageWithLayout = NextPage & {
  Layout?: ComponentType
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
  err?: Error
}

type EmptyLayoutProps = {
  children: React.ReactNode
}

const EmptyLayout = ({ children }: EmptyLayoutProps) => <>{children}</>

function MyApp({ Component, pageProps, err }: AppPropsWithLayout) {
  const ComponentLayout = Component.Layout?Component.Layout:React.Fragment;

  return (
    <ThemeProvider theme={theme}>
      <ComponentLayout>
        <Component {...pageProps} err={err} />
      </ComponentLayout>
      <GlobalStyles />
    </ThemeProvider>
  )
}

export default MyApp
