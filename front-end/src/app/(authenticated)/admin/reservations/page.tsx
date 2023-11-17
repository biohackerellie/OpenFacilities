import { DataTable } from '@/components/ui/tables';
import { columns } from './columns';
import React from 'react';
import { mapReservations } from '@/functions/calculations/tableData';
import { headers } from 'next/headers';
import { Reservation, TableReservation } from 'lib/types';
import TableSkeleton from '../requests/skeleton';
import { Suspense } from 'react';

async function getReservations() {
  'use server';
  const headersInstance = headers();
  const auth = headersInstance.get('Cookie') as string;
  const res = await fetch(process.env.NEXT_PUBLIC_HOST + `/api/reservation`, {
    headers: {
      Cookie: auth,
    },
  });
  const Reservations = await res.json();
  console.log(Reservations);
  return mapReservations(Reservations);
}

export default async function Reservations() {
  const data = await getReservations();
  return (
    <div className="container mx-auto py-10">
      <h1 className="font-bold text-3xl text-primary dark:text-secondary shadow-secondary drop-shadow">
        Reservations
      </h1>
      <Suspense fallback={<TableSkeleton />}>
        <DataTable columns={columns} data={data} />
      </Suspense>
    </div>
  );
}
