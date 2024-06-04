import type { FieldArrayMethodProps } from 'react-hook-form';
import useCalculateNumberOfEvents from './useCalculateNumberOfEvents';
import moment from 'moment-timezone';

moment.tz.setDefault('America/Denver');

interface Event {
	startDate: string;
	endTime: string;
	startTime: string;
}
// Define the useHandleAddDate hook
export default function useHandleAddDate(
	append: {
		(
			value:
				| {
					startDate: moment.Moment;
					startTime: moment.Moment;
					endTime: moment.Moment;
				}
				| {
					startDate: moment.Moment;
					startTime: moment.Moment;
					endTime: moment.Moment;
				}[],
			options?: FieldArrayMethodProps | undefined
		): void;
		(arg0: any): void;
	}) {
	// Get the method to calculate the number of events between the start date and the end date
	const calculateNumberOfWeeks = useCalculateNumberOfEvents();
	// helper function to format the dates
	const formatDate = (date: moment.Moment) => {
		return date.format('YYYY-MM-DD');
	};

	// Main function returned by the hook
	return (data: {
		startDate: string | number | moment.Moment;
		startTime: { split: (arg0: string) => number[] };
		endTime: { split: (arg0: string) => number[] };
		dayOfWeek: any[];
		repeatUntil: string | number | moment.Moment;
	}) => {
		// Helper function to add days to a date
		const addDays = (date: moment.Moment, days: number) => {
			return date.clone().add(days, 'days');
		};


		// Parse the start date, start time, and end time from the data object
		const startDate = moment(data.startDate);
		const startTime = moment();
		startTime.set({
			hour: data.startTime.split(':')[0],
			minute: data.startTime.split(':')[1],
		});

		const endTime = moment();
		endTime.set({
			hour: data.endTime.split(':')[0],
			minute: data.endTime.split(':')[1],
		});
		// Set the time of the start date
		startDate.set({
			hour: startTime.hour(),
			minute: startTime.minute(),
		});


		// Calculate the duration of the event in milliseconds
		const duration = moment.duration(endTime.diff(startTime)).asMilliseconds();
		// Map the day of the week values to integers
		const daysOfWeek = data.dayOfWeek.map((day: any) => {
			return parseInt(day.value);
		});
		// Helper function to format the time
		const formatTime = (date: moment.Moment) => {
			return date.format('HH:mm');
		};

		// Create an array to hold the events
		const events: Event[] = [];

		// Loop through each day of the week selected in the form
		daysOfWeek.forEach((day) => {

			const momentDay = day === 0 ? 7 : day;
			// Find the first occurrence of the day of the week on or after the start date
			let currentStartDate = moment(data.startDate);
			while (currentStartDate.isoWeekday() !== momentDay) {
				currentStartDate = addDays(currentStartDate, 1);
			}

			// Find the last occurrence of the day of the week on or before the repeat until date
			let currentEndDate = moment(data.repeatUntil);
			currentEndDate.set({
				hour: 23,
				minute: 59,
				second: 59,
				millisecond: 999,
			});
			while (currentEndDate.isoWeekday() !== momentDay) {
				currentEndDate = addDays(currentEndDate, -1);
			}

			// Calculate the number of events for this day of the week
			const numberOfEvents = calculateNumberOfWeeks(
				currentStartDate.toDate(),
				currentEndDate.toDate(),
				day
			);


			// Create an array of events for this day of the week
			const eventsForDay = Array.from({ length: numberOfEvents }, (_, i) => {
				// Calculate the start date and end date for each event
				const startDate = addDays(currentStartDate.clone(), i * 7);
				startDate.set({
					hour: startTime.hour(),
					minute: startTime.minute(),
				});
				const endDate = moment(startDate).add(duration, 'milliseconds');
				endDate.set({
					hour: endTime.hour(),
					minute: endTime.minute(),
				});
				// Return the formatted start date, end date, and start time as an object
				return {
					startDate: formatDate(startDate),
					endTime: formatTime(endDate),
					startTime: formatTime(startDate),
				};
			});


			//Add the events for this day of the week to the main events array
			events.push(...(eventsForDay as Event[]));
		});

		// sort the events my start date
		events.sort((a, b) => moment(a.startDate).diff(moment(b.startDate)));

		// Append the events to the form
		events.forEach((event) => append(event))
	};

};

