import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'
import { TOKEN_KEY } from 'src/constants/appKey'
import { getUser } from 'src/functions/checkIsUserAuthenticated'

export function middleware(request: NextRequest) {
  const authtoken = request.cookies[TOKEN_KEY]
  const user = getUser(authtoken)

  if (
    authtoken &&
    user?.usuarioId &&
    (request.nextUrl.pathname.startsWith('/login') ||
      request.nextUrl.pathname.startsWith('/cadastro'))
  ) {
    return NextResponse.rewrite(new URL('/', request.url))
  }
}
