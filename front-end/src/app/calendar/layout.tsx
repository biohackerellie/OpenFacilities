import React, { Suspense } from 'react';
import { SidebarSearchParamsNav } from '@/components/ui/sidebar-searchParams';
import { Separator } from '@/components/ui/separator';
import { buildingSideBar } from '@/lib/types/constants';
import { Skeleton } from '@/components/ui/skeleton';

export default function calendarLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="container relative">
      <div className="sm:hidden">
        <Suspense fallback={<Skeleton className="w-auto h-auto" />}>
          {children}
        </Suspense>
      </div>
      <div className="hidden sm:block space-y-6 p-10 lg:p-2 pb-16">
        <div className="space-y-0.5">
          <h1 className="text-2xl font-bold">Calendar</h1>
        </div>
        <Separator className="my-6" />
        <div className="flex flex-col space-y-8 lg:flex-row lg:space-x-12 lg:space-y-0">
          <aside className="-mx-4 lg:w-1/5">
            <Suspense fallback={<Skeleton className="w-auto h-auto" />}>
              <SidebarSearchParamsNav items={buildingSideBar} />
            </Suspense>
          </aside>
          <div className="flex-1 lg:max-w-2xl">
            <Suspense fallback={<Skeleton className="w-auto h-auto" />}>
              {children}
            </Suspense>
          </div>
        </div>
      </div>
    </div>
  );
}
