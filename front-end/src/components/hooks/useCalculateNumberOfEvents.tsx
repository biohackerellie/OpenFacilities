import { IFormInput } from '@/lib/types';

export default function useCalculateNumberOfEvents() {
  return (startDate: any, endDate: any, dayOfWeek: any) => {
    let count = 0;
    let current = new Date(startDate);
    while (current <= endDate) {
      if (dayOfWeek === current.getDay()) {
        count++;
      }
      current.setDate(current.getDate() + 1);
    }

    return count;
  };
}
