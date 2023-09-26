import {
  Facility,
  Reservation,
  ReservationDate,
  ReservationFees,
} from '@/../prisma/generated/client';

type ExtendedReservation = Reservation & {
  ReservationDate: ReservationDate[];
  ReservationFees: ReservationFees[];
  Facility: Facility;
  id: number | BigInt;
};

export default function calculateFees(
  reservation: ExtendedReservation,
  category: {
    id: number | BigInt;
    name: string;
    description: string;
    price: number;
    facilityId: number | BigInt;
  } | null
) {
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

  totalHours = Math.round(totalHours * 10) / 10;

  const additionalFees = reservation.ReservationFees;
  const charges = additionalFees.reduce(
    (sum: any, fee: any) => sum + fee.additionalFees,
    0
  );

  let fees = 0 as number;

  if (reservation.Facility.building === 'Laurel Stadium') {
    fees = category?.price ? category.price : 0;
  } else {
    fees = category?.price ? category.price * totalHours : 0;
  }

  fees = Math.round(fees * 10) / 10;

  const totalCost = (fees + charges) as number;
  return totalCost;
}
