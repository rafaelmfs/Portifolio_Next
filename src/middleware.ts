import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'

export function middleware(request: NextRequest) {
  if (request.nextUrl.pathname.startsWith('/portifolio')) {
    return NextResponse.redirect(new URL('/portifolio/all', request.url))
  }

}

export const config = {
  matcher: '/portifolio',
}