import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl
  const validToken = process.env.NEXT_PUBLIC_AUTH_HASH
  const authToken = request.cookies.get('authToken')?.value

  const protectedPatterns = [
    /^\/items\/[\w-]+$/,
    /^\/items\/edit-items\/[\w-]+$/,
    /^\/items\/add-item$/,
    /^\/$/,
  ]

  const isProtectedRoute = protectedPatterns.some((pattern) =>
    pattern.test(pathname)
  )
  const isPublicRoute = pathname === '/login'
  const isAuthenticated = authToken === validToken

  if (isProtectedRoute && !isAuthenticated) {
    return NextResponse.redirect(new URL('/login', request.url))
  }

  if (isPublicRoute && isAuthenticated) {
    return NextResponse.redirect(new URL('/', request.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    '/items/:path*',
    '/items/add-item',
    '/items/edit-items/:path*',
    '/',
    '/login',
  ],
}
