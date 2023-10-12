

import Link from 'next/link';

import React from 'react';


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
