import React from 'react';
import { SidebarNav } from '@/components/ui/sidebar-nav';
import IsUserReserv from '@/components/contexts/isUserReserv';
import { headers } from 'next/headers';
import { Separator } from '@/components/ui/separator';
import { SelectReservation } from '@/lib/db/schema';
import { ReservationClass } from '@/lib/classes';

async function getReservation(id: number) {
  const headersInstance = headers();
  const auth = headersInstance.get('Cookie') as string;

  const res = await fetch(
    process.env.NEXT_PUBLIC_HOST + `/api/reservation/${id}`,
    {
      headers: {
        cookie: auth,
      },
    }
  );
  const data = await res.json();
  const reservation = new ReservationClass(data);
  return reservation;
}

export default async function reservationLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { id: number };
}) {
  const reservation = await getReservation(params.id);
  const { id, eventName, Facility } = reservation;
  const items = [
    {
      title: 'Summary',
      href: `/reservation/${id}`,
    },
    {
      title: 'Insurance',
      href: `/reservation/${id}/Insurance`,
    },
    {
      title: 'Pricing & Payments',
      href: `/reservation/${id}/Pricing`,
    },
    {
      title: 'Reservation Dates',
      href: `/reservation/${id}/Dates`,
    },
    {
      title: `${reservation.Facility?.name} Calendar`,
      href: `/reservation/${id}/Calendar`,
    },
  ];

  return (
    <IsUserReserv reservation={reservation}>
      <div className="container relative">
        <div className="sm:hidden">{children}</div>
        <div className="hidden sm:block space-y-6 p-10 pb-16 ">
          <div className="sapce-y-0.5">
            <h1 className="text-2xl font-bold">{eventName}</h1>
            <h2 className=" text-muted-foreground">
              {Facility?.building} {Facility?.name}
            </h2>
            <h3 className="text-muted-foreground">{reservation?.range()}</h3>
          </div>
          <Separator className="my-6" />
          <div className="flex flex-col space-y-8 lg:flex-row lg:space-x-12 lg:space-y-0">
            <aside className="-mx-4 lg:w-1/5">
              <SidebarNav items={items} />
            </aside>
            <div className="flex-1 lg:max-w-2xl">{children}</div>
          </div>
        </div>
      </div>
    </IsUserReserv>
  );
}
