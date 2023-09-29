// import prisma from '@/lib/prisma';
// import { NextResponse } from 'next/server';

// export const runtime = 'edge';

// export default async function PayinPerson(id: any) {
//   try {
//     const res = await prisma.reservation.update({
//       where: {
//         id: BigInt(id),
//       },
//       data: {
//         inPerson: true,
//       },
//     });
//   } catch (error) {
//     return NextResponse.json({ status: 500, body: error });
//   }
//   return NextResponse.json({ status: 200, body: 'success' });
// }
