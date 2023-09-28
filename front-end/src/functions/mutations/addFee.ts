'use server';
import prisma from '@/lib/prisma';

interface IForminput {
  additionalFees: any;
  feesType: string;
}

export default async function addFee(data: IForminput, id: any) {
  const res = await prisma.reservationFees.create({
    data: {
      additionalFees: parseInt(data.additionalFees),
      feesType: data.feesType,
      reservationId: BigInt(id),
    },
    include: {
      Reservation: true,
    },
  });
  return res;
}
