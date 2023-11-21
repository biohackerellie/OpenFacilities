/***
 *  This file is used to restrict access to certain pages based on the user's country and login status.
 */

// export { default } from 'next-auth/middleware';

// import { withAuth } from 'next-auth/middleware';
import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  return NextResponse.next();
}

// export default withAuth(function middleware(request) {
//   const response = NextResponse.next();
//   const token = request.nextauth.token;
//   console.log('token', token);
//   if (request.nextUrl.pathname.includes('/api/users/') && token) {
//     if (!request.nextUrl.pathname.includes(token.id as string)) {
//       return NextResponse.json(
//         { error: 'You are not authorized to view this page.' },
//         { status: 401 }
//       );
//     }
//   }

//   return response;
// });

// export default function middleware(request: NextRequest) {
//   return NextResponse.next();
// }
