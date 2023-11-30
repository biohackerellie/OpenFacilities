import React from 'react';
import { SidebarSearchParamsNav } from '@/components/ui/sidebar-searchParams';
import { Separator } from '@/components/ui/separator';
import { buildingSideBar } from '@/lib/types/constants';
import { Suspense } from 'react';
import { Skeleton } from '@/components/ui/skeleton';
export default function calendarLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="container relative">
      <div className="sm:hidden">{children}</div>
      <div className="hidden sm:block space-y-6 p-2 pb-16">
        <div className="space-y-0.5">
          <h1 className="text-2xl font-bold">Facilities</h1>
        </div>
        <Separator className="my-6" />
        <div className="flex flex-col space-y-8 lg:flex-row lg:space-x-12 lg:space-y-0">
          <aside className="-mx-4 lg:w-1/5">
            <Suspense fallback={<SearchBarSkeleton />}>
              <SidebarSearchParamsNav items={buildingSideBar} />
            </Suspense>
          </aside>
          <div className="flex-1 lg:max-w-4xl">{children}</div>
        </div>
      </div>
    </div>
  );
}

const SearchBarSkeleton = () => {
  return (
    <>
      <div className="flex space-x-2 lg:flex-col lg:space-x-0 lg:space-y-1">
        <Skeleton className="w-full h-full">
          <Skeleton className="w-full h-4" />
          <Skeleton className="w-full h-4" />
          <Skeleton className="w-full h-4" />
          <Skeleton className="w-full h-4" />
          <Skeleton className="w-full h-4" />
        </Skeleton>
      </div>
    </>
  );
};
