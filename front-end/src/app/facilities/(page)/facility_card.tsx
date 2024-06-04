import Image from 'next/image';
import React from 'react';

import Link from 'next/link';
import { Suspense } from 'react';
import { Skeleton } from '@/components/ui/skeleton';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import type {FacilityWithCategory} from '@/lib/types';

type PartialFacility = Partial<FacilityWithCategory>;

export default function FacilityCard({
  name,
  address,
  building,
  imagePath,
  id,
}: PartialFacility) {
  const idString = id?.toString();
  return (
    <Card className=" h-[280px] w-[300px] sm:h-[380px] sm:w-[400px] bg-zinc-100 dark:bg-zinc-800 dark:text-white  border-gray-100 hover:border-black hover:cursor-pointer relative backdrop-blur-md shadow-sm drop-shadow-md dark:shadow-gold">
      <Link href={`/facilities/${idString}`}>
        <CardHeader className="drop-shadow-md">
          <Suspense
            fallback={
              <Skeleton className="w-[350px] h-[260px] flex-shrink aspect-video object-scale-down drop-shadow-md" />
            }
          >
            {imagePath ? (
              <Image
                src={imagePath}
                alt={`${name}`}
                width={350}
                height={260}
                className="flex-shrink aspect-video object-scale-down drop-shadow-md"
              />
            ) : (
              <Image
                src="/logo.jpg"
                alt={`${name}`}
                width={350}
                height={260}
                sizes="(max-width: 480px) (max-height: 350px)"
                className="flex-shrink aspect-video object-scale-down drop-shadow-md"
              />
            )}
          </Suspense>
        </CardHeader>
        <CardContent className=" text-center space-y-1 mt-2">
          <p className="text-lg font-bold leading-none">{name}</p>
          <p className="text-lg font-medium leading-none">{address}</p>
          <p className="text-lg font-medium leading-none">{building}</p>
        </CardContent>
      </Link>
    </Card>
  );
}
