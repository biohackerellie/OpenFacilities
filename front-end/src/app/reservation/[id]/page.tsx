import { headers } from 'next/headers';
import { mapDates } from '@/functions/calculations/tableData';

async function getReservation(id: number) {
  const headersInstance = headers();
  const auth = headersInstance.get('Cookie')!;
  const res = await fetch(
    process.env.NEXT_PUBLIC_HOST + `/api/reservation/${id}`,
    {
      headers: {
        cookie: auth,
      },
      next: {
        tags: ['reservations'],
      },
    }
  );
  const reservation = await res.json();
  const mappedDates = await mapDates(reservation.ReservationDate);
  return { reservation, mappedDates };
}

export default async function reservationPage({
  params,
}: {
  params: { id: number };
}) {
  const { reservation, mappedDates } = await getReservation(params.id);

  const {
    name,
    Facility,
    primaryContact,
    phone,
    details,
    Category,
    ReservationDate,
  } = reservation;

  const facility = Facility.id;

  return (
    <div className="space-y-7 ">
      <div>
        <h2 className="text-2xl text-muted-foreground"> Summary </h2>
      </div>
      <div className="hidden sm:flex flex-col justify-between flex-wrap">
        <div className="flex flex-row  justify-between text-lg border-b-2   text-justify ">
          Primary Contact: {primaryContact} <div> {name}</div>
        </div>
        <div className="flex flex-row  justify-between text-lg border-b-2   text-justify ">
          Contact Number: <div>{phone}</div>
        </div>
        <div className="flex flex-row  justify-between text-lg border-b-2   text-justify ">
          Contact Email: <div>{reservation.User.email}</div>
        </div>
        <div className="flex flex-row  sm:justify-between text-lg border-b-2   text-justify ">
          Requested Category:{' '}
          <div className="truncate overflow-ellipsis text max-w-sm">
            {Category.name}
          </div>
        </div>
        <div className="flex flex-row my-10 text-ellipsis flex-wrap gap-10 justify-between text-xl border-b-2  text-justify">
          Description:{' '}
          <div className="text-left ml-10 flex text-md text-ellipsis">
            {details}{' '}
          </div>
        </div>
      </div>
    </div>
  );
}
