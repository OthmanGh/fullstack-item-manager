import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl
  const validToken = process.env.NEXT_PUBLIC_AUTH_HASH
  const authToken = request.cookies.get('authToken')?.value

  const routes = {
    protected: ['/items'],
    public: ['/login'],
  }

  const isProtectedRoute = routes.protected.includes(pathname)
  const isPublicRoute = routes.public.includes(pathname)
  const isAuthenticated = authToken === validToken

  if (isProtectedRoute && !isAuthenticated) {
    return NextResponse.redirect(new URL('/login', request.url))
  }

  if (isPublicRoute && isAuthenticated) {
    return NextResponse.redirect(new URL('/items', request.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/:path*', '/login'],
}
