import Image from 'next/image';
import React from 'react';

import Link from 'next/link';
import { Card, CardContent, CardHeader } from '@/components/ui/card';

interface Props {
  name: string | undefined;
  address: string | undefined;
  building: string | undefined;
  capacity: number | undefined;
  imagePath: string | undefined;
  id: number | undefined;
}

export default function FacilityCard({
  name,
  address,
  building,
  capacity,
  imagePath,
  id,
}: Props) {
  const idString = id?.toString();
  return (
    <Card className="h-[380px] w-[400px] bg-opacity-10 border-gray-100 hover:border-black hover:cursor-pointer relative backdrop-blur-md shadow-sm drop-shadow-md">
      <Link href={`/facilities/${idString}`}>
        <CardHeader className="drop-shadow-md">
          {imagePath ? (
            <img
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
