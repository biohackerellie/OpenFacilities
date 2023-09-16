'use client';

import React, { useState } from 'react';
import { cancelDate } from '@/functions';

import moment from 'moment-timezone';

export default function ResSummary({
  name,
  doorAccess,
  doorsDetails,
  techSupport,
  techDetails,
  primaryContact,
  details,
  ReservationDate,
}: any) {
  return (
    <div>
      <div className="flex  sm:flex-col  border-gray-700 dark:border-white flex-wrap text-ellipsis overflow-hidden max-w-sm sm:max-w-[900px] m-3 p-4 border-2">
        <h2 className="flex font-bold text-4xl text-gray-600 dark:text-gray-300">
          {' '}
          Summary{' '}
        </h2>
        <div className="justify-between my-5  gap-36">
          <div className="flex flex-row  justify-between text-xl border-b-2 border-b-gray-700 dark:border-b-white text-justify ">
            Primary Contact: {primaryContact} <div> {name}</div>
          </div>
          <div className="flex flex-row my-10 text-ellipsis flex-wrap gap-10 justify-between text-xl border-b-2 border-b-gray-700 dark:border-b-white text-justify">
            Description:{' '}
            <div className="text-right ml-10 flex text-md text-ellipsis">
              {details}{' '}
            </div>
          </div>
        </div>

        <div className="sm:justify-between justify-evenly ">
          {ReservationDate.sort(
            (a: any, b: any) =>
              new Date(a.startDate).getTime() - new Date(b.startDate).getTime()
          ).map((date: any) => {
            const isApproved = date.approved === 'approved';
            const isCanceled = date.approved === 'canceled';
            const isDenied = date.approved === 'denied';
            return (
              <div
                key={date.id}
                className="flex border-b-2 border-b-gray-700 dark:border-b-white my-2 py-2 col-span-full justify-between w-full gap-3"
              >
                <div>
                  Start Date: <div />{' '}
                  {moment(date.startDate).format('M/DD/YYYY')}
                </div>
                <div>
                  End Date: <div /> {moment(date.endDate).format('M/DD/YYYY')}
                </div>
                <div>
                  Start Time: <div />{' '}
                  {moment(date.startDate + ' ' + date.startTime).format(
                    'h:mm a'
                  )}
                </div>
                <div>
                  End Time: <div />{' '}
                  {moment(date.endDate + ' ' + date.endTime).format('h:mm a')}
                </div>
                <div>
                  Status: <div /> {date.approved}
                </div>
                <div>
                  <button
                    onClick={() => {
                      cancelDate(date.id);

                      location.reload();
                    }}
                    className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            );
          })}

          {techSupport && (
            <div className="flex flex-row my-10  justify-between text-xl border-b-2 border-b-gray-700 dark:border-b-white text-justify ">
              Tech Support: <div>{techDetails}</div>
            </div>
          )}
          <div>
            {doorAccess && (
              <div className="flex flex-row my-10  justify-between text-xl border-b-2 border-b-gray-700 dark:border-b-white text-justify  ">
                Door Access:{' '}
                <div className="text-right ml-10 flex text-md text-ellipsis">
                  {doorsDetails}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
