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
	const {
		eventName,
		paid,
		Category,
		User,
		Facility,
		ReservationDate,
		ReservationFees,
		costOverride,
	} = reservation;

	const description = `${eventName} at ${Facility.building} ${Facility.name} by ${User.name}`;
	const email = User.email;

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

	return (
		<div className="flex  justify-center gap-y-4 my-3 w-[1000px] h-full pb-3 mb-2 ">
			<div className=" gap-y-4  drop-shadow-md  m-3 p-4 ">
				<h2 className="font-bold gap-y-4 text-xl text-gray-600 dark:text-gray-300">
					Pricing and Payments
				</h2>
				<h3 className="mt-1 font-bold text-gray-600 dark:text-gray-300 ">
					Added Fees:
				</h3>
				<div className="container w-[600px]  ">
					<div className=" border-b">
						{additionalFeesTotal > 0 ? (
							<DataTable columns={columns} data={mappedFees} />
						) : (
							<h4 className="font-thin italic text-center">
								No additional fees have been added
							</h4>
						)}
					</div>
					<div className="flex  my-2 p-2  justify-end text-xl border-b text-justify ">
						<div>
							{!paid &&
								!costOverride && (
									<>
										Total: ${totalCost}
									</>
								)} {!paid && costOverride && (
									<>
										Total: ${costOverride}
									</>
								)}
							{paid && (
								<>
									Total: Paid!
								</>)}
						</div>
					</div>
					<div className="flex   justify-end text-xl    text-justify ">
						{!paid && (
							<ShowPayment
								id={id}
								fees={totalCost}
								description={description}
								email={email}
							/>
						)}
					</div>
				</div>
			</div>
		</div>
	);
}
