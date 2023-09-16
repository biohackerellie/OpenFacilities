import Link from 'next/link';
import React from 'react';
import { ChangeFacility } from '../forms';
import { Reservation, Facility } from '@/lib/types';

interface ResNavProps {
  id: number;
  facility: Facility;
}

export default function ResNav({ id, facility }: ResNavProps) {
  return (
    <div className="flex self-stretch flex-grow  sticky gap-2">
      <div className="flex  sm:flex-row gap-2 mx-5 flex-grow   sm:mx-0 font-normal sm:font-bold text-black justify-around p-2 bg-transparent sm:bg-secondary">
        <div className="bg-inherit nav-item transition ease-in-out hover:scale-110 ">
          <Link href={`/admin/reservations/${id}`}>Summary</Link>
        </div>
        <div className="bg-inherit nav-item transition ease-in-out hover:scale-110 ">
          <Link href={`/admin/reservations/${id}/Insurance`}>Insurance</Link>
        </div>

        <div className="bg-inherit nav-item transition ease-in-out hover:scale-110 ">
          <Link href={`/admin/reservations/${id}/Pricing`}>
            Pricing & Payments
          </Link>
        </div>
        <div className="bg-inherit nav-item transition ease-in-out hover:scale-110 ">
          <ChangeFacility id={id} facility={facility} />
        </div>
      </div>
    </div>
  );
}
