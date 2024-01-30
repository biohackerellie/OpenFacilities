/***
 *  Default Middleware for the application
 *  Middleware is an edge function that runs before any request to specified paths throughout the application
 * 	Middleware can be used to redirect, rewrite, or block requests
 * 	Middleware can be used to check for authentication, authorization, or other conditions
 *  @see https://nextjs.org/docs/app/building-your-application/routing/middleware
 */

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

// wrap default middleware with withAuth to provide NextAuth Token context to middleware
export default withAuth(
  function middleware(request) {
    const response = NextResponse.next();
    const token = request.nextauth?.token;

    /**
     * Geo IP Blocking for specific countries.
     * As a school district, we are more vulnerable to cyber attacks from foreign countries.
     * This is a simple way to block requests from countries that we do not expect to receive requests from.
     * @param {string} country - The country code of the request.
     * @param {string[]} blockedCountries - An array of country codes to block.
     */
    const country = request.geo?.country;
    if (country && blockedCountries.includes(country)) {
      return NextResponse.redirect(new URL('/404', request.url));
    }

    /**
     * A path was changed during some refactoring, and this
     * redirect catches the old path and redirects to the new one.
     */
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

    if (request.nextUrl.pathname.startsWith('/api/users') && token) {
      if (token.role === 'USER' || token.role === null) {
        return new Response('Unauthorized', { status: 401 });
      }
    }

    // Redirects to the 404 page if a user tries to access the admin dashboard without being an admin.
    if (request.nextUrl.pathname.startsWith('/admin') && token) {
      if (token.role === 'USER' || token.role === null) {
        return NextResponse.redirect(new URL('/404', request.url));
      }
    }
  },
  {
    callbacks: {
      authorized: ({ req, token }) => {
        if (token) return true;
        else return false;
      },
    },
  }
);

// The matcher property is used to specify which paths the middleware should run on.
export const config = {
  matcher: [
    '/api/account',
    '/api/users',
    '/api/requests',
    '/api/reservation',
    '/api/reservation/:path*',
    '/reservation',
    '/reservation/:path*',
    '/admin/reservations/:path*',
    '/admin/:path*',
  ],
};
