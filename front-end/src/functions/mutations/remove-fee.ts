import prisma from '@/lib/prisma';

export default async function removeFee(feeId: any) {
  await prisma.reservationFees.delete({
    where: { id: BigInt(feeId) },
  });
}
