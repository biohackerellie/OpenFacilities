/***
 *  This file is used to restrict access to certain pages based on the user's country and login status.
 */

// export { default } from 'next-auth/middleware';

import { withAuth } from 'next-auth/middleware';
import { NextRequest, NextResponse } from 'next/server';

const blockedCountries = [
  'CN',
  'RU',
  'KP',
  'IR',
  'SY',
  'CU',
  'IQ',
  'LY',
  'SD',
  'VN',
  'RO',
];

export default withAuth(
  function middleware(request) {
    const response = NextResponse.next();
    const token = request.nextauth?.token;
    // GeoIP blocking
    const country = request.geo?.country;
    if (country && blockedCountries.includes(country)) {
      return new Response('Access Denied', { status: 451 });
    }

    // Redirects

    let pathname = request.nextUrl.pathname;
    let searchParams = new URLSearchParams(request.nextUrl.search);

    if (pathname === '/facilities' || pathname === '/calendar') {
      if (!searchParams.get('building')) {
        searchParams.set('building', 'All');
        return NextResponse.redirect(
          new URL(`${pathname}?${searchParams}`, request.url)
        );
      }
    }

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

    //Admin Check
    if (request.nextUrl.pathname.startsWith('/admin') && token) {
      if (token.role === 'USER' || token.rull === null) {
        return NextResponse.redirect(new URL('/404', request.url));
      }
    }
  },
  {
    callbacks: {
      authorized: ({ req, token }) => {
        if (token) return true;

        if (req.nextUrl.pathname.startsWith('/facilities')) return true;
        if (req.nextUrl.pathname.startsWith('/calendar')) return true;
        else return false;
      },
    },
  }
);

export const config = {
  matcher: [
    '/facilities',
    '/facilties/:path*',
    '/calendar',
    '/calendar/:path*',
    '/api/reservation',
    '/api/reservation/:path*',
    '/reservation',
    '/reservation/:path*',
    '/admin/reservations/:path*',
    '/admin/:path*',
  ],
};
