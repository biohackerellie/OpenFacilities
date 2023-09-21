import { ShowPayment } from '@/components/forms';

import React from 'react';

export default async function paymentPage({
  params,
}: {
  params: { id: number };
}) {
  const id = params.id;

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_HOST}/api/reservation/${id}`,
    { cache: 'no-store' }
  );
  const reservation = await res.json();
  const { category } = reservation;
  const user = reservation.user.name;
  const url = reservation.paymenturl;

  const reservationfees = reservation.reservationfees;
  // const reservationfeesTotal = reservationfees.reduce(
  //   (sum: any, fee: any) => sum + fee.reservationfees,
  //   0
  // );

  const totalBasePrice = category.price * reservation.totalhours;
  const totalCost = reservation.fees;
  const paid: boolean = reservation.paid;

  return (
    <div>
      <div className="justify-center flex flex-col sm:flex-row my-4 ">
        <div className="flex  flex-col border-gray-600 dark:border-white drop-shadow-xl shadow-xl   w-[800px] m-3 p-4 border-2">
          <h2 className="flex font-bold text-4xl text-gray-600 dark:text-gray-300">
            Pricing and Payments
          </h2>
          <div className=" my-5  gap-36">
            <div className="  my-2 p-2  justify-between text-xl border-b-2 border-b-gray-700 dark:border-b-white ">
              <p>category: {category.name} </p>
              <p> Price: ${category.price} /hr </p>
              <p> Total Hours: {reservation.totalhours} </p>
              <p> Total Base Price: ${totalBasePrice} </p>
            </div>

            <div className=" my-2 p-2  justify-between text-xl  border-b-gray-700 dark:border-b-white  ">
              <p> Additional Fees: </p>
              <p> Price: </p>

              {reservationfees.map((fee: any, index: any) => (
                <div key={index} className="m-2">
                  <div className="text-ellipsis overflow-hidden">
                    {fee.feesType}
                  </div>
                  <div>${fee.reservationfees}</div>
                </div>
              ))}
              <div className="flex  my-2 p-2  justify-end text-xl border-b-2 border-b-gray-700 dark:border-b-white text-justify ">
                Total: $ {!paid ? totalCost : 'Paid'}
              </div>
              {!paid && <ShowPayment id={id} />}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
