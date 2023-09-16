import { verifyDoc } from '@/functions';

import Link from 'next/link';

import React from 'react';

export function VerifyButton({ id }: any) {
  const updateInsurance = async (id: any) => {
    const res = await verifyDoc(id);
  };
  return (
    <td>
      <button
        className="bg-primary  dark:bg-secondary justify-end self-end text-white rounded-md  hover:bg-purple-700 p-2 drop-shadow-md shadow-md transition-all duration-75 ease-in-out hover:scale-105 hover:-translate-x-1 hover:translate-y-1 "
        onClick={() => updateInsurance(id)}
      >
        Verify
      </button>
    </td>
  );
}

export function ReservationButton() {
  return (
    <div className=" bg-secondary text-white text-center hover:bg-secondaryDark transition ease-in-out hover:scale-110 font-bold py-2 px-4 border-b-4 shadow-sm drop-shadow-lg w-[220px] border-secondaryDark rounded ">
      <Link
        href="/reservation"
        className="font-bold text-xl drop-shadow-lg hover:animate-bounce"
      >
        {' '}
        Request a rental{' '}
      </Link>
    </div>
  );
}
