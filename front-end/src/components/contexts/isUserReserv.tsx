'use client';

import { useEffect } from 'react';
import { useSession } from 'next-auth/react';
import React from 'react';

import { User } from 'next-auth';

interface Reservation {
  userId: string;
}

interface Props {
  children: React.ReactNode;
  reservation: Reservation;
}

export default function IsUserReserv({ children, reservation }: Props) {
  const { data: session, status } = useSession();

  if (status === 'authenticated') {
    const user = session?.user as User;
    if (user?.id === reservation.userId) {
      return <>{children}</>;
    } else {
      return (
        <div className="justify-center align-middle text-center flex flex-wrap flex-col">
          <h1 className="font-bold text-2xl">
            You must be logged in to view this page
          </h1>
        </div>
      );
    }
  } else {
    return (
      <React.Fragment>
        <div>you must be logged in</div>
      </React.Fragment>
    );
  }
}
