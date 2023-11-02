import React from 'react';
import UserResNav from './userResNav';
import IsUserReserv from '@/components/contexts/isUserReserv';

// export const runtime = 'edge';

async function getReservation(id: number) {
  const res = await fetch(
    process.env.NEXT_PUBLIC_HOST + `/api/reservation/${id}`
  );
  return res.json();
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

  return (
    <IsUserReserv reservation={reservation}>
      <section className="flex flex-col sm:flex-row flex-wrap mt-10 sm:relative w-auto max-w-screen justify-center h-full p-3 transition-all ease-in-out">
        <div className=" sm:container pb-3 flex flex-col sm:flex-row sm:justify-between border-b-2 border-b-slate-500 ">
          <div className="">
            <h1 className="font-bold   drop-shadow-lg text-2xl">{eventName}</h1>
            <h2 className=" font-light  drop-shadow-lg text-xl">
              {Facility.building} {Facility.name}
            </h2>
          </div>
          <div className=" p-4 sm:p-0 self-start sm:self-end sm:right-0">
            <UserResNav id={id} />
          </div>
        </div>
        {children}
      </section>
    </IsUserReserv>
  );
}
