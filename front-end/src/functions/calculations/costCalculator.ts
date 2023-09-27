'use server';

export default async function CostReducer(
  ReservationDate: any,
  additionalFeesTotal?: any,
  CategoryPrice?: any
) {
  let totalCost = 0;
  let totalHours = ReservationDate.reduce((acc: any, reservationDate: any) => {
    const startTime: any = new Date(`1970-01-01T${reservationDate.startTime}Z`);
    const endTime: any = new Date(`1970-01-01T${reservationDate.endTime}Z`);
    const hours = Math.abs(endTime - startTime) / 36e5;
    return acc + hours;
  }, 0);

  totalCost = totalHours * CategoryPrice + additionalFeesTotal;

  return Number(totalCost.toFixed(2));
}
