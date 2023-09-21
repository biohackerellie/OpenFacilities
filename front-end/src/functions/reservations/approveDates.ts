//@ts-nocheck

'use server';

import prisma from '@/lib/prisma';

export async function approveDate(id: number) {
  const approvedDate = await prisma.reservationdate.update({
    where: {
      id: id,
    },
    data: {
      approved: 'approved',
    },
  });

  const reservation = await prisma.reservation.findUnique({
    where: { id: approvedDate.reservationid },
    include: { reservationdate: true, category: true, facility: true },
  });

  const approvedDates = reservation?.reservationdate.filter(
    (date) => date.approved === 'approved'
  );

  const totalhours = approvedDates?.reduce((acc, date) => {
    const starttime: any = new Date(`1970-01-01T${date.starttime}Z`);
    const endtime: any = new Date(`1970-01-01T${date.endtime}Z`);
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

  let ticket = false;

  let data = {
    summary: `A facility reservation that requires unlocked doors, ${reservation.eventname} , at ${reservation.facility.building}  has been approved`,
    description: `Visit https://facilities.laurel.k12.mt.us/admin/reservations/${reservation.id} to view the details \n \n Additional details: ${reservation.doorDetails}`,
    department: 'IT',
  };
  {
    !reservation.ticketmade && reservation.doorAccess;
    ticket = true;
    const formData = JSON.stringify(data);
    await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/jira`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: formData,
    });
  }
  if (!ticket) {
    await prisma.reservation.update({
      where: { id: reservation.id },
      data: {
        approved: true,
        totalhours: roundedTotalHours,
        fees: roundedFees,
      },
    });
  } else {
    await prisma.reservation.update({
      where: { id: reservation.id },
      data: {
        approved: 'approved',
        totalhours: roundedTotalHours,
        fees: roundedFees,
        ticketmade: true,
      },
    });
  }

  return approvedDate;
}
