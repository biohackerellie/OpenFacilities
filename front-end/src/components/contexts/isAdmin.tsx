'use client';
import Link from 'next/link';
import { useSession } from 'next-auth/react';

export default function IsAdmin({ children }: { children: React.ReactNode }) {
  const { data: session, status } = useSession();

  if (
    session?.user.roles === 'ADMIN_ADMIN' ||
    session?.user.roles === 'CAL_ADMIN' ||
    session?.user.roles === 'GR_ADMIN' ||
    session?.user.roles === 'HS_ADMIN' ||
    session?.user.roles === 'LMS_ADMIN' ||
    session?.user.roles === 'WE_ADMIN' ||
    session?.user.roles === 'SO_ADMIN' ||
    session?.user.roles === 'SUP_ADMIN'
  ) {
    return <> {children} </>;
  } else {
    return (
      <div className="justify-center mt-16 align-middle text-center flex flex-wrap flex-col">
        <h1 className="font-bold text-2xl">
          You dont have permission to view this page
        </h1>
        <h2 className="font-bold  text-xl">
          {' '}
          Click{' '}
          <Link className="text-blue-600" href="/">
            Here
          </Link>{' '}
          to go back
        </h2>
      </div>
    );
  }
}
