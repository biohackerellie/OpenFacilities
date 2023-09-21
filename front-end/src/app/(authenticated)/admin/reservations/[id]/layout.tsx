import React from 'react';
import ResNav from './reservationNav';

async function getReservation(id: number) {
  const res = await fetch(
    process.env.NEXT_PUBLIC_HOST + `/api/reservation/${id}`,
    { cache: 'no-store' }
  );
  return res.json();
}

export default async function reservationAdminLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { id: number };
}) {
  const reservation = await getReservation(params.id);
  const {
    id,
    name,
    primarycontact,
    phone,
    details,
    category,
    eventname,
    facility,
    reservationdate,
  } = reservation;

  return (
    <section className="flex flex-wrap relative justify-center h-full p-3 transition-all ease-in-out">
      <div className="container pb-3 flex justify-between border-b-2 border-b-slate-500 ">
        <div className="">
          <h1 className="font-bold   drop-shadow-lg text-2xl">{eventname}</h1>
          <h2 className=" font-light  drop-shadow-lg text-xl">
            {facility.building} {facility.name}
          </h2>
        </div>
        <div className=" self-end right-0">
          <ResNav id={id} facility={facility} />
        </div>
      </div>
      {children}
    </section>
  );
}
