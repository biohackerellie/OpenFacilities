'use client';

import React from 'react';
import Link from 'next/link';
import { YellowButton } from '@/components/ui/buttons';
interface Reservation {
  id: number;
  eventName: string;
  Facility: {
    name: string;
  };
  ReservationDate: {
    startDate: string;
    endDate: string;
  }[];
  approved: string;
}

interface TableProps {
  reservation: Reservation[];
}

export function Table({ reservation }: TableProps) {
  return (
    <div className="h-full justify-center max-w-7xl self-center align-middle flex flex-wrap ">
      <h1 className="text-bold drop-shadow-md text-3xl basis-full m-2  ">
        My Reservations
      </h1>
      <div className=" hidden sm:visible sm:max-w-7xl ">
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
            {reservation?.map((reservation: Reservation) => (
              <tr key={reservation.id}>
                <td>{reservation.id}</td>
                <td>{reservation.eventName}</td>
                <td>{reservation.Facility.name}</td>
                <td className="">
                  {`${reservation.ReservationDate[0].startDate} - ${reservation.ReservationDate[0].endDate}`}{' '}
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
      <div className="visible sm:hidden">
        {reservation?.map((reservation: Reservation) => (
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
              {`${reservation.ReservationDate[0].startDate} - ${reservation.ReservationDate[0].endDate}`}{' '}
              {reservation.ReservationDate.length > 1 && '...'}
            </p>
            <p>
              <strong>Status:</strong> {reservation.approved}
            </p>
            <p>
              <strong>Details:</strong>{' '}
              <YellowButton>
                <Link
                  className="bg-secondary dark:bg-primary text-sm sm:text-md p-1 text-white rounded-md hover:bg-purple-700 text-center sm:p-2 drop-shadow-md shadow-md transition-all duration-75 ease-in-out hover:scale-105 sm:hover:translate-x-1 sm:hover:translate-y-1"
                  href={`/reservation/${reservation.id}`}
                >
                  Details
                </Link>
              </YellowButton>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
