import { IFormInput } from '@/lib/types';

export default function useCalculateNumberOfEvents() {
  return (startDate: any, repeatUntil: any, dayOfWeek: any) => {
    let count = 0;
    const current = new Date(startDate);
    while (current.getTime() <= repeatUntil.getTime()) {
      if (Number(dayOfWeek) === current.getDay()) {
        count++;
      }
      current.setDate(current.getDate() + 1);
    }
    return count;
  };
}
