'use server';
import prisma from '@/lib/prisma';
import { calculateFees } from '@/functions/calculations';

interface updateParams {
  id: number;
  catID?: number;
  name?: string;
  starttime?: string;
  startdate?: string;
  endtime?: string;
  enddate?: string;
  dateID?: number;
  phone?: string;
  email?: string;
  notes?: string;
  facilityiD?: number;
}

export async function updateRes(params: updateParams) {
  const {
    id,
    catID,
    starttime,
    startdate,
    endtime,
    enddate,
    dateID,
    facilityiD,
  } = params;

  const reservation = await prisma.reservation.findUnique({
    where: { id: id },
    include: {
      facility: true,
      reservationdate: true,
      reservationfees: true,
      category: true,
      user: true,
    },
  });
  if (!reservation) {
    throw new Error('reservation not found');
  }

  let category = reservation.category ? reservation.category : null;

  if (catID) {
    await prisma.reservation.update({
      where: { id: id },
      data: {
        categoryid: catID,
      },
    });
    category = await prisma.category.findUnique({
      where: { id: catID },
    });
  }

  if (dateID && starttime && startdate && endtime && enddate) {
    await prisma.reservationdate.update({
      where: { id: dateID },
      data: {
        starttime: starttime,
        startdate: startdate,
        endtime: endtime,
        enddate: enddate,
      },
    });
  }

  if (facilityiD) {
    await prisma.reservation.update({
      where: { id: id },
      data: {
        facilityid: facilityiD,
      },
    });
  }

  const totalCost = calculateFees(reservation, category);

  const res = await prisma.reservation.update({
    where: { id: id },
    data: {
      fees: totalCost,
    },
  });
  return res;
}

export async function addFee(
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

export async function changeCat(id: number, category: any) {
  try {
    await prisma.reservation.update({
      where: { id: id },
      data: {
        categoryid: parseInt(category),
      },
    });
  } catch (error) {
    console.log(error);
  } finally {
    updateRes;
  }
}

export async function removeFee(feeId: any) {
  await prisma.reservationFees.delete({
    where: { id: feeId },
  });
}
