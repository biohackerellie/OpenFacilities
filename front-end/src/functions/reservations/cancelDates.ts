//@ts-nocheck

import prisma from '@/lib/prisma';

export async function cancelDate(id: number) {
  const cancelledDate = await prisma.reservationdate.update({
    where: {
      id: id,
    },
    data: {
      approved: 'canceled',
    },
  });
  const reservation = await prisma.reservation.findUnique({
    where: { id: cancelledDate.reservationid },
    include: { reservationdate: true, category: true, facility: true },
  });

  const approvedDates = reservation.reservationdate.filter(
    (date) => date.approved === 'approved'
  );

  const totalhours = approvedDates.reduce((acc, date) => {
    const starttime = new Date(`1970-01-01T${date.starttime}Z`);
    const endtime = new Date(`1970-01-01T${date.endtime}Z`);
    const hours = Math.abs(endtime - starttime) / 36e5;
    return acc + hours;
  }, 0);

  const roundedTotalHours = Math.round(totalhours * 10) / 10;

  let fees = 0;

  if (reservation.facility.building === 'Laurel Stadium') {
    fees = reservation.category.price;
  } else {
    fees = reservation.category.price * roundedTotalHours;
  }
  const roundedFees = Math.round(fees * 10) / 10;

  await prisma.reservationdate.deleteMany({
    where: {
      approved: 'canceled',
    },
  });

  const allDatesCanceled = reservation.reservationdate.every(
    (date) => date.approved === 'canceled'
  );

  if (allDatesCanceled) {
    await prisma.reservation.update({
      where: { id: reservation.id },
      data: {
        approved: 'canceled',
        totalhours: roundedTotalHours,
        fees: roundedFees,
      },
    });
  } else {
    await prisma.reservation.update({
      where: { id: reservation.id },
      data: {
        totalhours: roundedTotalHours,
        fees: roundedFees,
      },
    });
  }
  return cancelledDate;
}
