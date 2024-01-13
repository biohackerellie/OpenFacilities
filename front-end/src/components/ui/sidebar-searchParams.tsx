'use client';

import React, { useCallback } from 'react';
import { useSearchParams, usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { buttonVariants } from '@/components/ui/button';
import Link from 'next/link';
import { useQueryState, parseAsString } from 'nuqs';
import { Button } from './buttons';

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
  const [selectedBuilding, setSelectedBuilding] = useQueryState(
    'building',
    parseAsString.withDefault('All')
  );
  console.log('selectedBuilding', selectedBuilding);

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
          onClick={() => setSelectedBuilding(item.title)}
          className={cn(
            buttonVariants({ variant: 'ghost' }),
            selectedBuilding === item.title
              ? 'bg-muted hover:bg-muted'
              : 'hover:bg-transparent hover:underline',
            'justify-start'
          )}
        >
          {item.title}
        </Button>
      ))}
    </nav>
  );
}
