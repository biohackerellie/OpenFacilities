import React from 'react';
import SubNav from '@/components/ui/subNav';
import { Suspense } from 'react';
import FacilityCardSkeleton from '@/components/ui/skeletons/CardSkeleton';
import FacilityCard from './facility_card';

async function getFacilities() {
	const res = await fetch(process.env.NEXT_PUBLIC_HOST + '/api/facilities');
	const facilities = await res.json();
	return facilities;
}

export default async function FacilitiesPage() {
	const facilities = await getFacilities();

	return (
		<div className=" flex flex-col sm:grid justify-center place-items-center sm:min-h-screen pb-0 sm:pb-[50px] scroll-smooth   sm:gap-5 ">
			<h1 className="text-4xl m-2 mb-0 flex sm:mb-4 mt-16 font-bold text-center">Facilities</h1>
			<div className="hidden sm:inline">
				<SubNav />
			</div>
			<div className="flex flex-col sm:grid  p-0  sm:grid-cols-3 gap-4 mt-0 pb-[1px] sm:pb-[150px] ">
				<Suspense fallback={<FacilityCardSkeleton />}>
					{facilities?.map((facility: any) => (
						<div key={facility.id} className="gap-3 m-2 show flex-1">
							<FacilityCard {...facility} />
						</div>
					))}
				</Suspense>
			</div>
		</div>
	);
}
