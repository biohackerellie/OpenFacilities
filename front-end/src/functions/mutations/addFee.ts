import prisma from '@/lib/prisma';

export default async function addFee(
  id: number,
  reservationfees: any,
  reservationfeesDetails: string
) {
  await prisma.reservationFees.create({
    data: {
      reservationfees: parseInt(reservationfees),
      feesType: reservationfeesDetails,
      reservationid: id,
    },
    include: {
      reservation: true,
    },
  });
  const reservation: any = await prisma.reservation.findUnique({
    where: { id: id },
    include: {
      category: true,
      reservationdate: true,
      reservationfees: true,
    },
  });
  const category = reservation.category.price;

  let totalhours = reservation.reservationdate.reduce(
    (acc: any, reservationdate: any) => {
      const starttime: any = new Date(
        `1970-01-01T${reservationdate.starttime}Z`
      );
      const endtime: any = new Date(`1970-01-01T${reservationdate.endtime}Z`);
      const hours = Math.abs(endtime - starttime) / 36e5;

      return acc + hours;
    },
    0
  );

  totalhours = Math.round(totalhours * 100) / 100;

  const charges = reservationfees.reduce(
    (sum: any, fee: any) => sum + fee.reservationfees,
    0
  );

  let fees = 0;

  if (reservation.facility.building === 'Laurel Stadium') {
    fees = reservation.category.price;
  } else {
    fees = category ? category * totalhours : 0;
  }

  fees = Math.round(fees * 100) / 100;
  const totalCost = (fees + charges) as number;
  await prisma.reservation.update({
    where: { id: id },
    data: {
      fees: totalCost,
    },
  });
}
