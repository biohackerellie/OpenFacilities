import { getServerSession } from 'next-auth/next';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import { DataTable } from '@/components/ui/tables';
import { columns } from './columns';
import React from 'react';
import { reservation } from '@/lib/types';
import moment from 'moment';

interface TableReservation {
  eventname: string;
  facility: string;
  reservationdate: any[];
  approved: 'pending' | 'approved' | 'denied' | 'cancelled';
  Details: number;
}

const currentDate = moment().format('YYYY-MM-DD');

async function getData(): Promise<TableReservation[]> {
  const session = await getServerSession(authOptions);
  const user = session?.user;

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_HOST}/api/users/${user.id}`
  );
  const userSession = await res.json();

  const reservations: reservation[] = userSession?.reservation;
  const facility = userSession?.facility;
  const mappedReservations: TableReservation[] = reservations.map(
    (reservation) => {
      const sortedDates = reservation.reservationdate.sort((a, b) =>
        moment(a.startdate).diff(moment(b.startdate))
      );
      const nextUpcomingDate = sortedDates.find((date) =>
        moment(date.startdate).isSameOrAfter(currentDate)
      );
      return {
        eventname: reservation.eventname,
        facility: reservation.facility.name,
        reservationdate: nextUpcomingDate ? nextUpcomingDate.startdate : 'N/A',
        approved: reservation.approved,
        Details: reservation.id,
      };
    }
  );

  return mappedReservations;
}

export default async function account() {
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
