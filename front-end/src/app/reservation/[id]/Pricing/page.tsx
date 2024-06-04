import { ShowPayment } from '@/components/forms';

import React, { Suspense } from 'react';
import { adminColumns } from './adminColumns';
import { columns } from './columns';
import { DataTable } from '@/components/ui/tables/reservations/data-table';
import Options from './options';
import { headers } from 'next/headers';
import { ReservationClass } from '@/lib/classes';
import { getCurrentUser } from '@/functions/data/auth';
import EditPricing from '@/components/forms/paymentModal';
import { Paid } from '@/functions/mutations';
import { SubmitButton } from '@/components/ui/buttons/submitButton';
import { Skeleton } from '@/components/ui/skeleton';
interface feeProps {
  id: number;
  additionalFees: number;
  feesType: string;
  reservationId: any;
}

async function getReservation(id: number) {
  const headersInstance = headers();
  const auth = headersInstance.get('Cookie')!;
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_HOST}/api/reservation/${id}`,
    {
      headers: {
        Cookie: auth,
      },
      next: {
        tags: ['reservations'],
        revalidate: 60,
      },
    }
  );

  const response = await res.json();
  const data = new ReservationClass(response);
  return data;
}

export default async function paymentPage({
  params,
}: {
  params: { id: number };
}) {
  const id = params.id;

  const reservation = await getReservation(id);

  const {
    eventName,
    paid,
    Category,
    User,
    Facility,
    ReservationFees,
    costOverride,
  } = reservation;

  const description = `${eventName} at ${Facility?.building} ${Facility?.name} by ${User?.name}`;
  const email = User?.email || '';

  const CategoryPrice = Category?.price;
  const mappedFees = ReservationFees
    ? //@ts-expect-error
      ReservationFees.map((fee: feeProps) => {
        return {
          additionalFees: fee.additionalFees,
          feesType: fee.feesType,
          options: fee.id,
        };
      })
    : [];

  const totalCost = reservation.CostReducer();
  const session = await getCurrentUser();

  return (
    <div className="flex flex-col sm:flex-row  justify-center gap-y-4 my-3 w-auto lg:w-[1000px] h-full pb-3 mb-2 ">
      <div className=" gap-y-4  drop-shadow-md  m-3 p-4 ">
        <h2 className="font-bold gap-y-4 text-xl text-gray-600 dark:text-gray-300">
          Pricing and Payments
        </h2>
        <h3 className="mt-1 font-bold text-gray-600 dark:text-gray-300 ">
          Added Fees:
        </h3>
        <div className="sm:container sm:w-[600px]  ">
          <Suspense
            fallback={<Skeleton className="w-[600px] h-[600px]"></Skeleton>}
          >
            {session.isAdmin() ? (
              <>
                <div className=" border-b mb-2 py-2">
                  <DataTable columns={adminColumns} data={mappedFees} />
                  <EditPricing id={id} />
                </div>
                <div className="flex justify-center border-b-2">
                  <Options
                    id={id}
                    facilityID={reservation.facilityId as number}
                  />
                </div>
              </>
            ) : (
              <div className=" border-b">
                <DataTable columns={columns} data={mappedFees} />
              </div>
            )}
          </Suspense>
          <div className="flex  my-2 p-2  justify-end text-xl border-b text-justify ">
            <div>
              {!paid && !costOverride && (
                <>
                  <div className="text-sm font-thin text-muted-foreground">
                    Cost Per Hour: ${CategoryPrice} * Total Hours + any
                    additional fees = <br />
                  </div>
                  <div className="float-right">Total: ${totalCost}</div>
                </>
              )}{' '}
              {!paid && costOverride && <>Total: ${costOverride}</>}
              {paid && <>Total: Paid!</>}
            </div>
          </div>

          <div className="flex   justify-end text-xl    text-justify ">
            {!paid && (totalCost > 0 || (costOverride && costOverride > 0)) && (
              <>
                {session.isAdmin() ? (
                  <div className="flex  my-2 p-2  justify-end text-xl border-b-2 border-b-gray-700 dark:border-b-white text-justify ">
                    <span className="text-red-500">Not Paid</span>
                    <form action={Paid}>
                      <input type="hidden" name="id" value={id} />
                      <SubmitButton>Mark as Paid</SubmitButton>
                    </form>
                  </div>
                ) : (
                  <ShowPayment
                    id={id}
                    fees={costOverride ? costOverride : totalCost}
                    description={description}
                    email={email}
                  />
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
