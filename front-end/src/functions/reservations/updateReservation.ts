'use server';
import prisma from '@/lib/prisma';
import { calculateFees } from '@/functions/calculations';

interface updateParams {
  id: number;
  catID?: number;
  name?: string;
  startTime?: string;
  startDate?: string;
  endTime?: string;
  endDate?: string;
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
    startTime,
    startDate,
    endTime,
    endDate,
    dateID,
    facilityiD,
  } = params;

  const reservation = await prisma.reservation.findUnique({
    where: { id: BigInt(id) },
    include: {
      Facility: true,
      ReservationDate: true,
      ReservationFees: true,
      Category: true,
      User: true,
    },
  });
  if (!reservation) {
    throw new Error('Reservation not found');
  }

  let category = reservation.Category ? reservation.Category : null;

  if (catID) {
    await prisma.reservation.update({
      where: { id: BigInt(id) },
      data: {
        categoryId: BigInt(catID),
      },
    });
    category = await prisma.category.findUnique({
      where: { id: BigInt(catID) },
    });
  }

  if (dateID && startTime && startDate && endTime && endDate) {
    await prisma.reservationDate.update({
      where: { id: BigInt(dateID) },
      data: {
        startTime: startTime,
        startDate: startDate,
        endTime: endTime,
        endDate: endDate,
      },
    });
  }

  if (facilityiD) {
    await prisma.reservation.update({
      where: { id: BigInt(id) },
      data: {
        facilityId: facilityiD,
      },
    });
  }

  const totalCost = calculateFees(reservation, category);

  const res = await prisma.reservation.update({
    where: { id: BigInt(id) },
    data: {
      fees: totalCost,
    },
  });
  return res;
}

export async function addFee(
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
      ReservationFees: true,
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
    where: { id: BigInt(id) },
    data: {
      fees: totalCost,
    },
  });
}

export async function changeCat(id: number, category: any) {
  try {
    await prisma.reservation.update({
      where: { id: BigInt(id) },
      data: {
        categoryId: BigInt(category),
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
    where: { id: BigInt(feeId) },
  });
}
