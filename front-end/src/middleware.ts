/***
 *  This file is used to restrict access to certain pages based on the user's country and login status.
 */

// export { default } from 'next-auth/middleware';

import { withAuth } from 'next-auth/middleware';
import { NextRequest, NextResponse } from 'next/server';

export default withAuth(function middleware(request) {
  const response = NextResponse.next();
  const token = request.nextauth.token;

  if (request.nextUrl.pathname.includes('/api/users/') && token) {
    if (!request.nextUrl.pathname.includes(token.id as string)) {
      return NextResponse.json(
        { error: 'You are not authorized to view this page.' },
        { status: 401 }
      );
    }
  }

  if (request.nextUrl.pathname.includes('/account') && token) {
    response.headers.set('User', token.id as string);
  }

  return response;
});

export const config = {
  matcher: [
    '/admin/:path*',
    '/api/users',
    '/api/users/:path*',
    '/api/reservation/:path*',
    '/api/reservation',
    '/api/request',
    '/reservation',
    '/reservation/:path*',
    '/account',
    '/account/:path*',
  ],
};
