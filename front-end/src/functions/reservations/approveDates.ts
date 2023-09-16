//@ts-nocheck

'use server';

import prisma from '@/lib/prisma';

export async function approveDate(id: number) {
  const approvedDate = await prisma.reservationDate.update({
    where: {
      id: id,
    },
    data: {
      approved: 'approved',
    },
  });

  const reservation = await prisma.reservation.findUnique({
    where: { id: approvedDate.reservationId },
    include: { ReservationDate: true, Category: true, Facility: true },
  });

  const approvedDates = reservation?.ReservationDate.filter(
    (date) => date.approved === 'approved'
  );

  const totalHours = approvedDates?.reduce((acc, date) => {
    const startTime: any = new Date(`1970-01-01T${date.startTime}Z`);
    const endTime: any = new Date(`1970-01-01T${date.endTime}Z`);
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

  let ticket = false;

  let data = {
    summary: `A Facility Reservation that requires unlocked doors, ${reservation.eventName} , at ${reservation.Facility.building}  has been approved`,
    description: `Visit https://facilities.laurel.k12.mt.us/admin/reservations/${reservation.id} to view the details \n \n Additional details: ${reservation.doorDetails}`,
    department: 'IT',
  };
  {
    !reservation.ticketMade && reservation.doorAccess;
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
        totalHours: roundedTotalHours,
        fees: roundedFees,
      },
    });
  } else {
    await prisma.reservation.update({
      where: { id: reservation.id },
      data: {
        approved: 'approved',
        totalHours: roundedTotalHours,
        fees: roundedFees,
        ticketMade: true,
      },
    });
  }

  return approvedDate;
}
