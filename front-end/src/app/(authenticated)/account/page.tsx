import { DataTable } from '@/components/ui/tables';
import { columns } from './columns';
import React from 'react';
import { Reservation } from '@/lib/types';
import { userReservations } from '@/functions/calculations/tableData';
import { Separator } from '@/components/ui/separator';
import { getServerSession } from 'next-auth/next';
import { authOptions } from '@/lib/auth';
import { GetUserById } from '@/lib/db/queries/users';

import { getProfile } from '@/functions/data/users';

async function getData() {
  try {
    const userSession = await getServerSession(authOptions);
    console.log('userSession', userSession);

    if (!userSession) {
      return [];
    } else if (userSession) {
      const user = await GetUserById.execute({ id: userSession.user.id });
      //@ts-expect-error
      const reservations: Reservation[] = user?.Reservation;
      if (!reservations) {
        return [];
      }
      return userReservations(reservations);
    }
  } catch (error) {
    return [];
  }
}

export default async function Account() {
  const data = await getData();
  if (!data) {
    return <div>loading...</div>;
  }
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
