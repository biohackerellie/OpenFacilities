//@ts-nocheck

import prisma from '@/lib/prisma';

export async function cancelDate(id: number) {
  const cancelledDate = await prisma.reservationDate.update({
    where: {
      id: BigInt(id),
    },
    data: {
      approved: 'canceled',
    },
  });
  const reservation = await prisma.reservation.findUnique({
    where: { id: cancelledDate.reservationId },
    include: { ReservationDate: true, Category: true, Facility: true },
  });

  const approvedDates = reservation.ReservationDate.filter(
    (date) => date.approved === 'approved'
  );

  const totalHours = approvedDates.reduce((acc, date) => {
    const startTime = new Date(`1970-01-01T${date.startTime}Z`);
    const endTime = new Date(`1970-01-01T${date.endTime}Z`);
    const hours = Math.abs(endTime - startTime) / 36e5;
    return acc + hours;
  }, 0);

  const roundedTotalHours = Math.round(totalHours * 10) / 10;

  let fees = 0;

  if (reservation.Facility.building === 'Laurel Stadium') {
    fees = reservation.Category.price;
  } else {
    fees = reservation.Category.price * roundedTotalHours;
  }
  const roundedFees = Math.round(fees * 10) / 10;

  await prisma.reservationDate.deleteMany({
    where: {
      approved: 'canceled',
    },
  });

  const allDatesCanceled = reservation.ReservationDate.every(
    (date) => date.approved === 'canceled'
  );

  if (allDatesCanceled) {
    await prisma.reservation.update({
      where: { id: reservation.id },
      data: {
        approved: 'canceled',
        totalHours: roundedTotalHours,
        fees: roundedFees,
      },
    });
  } else {
    await prisma.reservation.update({
      where: { id: reservation.id },
      data: {
        totalHours: roundedTotalHours,
        fees: roundedFees,
      },
    });
  }
  return cancelledDate;
}
