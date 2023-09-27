import { ShowPayment } from '@/components/forms';
import CostReducer from '@/functions/calculations/costCalculator';
import React from 'react';
import { columns } from './columns';
import { DataTable } from '@/components/ui/tables/users/data-table';
export const dynamic = 'force-dynamic';

interface feeProps {
  id: number;
  additionalFees: number;
  feesType: string;
  reservationId: any;
}

async function getReservation(id: number) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_HOST}/api/reservation/${id}`
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
  const { paid, Category, User, ReservationDate, ReservationFees, fees } =
    reservation;

  let additionalFeesTotal = 0;
  if (ReservationFees.length > 0) {
    for (let i = 0; i < ReservationFees.length; i++) {
      additionalFeesTotal += ReservationFees[i].additionalFees;
    }
  }
  const CategoryPrice = Category.price;
  const mappedFees = ReservationFees.map((fee: feeProps) => {
    return {
      additionalFees: fee.additionalFees,
      feesType: fee.feesType,
      options: fee.id,
    };
  });
  console.log('Additional Fees Total', additionalFeesTotal);
  console.log(mappedFees);
  console.log(ReservationDate);
  const totalCost = await CostReducer(
    ReservationDate,
    additionalFeesTotal,
    CategoryPrice
  );
  console.log('totalCost', totalCost);

  return (
    <div className="flex flex-wrap justify-center max-w-[1000px] h-full pb-3 mb-2 ">
      <div className="">
        <div className=" gap-y-4  drop-shadow-md  m-3 p-4 ">
          <h2 className="font-bold gap-y-4 text-xl text-gray-600 dark:text-gray-300">
            Pricing and Payments
          </h2>
          <div className="container max-w-[600px]">
            <DataTable columns={columns} data={mappedFees} />
            <div className="flex  my-2 p-2  justify-end text-xl border-b-2 border-b-gray-700 dark:border-b-white text-justify ">
              Total: ${totalCost}
              <div className="flex  my-2 p-2  justify-end text-xl border-b-2 border-b-gray-700 dark:border-b-white text-justify ">
                Total: $ {!paid ? totalCost : 'Paid'}
              </div>
              <div className="flex  my-2 p-2  justify-end text-xl border-b-2 border-b-gray-700 dark:border-b-white text-justify ">
                {!paid && <ShowPayment id={id} fees={totalCost} />}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
