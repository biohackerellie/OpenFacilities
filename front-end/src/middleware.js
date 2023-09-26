export { default } from 'next-auth/middleware';

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
