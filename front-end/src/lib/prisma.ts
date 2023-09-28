import { PrismaClient } from '@prisma/client/edge';
import { withAccelerate } from '@prisma/extension-accelerate';

// Docs about instantiating `PrismaClient` with Next.js:
// https://pris.ly/d/help/next-js-best-practices

// declare global {
//   var prisma: PrismaClient | undefined;
// }

// let prisma: PrismaClient;

// if (process.env.NODE_ENV === 'production') {
//   prisma = new PrismaClient().$extends(withAccelerate());
// } else {
//   if (!globalThis.prisma) {
//     globalThis.prisma = new PrismaClient().$extends(withAccelerate());
//   }
//   prisma = globalThis.prisma;
// }

const prisma = new PrismaClient().$extends(withAccelerate());

export default prisma;
