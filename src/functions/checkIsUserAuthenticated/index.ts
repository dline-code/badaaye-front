import { getCookie } from 'react-use-cookie'
import decode from 'jwt-decode'
import { TOKEN_KEY } from 'src/constants/appKey'

export type User = {
  tipo_usuario: string
  usuarioId: string
}

export function checkIsUserAuthenticated() {
  const isUserAuthenticated = getCookie(TOKEN_KEY)

  if (isUserAuthenticated) return true
  else return false
}

export const isAuthenticated = (req: any) => {
  if (!req?.headers?.cookie) {
    return undefined
  }

  const cookies: string = req.headers.cookie

  const cookiematch = cookies
    .split(';')
    .find(item => item.trim().startsWith(`${TOKEN_KEY}=`))

  if (!cookiematch) {
    return undefined
  }

  return getUser(cookiematch.split('=')[1].trim())
}

export function getUser(token: string): User | undefined {
  if (token) {
    const user: User = decode(token)
    return user
  }

  return undefined
}
