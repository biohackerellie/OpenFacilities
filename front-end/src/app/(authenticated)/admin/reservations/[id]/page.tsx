import AdminResSummary from '@/components/ui/tables/AdminResSummary';
import SmallCalendar from '@/components/calendar/smallCalendar';
import ResNav from '@/components/ui/reservationNav';
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
  const { id, Facility, eventName } = reservation;

  const facility = Facility.id;
  console.log('Facility: ', Facility);
  return (
    <>
      <ResNav id={id} facility={Facility} />

      <section className="flex flex-col h-full p-3 transition-all ease-in-out">
        <h1 className="font-bold flex justify-center m-3 p-3 drop-shadow-lg text-7xl">
          {eventName}
        </h1>
        <h2 className="font-bold flex justify-center m-3 border-b p-3 drop-shadow-lg text-4xl">
          {Facility.building} {Facility.name}
        </h2>

        <div className="justify-center flex flex-col sm:flex-row my-4 ">
          <AdminResSummary {...reservation} />

          <div key={facility} className=" flex flex-col border-l-2 p-2 ">
            <h1 className="font-bold text-xl"> {Facility.name} calendar </h1>

            <SmallCalendar facilityId={Facility.id} />
          </div>
        </div>
      </section>
    </>
  );
}
