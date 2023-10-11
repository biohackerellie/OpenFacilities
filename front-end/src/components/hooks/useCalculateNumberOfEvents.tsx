import { IFormInput } from '@/lib/types';

export default function useCalculateNumberOfEvents() {
	return (startDate: any, repeatUntil: any, dayOfWeek: any) => {
		console.log('calculating events from', startDate, 'to', repeatUntil, 'on', dayOfWeek)
		let count = 0;
		let current = new Date(startDate);
		while (current <= repeatUntil) {

			if (dayOfWeek === current.getDay()) {
				console.log('Match found on', current)
				count++;
			}
			current.setDate(current.getDate() + 1);
		}
		console.log('Total events: ', count)
		return count;
	};
}
