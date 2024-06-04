import { Suspense } from 'react';
import { Skeleton } from '@/components/ui/skeleton';
import Image from 'next/image';
import dynamic from 'next/dynamic';

import type { FacilityWithCategory } from '@/lib/types';

export async function generateStaticParams() {
  const facilities = await fetch(
    process.env.NEXT_PUBLIC_HOST + `/api/facilities`
  ).then((res) => res.json());
  return facilities.map((facility: any) => ({
    id: facility.id.toString(),
  }));
}

export default async function facilityEditForm({
  params,
}: {
  params: {
    id: number;
  };
}) {
  const Forms = dynamic(() => import('./forms'));
  const data: FacilityWithCategory = await fetch(
    process.env.NEXT_PUBLIC_HOST + `/api/facilities/${params.id}`,
    {
      next: {
        revalidate: 3600,
        tags: ['facilities'],
      },
    }
  ).then((res) => res.json());

  const { name, address, building, capacity, imagePath } = data;

  const FacilityCategories = data.Category!.map((category) => {
    return {
      id: category.id,
      name: category.name,
      price: category.price,
    };
  });

  const id = Number(params.id);

  return (
    <div className="space-y-7 gap-y-4">
      <div>
        <h1 className="text-lg font-medium">
          Edit {building} {name}
        </h1>
      </div>
      <div className="flex flex-col justify-center">
        <Suspense fallback={<Skeleton className="w-[400px] h-[400px]" />}>
          <div>
            {imagePath ? (
              <Image
                src={imagePath}
                alt={name}
                width={400}
                height={400}
                className="drop-shadow-md shadow-md border-2 "
              />
            ) : (
              <Image
                src="/logo.jpg"
                alt={name}
                width={480}
                height={480}
                className=" drop-shadow-xl border-2"
              />
            )}
          </div>
        </Suspense>
        <Suspense fallback={<Skeleton className="w-[400px] h-[400px]" />}>
          <Forms
            id={id}
            name={name}
            capacity={capacity!}
            CategoryIDs={FacilityCategories}
          />
        </Suspense>
      </div>
    </div>
  );
}
