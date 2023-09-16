//@ts-nocheck

import Link from 'next/link';
import { useSession } from 'next-auth/react';
import React from 'react';

export default function IsAdminNav({
  children,
}: {
  children: React.ReactNode;
}) {
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
    return null;
  }
}
