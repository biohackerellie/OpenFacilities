import {
  facility,
  reservation,
  reservationdate,
  reservationfees,
} from '@prisma/client';

type ExtendedReservation = reservation & {
  reservationdate: reservationdate[];
  reservationfees: reservationfees[];
  facility: facility;
};

export default function calculateFees(
  reservation: ExtendedReservation,
  category: {
    id: number;
    name: string;
    description: string;
    price: number;
    facilityid: number;
  } | null
) {
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

  totalhours = Math.round(totalhours * 10) / 10;

  const reservationfees = reservation.reservationfees;
  const charges = reservationfees.reduce(
    (sum: any, fee: any) => sum + fee.reservationfees,
    0
  );

  let fees = 0 as number;

  if (reservation.facility.building === 'Laurel Stadium') {
    fees = category?.price ? category.price : 0;
  } else {
    fees = category?.price ? category.price * totalhours : 0;
  }

  fees = Math.round(fees * 10) / 10;

  const totalCost = (fees + charges) as number;
  return totalCost;
}
