'use client';

import React, { useCallback } from 'react';
import { useSearchParams, usePathname, useRouter } from 'next/navigation';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/buttons/button';
import { buttonVariants } from '@/components/ui/button';

interface SidebarNavProps extends React.HTMLAttributes<HTMLElement> {
  items: {
    title: string;
  }[];
}

export function SidebarSearchParamsNav({
  className,
  items,
  ...props
}: SidebarNavProps) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const selectedBuilding = searchParams.get('building');

  const handleSetSelectedBuilding = useCallback(
    (building: string, name: string) => {
      const params = new URLSearchParams(searchParams);
      params.set(building, name);

      return params.toString();
    },
    [searchParams]
  );

  return (
    <nav
      className={cn(
        'flex space-x-2 lg:flex-col lg:space-x-0 lg:space-y-1',
        className
      )}
      {...props}
    >
      {items.map((item) => (
        <Button
          key={item.title}
          variant="link"
          className={cn(
            buttonVariants({ variant: 'ghost' }),
            selectedBuilding === item.title
              ? 'bg-muted hover:bg-muted'
              : 'hover:bg-transparent hover:underline',
            'justify-start'
          )}
          onClick={() =>
            router.push(
              pathname + '?' + handleSetSelectedBuilding('building', item.title)
            )
          }
        >
          {item.title}
        </Button>
      ))}
    </nav>
  );
}
