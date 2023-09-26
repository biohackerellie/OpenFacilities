import prisma from '@/lib/prisma';
import { revalidatePath } from 'next/cache';

export default async function denyDate(id: number) {
  const deniedDate = await prisma.reservationDate.update({
    where: {
      id: BigInt(id),
    },
    data: {
      approved: 'denied',
    },
  });
  const reservation = await prisma.reservation.findUnique({
    where: { id: deniedDate.reservationId },
    include: { ReservationDate: true, Category: true, Facility: true },
  });
  //@ts-expect-error
  const approvedDates = reservation.ReservationDate.filter(
    (date) => date.approved === 'approved'
  );
  //@ts-expect-error
  const allDatesDenied = reservation.ReservationDate.every(
    (date) => date.approved === 'denied'
  );

  const totalHours = approvedDates.reduce((acc, date) => {
    const startTime = new Date(`1970-01-01T${date.startTime}Z`);
    const endTime = new Date(`1970-01-01T${date.endTime}Z`);
    //@ts-expect-error
    const hours = Math.abs(endTime - startTime) / 36e5;
    return acc + hours;
  }, 0);

  const roundedTotalHours = Math.round(totalHours * 10) / 10;

  let fees = 0;
  //@ts-expect-error
  if (reservation.Facility.building === 'Laurel Stadium') {
    //@ts-expect-error
    fees = reservation.Category.price;
  } else {
    //@ts-expect-error
    fees = reservation.Category.price * roundedTotalHours;
  }
  const roundedFees = Math.round(fees * 10) / 10;

  if (allDatesDenied) {
    await prisma.reservation.update({
      //@ts-expect-error
      where: { id: reservation.id },
      data: {
        approved: 'denied',
        totalHours: roundedTotalHours,
        fees: roundedFees,
      },
    });
  } else {
    await prisma.reservation.update({
      //@ts-expect-error
      where: { id: reservation.id },
      data: {
        totalHours: roundedTotalHours,
        fees: roundedFees,
      },
    });
  }
  revalidatePath('/');
  return deniedDate;
}
