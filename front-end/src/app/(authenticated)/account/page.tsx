import { getServerSession } from 'next-auth/next';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import React from 'react';
import Link from 'next/link';

export default async function accountPage() {
  const session = await getServerSession(authOptions);
  const user = session?.user;

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_HOST}/api/users/${user.id}`
  );
  const userSession = await res.json();

  const reservation = userSession?.Reservation;
  const Facility = userSession?.Facility;

  return (
    <section className="flex flex-col h-full p-3 transition-all ease-in-out">
      <h1 className="font-bold flex justify-center m-3 p-3 drop-shadow-lg text-7xl">
        Account
      </h1>
      <h2 className="font-bold flex justify-center m-3 border-b p-3 drop-shadow-lg text-4xl">
        {user.name}
      </h2>
      <div className="h-full justify-center max-w-7xl self-center align-middle flex flex-wrap ">
        <h1 className="text-bold drop-shadow-md text-3xl basis-full m-2  ">
          My Reservations
        </h1>
        <div className=" hidden sm:block sm:max-w-7xl ">
          <table>
            <thead>
              <tr>
                <th>reservation ID</th>
                <th> Event Name</th>
                <th> Facility </th>
                <th> Dates </th>
                <th> Status </th>

                <th> Details</th>
              </tr>
            </thead>
            <tbody>
              {reservation?.map((reservation: any) => (
                <tr key={reservation.id}>
                  <td>{reservation.id}</td>
                  <td>{reservation.eventName}</td>
                  <td>{reservation.Facility.name}</td>
                  <td className="">
                    {`${reservation.ReservationDate[0]?.startDate} - ${reservation.ReservationDate[0]?.endDate}`}{' '}
                    {reservation.ReservationDate.length > 1 && '...'}
                  </td>
                  <td className="justify-between">{reservation.approved} </td>

                  <td>
                    <Link href={`/reservation/${reservation.id}`}>Details</Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="block sm:hidden">
          {reservation?.map((reservation: any) => (
            <div key={reservation.id} className="border m-2 p-2">
              <p>
                <strong>Reservation ID:</strong> {reservation.id}
              </p>
              <p>
                <strong>Event Name:</strong> {reservation.eventName}
              </p>
              <p>
                <strong>Facility:</strong> {reservation.Facility.name}
              </p>
              <p>
                <strong>Dates:</strong>{' '}
                {`${reservation.ReservationDate[0]?.startDate} - ${reservation.ReservationDate[0]?.endDate}`}{' '}
                {reservation.ReservationDate.length > 1 && '...'}
              </p>
              <p>
                <strong>Status:</strong> {reservation.approved}
              </p>
              <p>
                <strong>Details:</strong>{' '}
                <Link href={`/reservation/${reservation.id}`}>Details</Link>
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
