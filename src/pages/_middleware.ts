import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'

export function middleware(request: NextRequest) {
  const authtoken = request.cookies[`${process.env.NEXT_PUBLIC_TOKEN_KEY}`]

  if (authtoken && request.nextUrl.pathname.startsWith('/login')) {
    return NextResponse.rewrite(new URL('/', request.url))
  }

  if (authtoken && request.nextUrl.pathname.startsWith('/cadastro')) {
    return NextResponse.rewrite(new URL('/', request.url))
  }
}
