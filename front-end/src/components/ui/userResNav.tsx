import Link from 'next/link';
import React from 'react';
import { IsApproved } from '@/components/contexts';

export default function UserResNav({ id }: { id: any }) {
  return (
    <div className="flex flex-col gap-2">
      <div className="sm:flex grid sm:flex-row gap-2 mx-5  sm:mx-0 font-normal sm:font-bold text-black dark:text-white justify-around  rounded-full p-2 bg-transparent sm:bg-secondary">
        <div className="bg-inherit nav-item transition ease-in-out hover:scale-110 ">
          <Link href={`/reservation/${id}`}>Summary</Link>
        </div>
        <div className="bg-inherit nav-item transition ease-in-out hover:scale-110 ">
          <Link href={`/reservation/${id}/Insurance`}>Insurance</Link>
        </div>
        {/* <div className="bg-inherit nav-item transition ease-in-out hover:scale-110 ">
          <Link href={`/admin/reservations/${id}/Docs`}>Other Documents</Link> //TODO: #15 Add other forms and chat  
        </div>*/}
        <IsApproved id={id}>
          <div className="bg-inherit nav-item transition ease-in-out hover:scale-110 ">
            <Link href={`/reservation/${id}/Pricing`}>Pricing & Payments</Link>
          </div>
        </IsApproved>
      </div>
    </div>
  );
}
