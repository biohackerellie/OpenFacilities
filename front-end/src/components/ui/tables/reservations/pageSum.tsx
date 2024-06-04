import type { Reservation } from '@/lib/types';
import React from 'react';

export const pageSum = (reservation: Reservation) => {
  return (
    <div className="hidden sm:inline-block justify-between border  p-2    my-5  gap-48">
      <div className="hidden sm:flex pb-4">
        <h2 className="   font-bold gap-y-4 text-xl text-gray-600 dark:text-gray-300">
          {' '}
          Summary{' '}
        </h2>
      </div>
      <div className="flex flex-row  justify-between text-lg border-b-2   text-justify ">
        Primary Contact: {reservation.primaryContact}{' '}
        <div> {reservation.name}</div>
      </div>
      <div className="flex flex-row  justify-between text-lg border-b-2   text-justify ">
        Contact Number: <div>{reservation.phone}</div>
      </div>
      <div className="flex flex-row  justify-between text-lg border-b-2   text-justify ">
        Contact Email: <div>{reservation.User?.email}</div>
      </div>
      <div className="flex flex-row  sm:justify-between text-lg border-b-2 max-w-[600px]  text-justify ">
        Requested Category:{' '}
        <div className="truncate overflow-ellipsis text max-w-xs ml-2">
          {reservation.Category?.name}
        </div>
      </div>
      <div className="flex flex-row  max-w-[600px] my-10 text-ellipsis flex-wrap gap-10 justify-between text-xl border-b-2  text-justify">
        Description:{' '}
        <div className="text-left ml-10 flex text-md text-ellipsis">
          {reservation.details}{' '}
        </div>
      </div>
      {reservation.techSupport && (
        <div className="flex flex-row my-10 max-w-[600px] text-ellipsis flex-wrap gap-10 justify-between text-xl border-b-2  text-justify">
          Tech Support Requested:
          <div className="text-left ml-10 max-w-[600px] flex text-md text-ellipsis">
            {reservation.techDetails}{' '}
          </div>
        </div>
      )}
      {reservation.doorAccess && (
        <div className="flex flex-row my-10 max-w-[600px] text-ellipsis flex-wrap gap-10 justify-between text-xl border-b-2  text-justify">
          Door Access Requested:
          <div className="text-left ml-10 flex text-md text-ellipsis">
            {reservation.doorsDetails}{' '}
          </div>
        </div>
      )}
    </div>
  );
};
