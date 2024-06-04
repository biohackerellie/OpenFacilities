'use server';
import type { ReservationWithAll } from '@/lib/types';

type ChartData = Record<string, number | string | undefined>;

export default async function aggregateChartData({
  data,
}: {
  data: ReservationWithAll[];
}): Promise<ChartData[]> {
  // calculate 6 months ago

  const now = new Date();
  const sixMonthsAgo = new Date();
  sixMonthsAgo.setMonth(now.getMonth() - 6);

  //filter data within the last 6 months
  const recentData = data.filter(
    (reservation) => new Date(reservation.createdAt) > sixMonthsAgo
  );

  // Aggregate Data
  const aggregateData: any = {};
  recentData.forEach((reservation: ReservationWithAll) => {
    const month = new Date(reservation.createdAt).toLocaleString('default', {
      month: 'long',
    });
    const building = reservation.Facility.building;

    if (!aggregateData[month]) {
      aggregateData[month] = {};
    }
    if (!aggregateData[month][building]) {
      aggregateData[month][building] = 0;
    }
    aggregateData[month][building]++;
  });

  // Prepare final data struct
  const chartData: ChartData[] = [];
  Object.keys(aggregateData).forEach((month) => {
    const dataEntry: ChartData = { month };
    Object.keys(aggregateData[month]).forEach((building) => {
      dataEntry[building] = aggregateData[month][building];
    });
    chartData.push(dataEntry);
  });

  return chartData;
}
