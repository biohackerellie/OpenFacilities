import prisma from '@/lib/prisma';

export default async function addFee(
  id: number,
  additionalFees: any,
  additionalFeesDetails: string
) {
  await prisma.reservationFees.create({
    data: {
      additionalFees: parseInt(additionalFees),
      feesType: additionalFeesDetails,
      reservationId: id,
    },
    include: {
      Reservation: true,
    },
  });
  const reservation: any = await prisma.reservation.findUnique({
    where: { id: id },
    include: {
      Category: true,
      ReservationDate: true,
      additionalFees: true,
    },
  });
  const category = reservation.Category.price;

  let totalHours = reservation.ReservationDate.reduce(
    (acc: any, reservationDate: any) => {
      const startTime: any = new Date(
        `1970-01-01T${reservationDate.startTime}Z`
      );
      const endTime: any = new Date(`1970-01-01T${reservationDate.endTime}Z`);
      const hours = Math.abs(endTime - startTime) / 36e5;

      return acc + hours;
    },
    0
  );

  totalHours = Math.round(totalHours * 100) / 100;

  const charges = additionalFees.reduce(
    (sum: any, fee: any) => sum + fee.additionalFees,
    0
  );

  let fees = 0;

  if (reservation.Facility.building === 'Laurel Stadium') {
    fees = reservation.Category.price;
  } else {
    fees = category ? category * totalHours : 0;
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
