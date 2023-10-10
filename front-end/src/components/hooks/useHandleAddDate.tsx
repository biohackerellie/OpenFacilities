import { FieldArrayMethodProps } from 'react-hook-form';
import useCalculateNumberOfEvents from './useCalculateNumberOfEvents';
import moment from 'moment-timezone';

moment.tz.setDefault('America/Denver');

export default function useHandleAddDate(
  append: {
    (
      value:
        | {
            startDate: moment.Moment;
            endDate: moment.Moment;
            startTime: moment.Moment;
            endTime: moment.Moment;
          }
        | {
            startDate: moment.Moment;
            endDate: moment.Moment;
            startTime: moment.Moment;
            endTime: moment.Moment;
          }[],
      options?: FieldArrayMethodProps | undefined
    ): void;
    (arg0: any): void;
  },
  hideModal: { (): void; (): void }
) {
  const calculateNumberOfWeeks = useCalculateNumberOfEvents();
  const formatDate = (date: moment.Moment) => {
    return date.format('YYYY-MM-DD');
  };

  return (data: {
    startDate: string | number | moment.Moment;
    endDate: string | number | moment.Moment;
    startTime: { split: (arg0: string) => number[] };
    endTime: { split: (arg0: string) => number[] };
    dayOfWeek: any[];
    repeatUntil: string | number | moment.Moment;
  }) => {
    const addDays = (date: moment.Moment, days: number) => {
      return date.clone().add(days, 'days');
    };

    const startDate = moment(data.startDate);
    const endDate = moment(data.endDate);
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

    startDate.set({
      hour: startTime.hour(),
      minute: startTime.minute(),
    });

    endDate.set({
      hour: endTime.hour(),
      minute: endTime.minute(),
    });

    const duration = moment.duration(endTime.diff(startTime)).asMilliseconds();

    const daysOfWeek = data.dayOfWeek.map((day: any) => {
      return parseInt(day.value);
    });

    const formatTime = (date: moment.Moment) => {
      return date.format('HH:mm');
    };

    const events: {
      startDate: string;
      endDate: string;
      endTime: string;
      startTime: string;
    }[] = [];

    daysOfWeek.forEach((day) => {
      let currentStartDate = moment(data.startDate);
      while (currentStartDate.isoWeekday() !== day) {
        currentStartDate = addDays(currentStartDate, 1);
      }

      if (currentStartDate > moment(data.startDate)) {
        currentStartDate = moment(data.startDate);
      }

      let currentEndDate = moment(data.repeatUntil);
      currentEndDate.set({
        hour: 23,
        minute: 59,
        second: 59,
        millisecond: 999,
      });
      while (currentEndDate.isoWeekday() !== day) {
        currentEndDate = addDays(currentEndDate, -1);
      }

      const numberOfEvents = calculateNumberOfWeeks(
        currentStartDate.toDate(),
        currentEndDate.toDate(),
        day
      );

      Array.from({ length: numberOfEvents }, (_, i) => {
        const startDate = addDays(currentStartDate, i * 7);
        startDate.set({
          hour: startTime.hour(),
          minute: startTime.minute(),
        });

        if (startDate > moment(data.repeatUntil)) {
          return;
        }

        const endDate = moment(startDate).add(duration, 'milliseconds');
        endDate.set({
          hour: endTime.hour(),
          minute: endTime.minute(),
        });

        events.push({
          startDate: formatDate(startDate),
          endDate: formatDate(endDate),
          endTime: formatTime(endDate),
          startTime: formatTime(startDate),
        });
      });
    });

    events.sort((a, b) => moment(a.startDate).diff(moment(b.startDate)));

    events.forEach((event) => append(event));

    hideModal();
  };
}
