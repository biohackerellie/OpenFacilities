import React, { cache } from 'react';
import { DataTable } from '@/components/ui/tables/reservations/data-table';
import { PaidButton } from '@/components/ui/buttons';
import { columns } from './columns';
import CostReducer from '@/functions/calculations/costCalculator';
import EditPricing from '@/components/forms/paymentModal';
import Options from './options';
import { Button } from '@/components/ui/buttons/button';
import { headers } from 'next/headers';
interface feeProps {
  id: number;
  additionalFees: number;
  feesType: string;
  reservationId: any;
}

export const dynamic = 'force-dynamic';

async function getReservation(id: number) {
  const headersInstance = headers();
  const auth = headersInstance.get('Cookie') as string;
  const res = await fetch(
    process.env.NEXT_PUBLIC_HOST + `/api/reservation/${id}`,
    {
      headers: {
        cookie: auth,
      },
    }
  );
  return res.json();
}

export default async function paymentPage({
  params,
}: {
  params: { id: number };
}) {
  const id = params.id;

  const reservation = await getReservation(id);
  const {
    paid,
    Category,
    User,
    ReservationDate,
    ReservationFees,
    costOverride,
    facilityId,
  } = reservation;
  let additionalFeesTotal = 0;
  if (ReservationFees.length > 0) {
    for (let i = 0; i < ReservationFees.length; i++) {
      additionalFeesTotal += ReservationFees[i].additionalFees;
    }
  }

  const CategoryId = Category.id;
  const CategoryPrice = Category.price;
  const mappedFees = ReservationFees.map((fee: feeProps) => {
    return {
      additionalFees: fee.additionalFees,
      feesType: fee.feesType,
      options: fee.id,
    };
  });
  const totalCost = await CostReducer(
    ReservationDate,
    additionalFeesTotal,
    CategoryPrice,
    CategoryId
  );

  const user = User.name;

  return (
    <div className="flex flex-wrap justify-center h-full pb-3 mb-2 ">
      <div className="">
        <div className="w-[1400px] gap-y-4  drop-shadow-md  m-3 p-4 ">
          <h2 className="font-bold gap-y-4 text-xl text-gray-600 dark:text-gray-300">
            Pricing and Payments
          </h2>
          <div className="container max-w-[600px]">
            <DataTable columns={columns} data={mappedFees} />
            <EditPricing id={id} />
            <div className="flex  my-2 p-2  justify-end text-xl border-b-2 border-b-gray-700 dark:border-b-white text-justify ">
              <div>
                {!costOverride && <>Total: ${totalCost}</>}{' '}
                {costOverride && <>Total: ${costOverride}</>}
              </div>
            </div>
            <div className="flex justify-center border-b-2">
              <Options id={id} facilityID={facilityId} />
            </div>
            {paid && (
              <div className="flex  my-2 p-2  justify-end text-xl border-b-2 border-b-gray-700 dark:border-b-white text-justify ">
                <span className="text-green-500">Paid</span>
              </div>
            )}
            {!paid && (
              <div className="flex  my-2 p-2  justify-end text-xl border-b-2 border-b-gray-700 dark:border-b-white text-justify ">
                <span className="text-red-500">Not Paid</span>
                <PaidButton id={id} />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
