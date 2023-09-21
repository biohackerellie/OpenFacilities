import { getServerSession } from 'next-auth/next';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import { DataTable } from '@/components/ui/tables';
import { columns } from './columns';
import React from 'react';
import { Reservation } from '@/lib/types';
import moment from 'moment';

interface TableReservation {
  eventName: string;
  Facility: string;
  ReservationDate: any[];
  approved: 'pending' | 'approved' | 'denied' | 'cancelled';
  Details: number;
}

const currentDate = moment().format('YYYY-MM-DD');
console.log('currentDate', currentDate);
async function getData(): Promise<TableReservation[]> {
  const session = await getServerSession(authOptions);
  const user = session?.user;

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_HOST}/api/users/${user.id}`
  );
  const userSession = await res.json();

  const reservations: Reservation[] = userSession?.Reservation;
  console.log(reservations);
  const Facility = userSession?.Facility;
  const mappedReservations: TableReservation[] = reservations.map(
    (reservation) => {
      const sortedDates = reservation.ReservationDate.sort((a, b) =>
        moment(a.startDate).diff(moment(b.startDate))
      );
      console.log('sorted', sortedDates);
      const nextUpcomingDate = sortedDates.find((date) =>
        moment(date.startDate).isSameOrAfter(currentDate)
      );
      console.log('upcoming', nextUpcomingDate);
      return {
        eventName: reservation.eventName,
        Facility: reservation.Facility.name,
        ReservationDate: nextUpcomingDate ? nextUpcomingDate.startDate : 'N/A',
        approved: reservation.approved,
        Details: reservation.id,
      };
    }
  );

  return mappedReservations;
}

export default async function Account() {
  const data = await getData();
  return (
    <div className="container mx-auto py-10">
      <h1 className="font-bold text-3xl text-primary dark:text-secondary shadow-secondary drop-shadow">
        My Reservations
      </h1>
      <DataTable columns={columns} data={data} />
    </div>
  );
}
