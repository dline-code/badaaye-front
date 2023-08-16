import { getCookie, hasCookie } from 'cookies-next'
import { ReactNode, createContext, useEffect, useState } from 'react'
import decode from 'jwt-decode'
import { User } from './types'

interface AuthContextProps {
  isAuth: boolean | undefined
  user: User | undefined
  usuarioId: string | undefined
}

export const AuthContext = createContext({} as AuthContextProps)

export function AuthContextProvider({ children }: { children: ReactNode }) {
  const user = getUser()
  const hastoken = hasCookie(`${process.env.NEXT_PUBLIC_TOKEN_KEY}`)

  const [isAuth, setIsAuth] = useState(user && hastoken)

  useEffect(() => {
    setIsAuth(user && hastoken)
  }, [hastoken, user])

  function getUser(): User | undefined {
    const token = getCookie(`${process.env.NEXT_PUBLIC_TOKEN_KEY}`)?.toString()

    if (token) {
      const user: User = decode(token)
      return user
    }

    return undefined
  }

  return (
    <AuthContext.Provider value={{ isAuth, user, usuarioId: user?.usuarioId }}>
      {children}
    </AuthContext.Provider>
  )
}
