'use client';

import React, { useCallback } from 'react';
import { useSearchParams, usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { buttonVariants } from '@/components/ui/button';
import Link from 'next/link';

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
  const pathname = usePathname();
  const searchParams = useSearchParams();
  let selectedBuilding: string | null = 'All';
  if (searchParams && searchParams.has('building')) {
    selectedBuilding = searchParams.get('building');
  }
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
        <Link
          key={item.title}
          href={
            pathname + '?' + handleSetSelectedBuilding('building', item.title)
          }
          className={cn(
            buttonVariants({ variant: 'ghost' }),
            selectedBuilding === item.title
              ? 'bg-muted hover:bg-muted'
              : 'hover:bg-transparent hover:underline',
            'justify-start'
          )}
        >
          {item.title}
        </Link>
      ))}
    </nav>
  );
}
