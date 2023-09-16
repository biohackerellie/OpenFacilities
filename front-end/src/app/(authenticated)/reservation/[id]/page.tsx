//@ts-nocheck

import { ResSummary } from '@/components/ui/tables';
import SmallCalendar from '@/components/calendar/smallCalendar';
import UserResNav from '@/components/ui/userResNav';
import IsUserReserv from '@/components/contexts/isUserReserv';
export default async function reservationPage({
  params,
}: {
  params: { id: number };
}) {
  const res = await fetch(
    process.env.NEXT_PUBLIC_HOST + `/api/reservation/${params.id}`,
    { cache: 'no-store' }
  );
  const reservation = await res.json();

  const {
    id,
    name,
    Facility,
    eventName,
    people,
    doorAccess,
    doorsDetails,
    techSupport,
    techDetails,
    responsibleParty,
    primaryContact,
    insurance,
    phone,
    details,
    fees,
    approved,
    createdAt,
    Event,
    Category,
    User,
    ReservationDate,
  } = reservation;

  const facility = Facility.id;

  return (
    <IsUserReserv reservation={reservation}>
      <section className="flex flex-col h-full p-3 transition-all ease-in-out">
        <h1 className="font-bold flex justify-center m-3 p-3 drop-shadow-lg text-7xl">
          {eventName}
        </h1>
        <h2 className="font-bold flex justify-center m-3 border-b p-3 drop-shadow-lg text-4xl">
          {Facility.building} {Facility.name}
        </h2>
        <div className=" justify-center p-3 m-3 ">
          <UserResNav id={id} {...reservation} />
        </div>
        <div className="justify-center flex flex-col   sm:flex-row my-4 ">
          <ResSummary {...reservation} />

          <div key={facility} className=" flex flex-col border-l-2 p-2  ">
            <h1 className="font-bold max-w-[480px] sm:max-w-2xl text-xl">
              {' '}
              {Facility.name} calendar{' '}
            </h1>

            <SmallCalendar facilityId={Facility.id} />
          </div>
        </div>
      </section>
    </IsUserReserv>
  );
}
