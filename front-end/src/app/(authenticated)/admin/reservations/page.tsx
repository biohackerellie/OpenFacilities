import { DataTable } from '@/components/ui/tables';
import { columns } from './columns';
import React from 'react';
import {
  mapReservations,
  mapPastReservations,
} from '@/functions/calculations/tableData';
import { GetReservations } from '@/lib/db/queries/reservations';
import { unstable_cache } from 'next/cache';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import TableSkeleton from '../requests/skeleton';
import { Suspense } from 'react';

async function getReservations() {
  'use server';
  const cachedData = unstable_cache(
    async () => GetReservations.execute(),
    ['reservations']
  );
  const data = await cachedData();
  const [Reservations, PastReservations] = await Promise.all([
    //@ts-expect-error
    mapReservations(data),
    //@ts-expect-error
    mapPastReservations(data),
  ]);

  return { Reservations, PastReservations };
}

export default async function Reservations() {
  const { Reservations, PastReservations } = await getReservations();
  return (
    <div className="space-y-7">
      <div>
        <h1 className="text-lg font-medium">Reservations</h1>
      </div>
      <Suspense fallback={<TableSkeleton />}>
        <Tabs defaultValue="upcoming">
          <TabsList>
            <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
            <TabsTrigger value="past">Past</TabsTrigger>
          </TabsList>
          <TabsContent value="upcoming">
            <DataTable columns={columns} data={Reservations} />
          </TabsContent>
          <TabsContent value="past">
            <DataTable columns={columns} data={PastReservations} />
          </TabsContent>
        </Tabs>
      </Suspense>
    </div>
  );
}
