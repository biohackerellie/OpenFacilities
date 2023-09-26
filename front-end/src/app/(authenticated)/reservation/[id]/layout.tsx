import React from 'react';
import UserResNav from './userResNav';
import IsUserReserv from '@/components/contexts/isUserReserv';

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
      <section className="flex flex-wrap relative justify-center h-full p-3 transition-all ease-in-out">
        <div className="container pb-3 flex justify-between border-b-2 border-b-slate-500 ">
          <div className="">
            <h1 className="font-bold   drop-shadow-lg text-2xl">{eventName}</h1>
            <h2 className=" font-light  drop-shadow-lg text-xl">
              {Facility.building} {Facility.name}
            </h2>
          </div>
          <div className=" self-end right-0">
            <UserResNav id={id} />
          </div>
        </div>
        {children}
      </section>
    </IsUserReserv>
  );
}
