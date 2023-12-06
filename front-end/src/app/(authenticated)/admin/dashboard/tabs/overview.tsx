import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { TabsContent } from '@/components/ui/tabs';
import { School } from 'lucide-react';
import aggregateChartData from '@/functions/calculations/reservsByMonth';
import WeeklyCount from '@/functions/calculations/weeklyResCount';
import WeeklyUnpaidCount from '@/functions/calculations/unpaidCount';
import { getAllReservations } from '@/functions/data/reservations';
import RequestCount from '@/functions/calculations/requestCount';
import { Skeleton } from '@/components/ui/skeleton';
import { Suspense } from 'react';
import dynamic from 'next/dynamic';
import MonthlyRevenue from '@/functions/calculations/revPerMonth';

async function getData() {
  const data = await getAllReservations();

  const [chartData, count, weeklyCount, unpaidCount, Revenue] =
    await Promise.all([
      aggregateChartData({ data }),
      RequestCount(),
      WeeklyCount(),
      WeeklyUnpaidCount({ data }),
      MonthlyRevenue({ data }),
    ]);

  return { chartData, count, weeklyCount, unpaidCount, Revenue };
}

export default async function Overview() {
  const { chartData, count, weeklyCount, unpaidCount, Revenue } =
    await getData();
  const ByMonthLine = dynamic(() => import('../charts/byMonth-Line'));
  const MonthlyRevChart = dynamic(() => import('../charts/monthlyRev'));

  return (
    <>
      <TabsContent value="overview">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Suspense fallback={<Skeleton className="w-auto h-auto" />}>
            <Card className="">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Upcoming Events
                </CardTitle>

                <School size={16} strokeWidth={1} />
              </CardHeader>

              <CardContent>
                <div className="text-2xl font-bold text-right">
                  {weeklyCount}
                </div>
                <p className="text-xs text-muted-foreground">
                  Events in the next 7 days
                </p>
              </CardContent>
            </Card>
          </Suspense>
          <Suspense fallback={<Skeleton className="w-auto h-auto" />}>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Pending Requests
                </CardTitle>
                <School size={16} strokeWidth={1} />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-right">{count}</div>
              </CardContent>
            </Card>
          </Suspense>
          <Suspense fallback={<Skeleton className="w-auto h-auto" />}>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Unpaid Requests
                </CardTitle>
                <School size={16} strokeWidth={1} />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-right">
                  {unpaidCount}
                </div>
                <p className="text-xs text-muted-foreground">
                  Events in the next 7 days that owe money
                </p>
              </CardContent>
            </Card>
          </Suspense>
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Card className="col-span-4">
            <CardHeader>
              <CardTitle className="text-muted-foreground">
                Requests per building
              </CardTitle>
            </CardHeader>
            <CardContent className="flex">
              <Suspense fallback={<Skeleton className="w-[500px] h-[300px]" />}>
                <ByMonthLine data={chartData} />
              </Suspense>
            </CardContent>
          </Card>
        </div>
      </TabsContent>
      <TabsContent value="payments">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Suspense fallback={<Skeleton className="w-auto h-auto" />}>
            <Card className="">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Total Paid
                </CardTitle>

                <School size={16} strokeWidth={1} />
              </CardHeader>

              <CardContent>
                <div className="text-2xl font-bold text-right text-green-500">
                  +${Revenue.totalPositive}
                </div>
                <p className="text-xs text-muted-foreground">
                  over the last 6 months
                </p>
              </CardContent>
            </Card>
          </Suspense>
          <Suspense fallback={<Skeleton className="w-auto h-auto" />}>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Total Unpaid
                </CardTitle>
                <School size={16} strokeWidth={1} />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-right text-red-500">
                  -${Revenue.totalNegative}
                </div>
                <p className="text-xs text-muted-foreground">
                  over the last 6 months
                </p>
              </CardContent>
            </Card>
          </Suspense>
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Card className="col-span-4">
            <CardHeader>
              <CardTitle className="text-muted-foreground">
                Revenue per month
              </CardTitle>
            </CardHeader>
            <CardContent className="flex">
              <Suspense fallback={<Skeleton className="w-[500px] h-[300px]" />}>
                <MonthlyRevChart data={Revenue.revChartData} />
              </Suspense>
            </CardContent>
          </Card>
        </div>
      </TabsContent>
    </>
  );
}
