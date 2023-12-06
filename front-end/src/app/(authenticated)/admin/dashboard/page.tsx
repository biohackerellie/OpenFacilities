import { Suspense } from 'react';
import dynamic from 'next/dynamic';

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

import { Skeleton } from '@/components/ui/skeleton';

export default async function DashboardPage() {
  const Overview = dynamic(() => import('./tabs/overview'));
  return (
    <>
      <div className="flex flex-col">
        <div className="flex-1 space-y-4 p-8">
          <Tabs defaultValue="overview" className="space-y-4">
            <TabsList>
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="payments">Payments</TabsTrigger>
            </TabsList>

            <Suspense fallback={<Skeleton className="w-auto h-auto" />}>
              <Overview />
            </Suspense>
          </Tabs>
        </div>
      </div>
    </>
  );
}
