import React from 'react';
import userResNav from './userResNav';
import IsuserReserv from '@/components/contexts/isuserReserv';

async function getReservation(id: number) {
  const res = await fetch(
    process.env.NEXT_PUBLIC_HOST + `/api/reservation/${id}`,
    { cache: 'no-store' }
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
  const { id, eventname, facility } = reservation;

  return (
    <IsuserReserv reservation={reservation}>
      <section className="flex flex-wrap relative justify-center h-full p-3 transition-all ease-in-out">
        <div className="container pb-3 flex justify-between border-b-2 border-b-slate-500 ">
          <div className="">
            <h1 className="font-bold   drop-shadow-lg text-2xl">{eventname}</h1>
            <h2 className=" font-light  drop-shadow-lg text-xl">
              {facility.building} {facility.name}
            </h2>
          </div>
          <div className=" self-end right-0">
            <userResNav id={id} />
          </div>
        </div>
        {children}
      </section>
    </IsuserReserv>
  );
}
