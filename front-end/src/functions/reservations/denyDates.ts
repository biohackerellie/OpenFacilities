import prisma from '@/lib/prisma';

export default async function denyDate(id: number) {
  const deniedDate = await prisma.reservationdate.update({
    where: {
      id: id,
    },
    data: {
      approved: 'denied',
    },
  });
  const reservation = await prisma.reservation.findUnique({
    where: { id: deniedDate.reservationid },
    include: { reservationdate: true, category: true, facility: true },
  });
  //@ts-expect-error
  const approvedDates = reservation.reservationdate.filter(
    (date) => date.approved === 'approved'
  );
  //@ts-expect-error
  const allDatesDenied = reservation.reservationdate.every(
    (date) => date.approved === 'denied'
  );

  const totalhours = approvedDates.reduce((acc, date) => {
    const starttime = new Date(`1970-01-01T${date.starttime}Z`);
    const endtime = new Date(`1970-01-01T${date.endtime}Z`);
    //@ts-expect-error
    const hours = Math.abs(endtime - starttime) / 36e5;
    return acc + hours;
  }, 0);

  const roundedTotalHours = Math.round(totalhours * 10) / 10;

  let fees = 0;
  //@ts-expect-error
  if (reservation.facility.building === 'Laurel Stadium') {
    //@ts-expect-error
    fees = reservation.category.price;
  } else {
    //@ts-expect-error
    fees = reservation.category.price * roundedTotalHours;
  }
  const roundedFees = Math.round(fees * 10) / 10;

  if (allDatesDenied) {
    await prisma.reservation.update({
      //@ts-expect-error
      where: { id: reservation.id },
      data: {
        approved: 'denied',
        totalhours: roundedTotalHours,
        fees: roundedFees,
      },
    });
  } else {
    await prisma.reservation.update({
      //@ts-expect-error
      where: { id: reservation.id },
      data: {
        totalhours: roundedTotalHours,
        fees: roundedFees,
      },
    });
  }

  return deniedDate;
}
