import React from 'react';
import { getCurrentUser } from '@/functions/data/auth';
import type { User } from 'next-auth';

interface Reservation {
  userId: string;
}

interface Props {
  children: React.ReactNode;
  reservation: Reservation;
}

export default async function IsUserReserv({ children, reservation }: Props) {
  const session = await getCurrentUser();
  const user = session?.user as User;
  if (session.user) {
    if (user?.id === reservation.userId || session.isAdmin()) {
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
