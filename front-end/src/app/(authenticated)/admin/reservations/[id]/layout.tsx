import React from 'react';
import ResNav from './reservationNav';

async function getReservation(id: number) {
  const res = await fetch(
    process.env.NEXT_PUBLIC_HOST + `/api/reservation/${id}`
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
    primaryContact,
    phone,
    details,
    Category,
    eventName,
    Facility,
    ReservationDate,
  } = reservation;
  const facility = Facility.id;
  return (
    <section className="flex flex-wrap relative justify-center h-full p-3 transition-all ease-in-out">
      <div className="container pb-3 flex justify-between border-b-2 border-b-slate-500 ">
        <div className="">
          <h1 className="font-bold   drop-shadow-lg text-2xl">{eventName}</h1>
          <h2 className=" font-light  drop-shadow-lg text-xl">
            {Facility.building} {Facility.name}
          </h2>
        </div>
        <div className=" self-end right-0">
          <ResNav id={id} facility={Facility} />
        </div>
      </div>
      {children}
    </section>
  );
}
