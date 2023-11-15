'use client';

import React, { useCallback } from 'react';
import { useSearchParams, usePathname, useRouter } from 'next/navigation';
import { Button } from '@/components/ui/buttons/button';
import { Separator } from '@/components/ui/separator';

export default function BuildingFilter() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const selectedBuilding = searchParams.get('building') || 'All';
  const handleSetSelectedBuilding = useCallback(
    (building: string, name: string) => {
      const params = new URLSearchParams(searchParams);
      params.set(building, name);

      return params.toString();
    },
    [searchParams]
  );
  return (
    <div className="hidden sm:visible sm:flex h-5 justify-center items-center space-x-4 text-sm">
      <div className="">
        <Button
          variant="link"
          className={`${
            selectedBuilding === 'All' ? 'text-blue-500' : 'text-foreground'
          }`}
          onClick={() =>
            router.push(
              pathname + '?' + handleSetSelectedBuilding('building', 'All')
            )
          }
        >
          All Events
        </Button>
      </div>
      <Separator orientation="vertical" />
      <div>
        <Button
          variant="link"
          className={`${
            selectedBuilding === 'Graff Elementary'
              ? 'text-blue-500'
              : 'text-foreground'
          }`}
          onClick={() =>
            router.push(
              pathname +
                '?' +
                handleSetSelectedBuilding('building', 'Graff Elementary')
            )
          }
        >
          Graff
        </Button>
      </div>
      <Separator orientation="vertical" />
      <div>
        <Button
          variant="link"
          className={`${
            selectedBuilding === 'Laurel High School'
              ? 'text-blue-500'
              : 'text-foreground'
          }`}
          onClick={() =>
            router.push(
              pathname +
                '?' +
                handleSetSelectedBuilding('building', 'Laurel High School')
            )
          }
        >
          {' '}
          Laurel High School
        </Button>
      </div>
      <Separator orientation="vertical" />
      <div>
        <Button
          variant="link"
          className={`${
            selectedBuilding === 'Laurel Middle School'
              ? 'text-blue-500'
              : 'text-foreground'
          }`}
          onClick={() =>
            router.push(
              pathname +
                '?' +
                handleSetSelectedBuilding('building', 'Laurel Middle School')
            )
          }
        >
          Laurel Middle School
        </Button>
      </div>
      <Separator orientation="vertical" />
      <div>
        <Button
          variant="link"
          className={`${
            selectedBuilding === 'West Elementary'
              ? 'text-blue-500'
              : 'text-foreground'
          }`}
          onClick={() =>
            router.push(
              pathname +
                '?' +
                handleSetSelectedBuilding('building', 'West Elementary')
            )
          }
        >
          West Elementary
        </Button>
      </div>
      <Separator orientation="vertical" />
      <div>
        <Button
          variant="link"
          className={`${
            selectedBuilding === 'South Elementary'
              ? 'text-blue-500'
              : 'text-foreground'
          }`}
          onClick={() =>
            router.push(
              pathname +
                '?' +
                handleSetSelectedBuilding('building', 'South Elementary')
            )
          }
        >
          South Elementary
        </Button>
      </div>
      <Separator orientation="vertical" />
      <div>
        <Button
          variant="link"
          className={`${
            selectedBuilding === 'Administration Building'
              ? 'text-blue-500'
              : 'text-foreground'
          }`}
          onClick={() =>
            router.push(
              pathname +
                '?' +
                handleSetSelectedBuilding('building', 'Administration Building')
            )
          }
        >
          Administration Building
        </Button>
      </div>
      <Separator orientation="vertical" />
      <div>
        <Button
          variant="link"
          className={`${
            selectedBuilding === 'Laurel Stadium'
              ? 'text-blue-500'
              : 'text-foreground'
          }`}
          onClick={() =>
            router.push(
              pathname +
                '?' +
                handleSetSelectedBuilding('building', 'Laurel Stadium')
            )
          }
        >
          Laurel Stadium
        </Button>
      </div>
    </div>
  );
}
