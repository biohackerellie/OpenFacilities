'use client';

import { DataTable } from '@/components/ui/tables';
import { columns } from './columns';
import React from 'react';
import { Reservation, TableReservation } from '@/lib/types';
import { userReservations } from '@/functions/calculations/tableData';
import { Separator } from '@/components/ui/separator';

import { useSession } from 'next-auth/react';
import { useSuspenseQuery } from '@tanstack/react-query';
import { Suspense } from 'react';

const baseUrl = process.env.NEXT_PUBLIC_HOST;

function useSessionQuery() {
  const { data: session } = useSession();
  const userID = session?.user?.id;
  console.log('userID', userID);
  const query = useSuspenseQuery({
    queryKey: ['user', userID],
    queryFn: async () => {
      const path = `/api/account?userId=${userID}`;
      const url = baseUrl + path;

      const res = await (
        await fetch(url, {
          cache: 'no-store',
        })
      ).json();
      return res;
    },
  });

  return [query.data, query] as const;
}

function TableComponent() {
  const [data] = useSessionQuery();

  return <DataTable columns={columns} data={data} />;
}

export default function Account() {
  return (
    <div className="space-y-7">
      <div>
        <h3 className="text-lg font-medium">My Reservations</h3>
      </div>
      <Separator />

      <Suspense fallback="Loading...">
        <TableComponent />
      </Suspense>
    </div>
  );
}
