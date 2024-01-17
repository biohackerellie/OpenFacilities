import { DataTable } from '@/components/ui/tables';
import { columns } from './columns';
import React from 'react';
import { Reservation } from '@/lib/types';
import { userReservations } from '@/functions/calculations/tableData';
import { Separator } from '@/components/ui/separator';

import { getProfile } from '@/functions/data/users';

async function getData() {
  try {
    const userSession = await getProfile();

    const reservations: Reservation[] = userSession?.Reservation;

    if (!reservations) {
      return [];
    }

    return userReservations(reservations);
  } catch (error) {
    return [];
  }
}

export default async function Account() {
  const data = await getData();
  return (
    <div className="space-y-7">
      <div>
        <h3 className="text-lg font-medium">My Reservations</h3>
      </div>
      <Separator />
      <DataTable columns={columns} data={data} />
    </div>
  );
}
