import SubNav from '@/components/ui/subNav';
import { Suspense } from 'react';
import { Skeleton } from '@/components/ui/skeleton';
import FacilityCard from '../facilities/facility_card';
export default async function buildingPage({
  params,
}: {
  params: { building: string };
}) {
  let building = ' ';

  if (params.building === 'West') {
    building = 'West Elementary';
  } else if (params.building === 'Admin') {
    building = 'Administration Building';
  } else if (params.building === 'Graff') {
    building = 'Graff Elementary';
  } else if (params.building === 'High') {
    building = 'Laurel High School';
  } else if (params.building === 'Middle') {
    building = 'Laurel Middle School';
  } else if (params.building === 'South') {
    building = 'South Elementary';
  } else {
    building = 'Facilities';
  }

  const res = await fetch(
    process.env.NEXT_PUBLIC_HOST + `/api/facility/${building}`,
    {
      next: {
        revalidate: 3600,
      },
    }
  );
  const facility = await res.json();

  return (
    <div className=" grid sm:place-items-center min-h-screen pb-[50px] scroll-smooth   gap-5 ">
      <h1 className="text-4xl m-2 mb-2 font-bold text-center">{building}</h1>
      <SubNav />
      <div className="grid grid-cols-1 p-0 scale-75 sm:scale-100 sm:grid-cols-3 gap-4 mt-0 pb-[1px] sm:pb-[150px] overflow-auto">
        {facility?.map((facility: any) => (
          <div key={facility.id}>
            <Suspense fallback={cardSkeleton()}>
              <FacilityCard {...facility} />
            </Suspense>
          </div>
        ))}
      </div>
    </div>
  );
}
const cardSkeleton = () => {
  return (
    <>
      <Skeleton className="h-[280px] w-[300px] sm:h-[380px] sm:w-[400px] bg-zinc-100 dark:bg-zinc-800 dark:text-white  border-gray-100 hover:border-black hover:cursor-pointer relative backdrop-blur-md shadow-sm drop-shadow-md dark:shadow-gold" />
    </>
  );
};
