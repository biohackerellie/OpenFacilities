import { PrismaClient } from '@prisma/client';

declare namespace global {
  let prisma: PrismaClient | undefined;
}

let prisma: PrismaClient;
if (process.env.NODE_ENV !== 'production') {
  if (!global.prisma) {
    global.prisma = new PrismaClient();
  }
  prisma = global.prisma;
} else {
  prisma = new PrismaClient();
}

export default prisma;
