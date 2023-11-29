/***
 *  This file is used to restrict access to certain pages based on the user's country and login status.
 */

// export { default } from 'next-auth/middleware';

import { withAuth } from 'next-auth/middleware';
import { NextRequest, NextResponse } from 'next/server';

// export function middleware(request: NextRequest) {
//   return NextResponse.next();
// }

export default withAuth(
  function middleware(request) {
    const response = NextResponse.next();

    const token = request.nextauth.token;
    if (request.nextUrl.pathname.startsWith('/admin/reservations/')) {
      const path = request.nextUrl.pathname;
      const segments = path.split('/');
      const index = segments.findIndex((segment) => segment === 'reservations');
      const paramValue = segments[index + 1];
      if (paramValue) {
        return NextResponse.rewrite(
          new URL(`/reservation/${paramValue}`, request.url)
        );
      }
    }
  },
  {
    callbacks: {
      authorized: ({ token }) => {
        if (token) return true;
        else return false;
      },
    },
  }
);

export const config = {
  matcher: [
    '/api/reservation',
    '/api/reservation/:path*',
    '/reservation',
    '/reservation/:path*',
    '/admin/reservations/:path*',
  ],
};
