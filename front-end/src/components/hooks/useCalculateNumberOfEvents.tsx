import { IFormInput } from '@/lib/types';

export default function useCalculateNumberOfevents() {
  return (startdate: any, enddate: any, dayOfWeek: any) => {
    let count = 0;
    let current = new Date(startdate);
    while (current <= enddate) {
      if (dayOfWeek === current.getDay()) {
        count++;
      }
      current.setDate(current.getDate() + 1);
    }

    return count;
  };
}
