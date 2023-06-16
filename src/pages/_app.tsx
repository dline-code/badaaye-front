import React, { ComponentType } from 'react'
import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import GlobalStyles from '../styles/global'
import { theme } from '../styles/theme'
import { Layout } from '../components/layout'
import 'aos/dist/aos.css'

import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer } from 'react-toastify'
import { QueryClientProvider } from 'react-query'
import { queryClient } from 'src/services/queryClient'

import PrivateRoute from 'src/components/private-route'
import { checkIsPublicRoute } from 'src/functions/checkIsPublicRoute'
import { AuthContextProvider } from 'src/context/AuthContext'

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
  const { asPath } = useRouter()
  const isPublicRoute = checkIsPublicRoute(asPath)

  const ComponentLayout = Component.Layout ? Component.Layout : React.Fragment

  return (
    <QueryClientProvider client={queryClient}>
      <AuthContextProvider>
        <ThemeProvider theme={theme}>
          {isPublicRoute && (
            <ComponentLayout>
              <Component {...pageProps} err={err} />
              <ToastContainer />
            </ComponentLayout>
          )}
          {!isPublicRoute && (
            <PrivateRoute>
              <ComponentLayout>
                <Component {...pageProps} err={err} />
                <ToastContainer />
              </ComponentLayout>
            </PrivateRoute>
          )}
          <GlobalStyles />
        </ThemeProvider>
      </AuthContextProvider>
    </QueryClientProvider>
  )
}

export default MyApp
