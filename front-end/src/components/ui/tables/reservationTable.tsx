'use client';

import React, { useState, useEffect } from 'react';
import { YellowButton } from '../buttons';
import Link from 'next/link';
import { swallDates } from '../swals';

export default function ReservationTable(
  reservations: any,
  totalReservations: any
) {
  const [page, setPage] = useState(1);
  const totalPages = Math.ceil(totalReservations / 14);
  const handleDateClick = swallDates();
  return (
    <>
      <table>
        <thead>
          <tr>
            <th> Event Name</th>
            <th> Facility </th>
            <th> Dates </th>
            <th> Status </th>
            <th> User </th>
            <th> Details</th>
          </tr>
        </thead>
        <tbody>
          {reservations?.map((reservation: any) => (
            <tr key={reservation.id}>
              <td>{reservation.eventName}</td>
              <td>{reservation.Facility.name}</td>
              <td
                className=" cursor-pointer hover:underline"
                onClick={() => handleDateClick(reservation.ReservationDate)}
              >
                {`${reservation.ReservationDate[0].startDate} - ${reservation.ReservationDate[0].endDate}`}{' '}
                {reservation.ReservationDate.length > 1 && '...'}
              </td>
              <td className="justify-between">{reservation.approved} </td>
              <td>{reservation.User.name}</td>
              <td>
                <YellowButton>
                  <Link href={`/admin/reservations/${reservation.id}`}>
                    Details
                  </Link>
                </YellowButton>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="justify-between  flex">
        <div>
          <YellowButton disabled={page === 1} onClick={() => setPage(page - 1)}>
            Previous
          </YellowButton>
        </div>
        <p className="text-sm -right-11 flex  font-light">Page: {page}</p>
        <div>
          <YellowButton
            disabled={page >= totalPages}
            onClick={() => setPage(page + 1)}
          >
            Next
          </YellowButton>
        </div>
      </div>
    </>
  );
}
