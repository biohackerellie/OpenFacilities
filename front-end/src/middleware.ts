/***
 *  This file is used to restrict access to certain pages based on the user's country and login status.
 */

import { withAuth } from 'next-auth/middleware';
import type { NextRequest } from 'next/server';

// for security reasons, we only allow users from these countries to access secure pages
const AllowedCountries = ['US', 'CA', 'MX'];

export default withAuth(
  // @ts-expect-error - next-auth types are not up-to-date
  function middleware(req: NextRequest) {
    const country = req.geo?.country || '';
    if (!AllowedCountries.includes(country)) {
      return {
        redirect: {
          destination: '/',
          status: 302,
        },
      };
    }
  }
);

export const config = {
  matcher: [
    '/admin/:path*',
    '/api/users',
    '/api/users/:id',
    '/api/reservation/:id',
    '/api/reservation',
    '/api/request',
  ],
};
