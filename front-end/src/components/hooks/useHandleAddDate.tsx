import { FieldArrayMethodProps } from 'react-hook-form';
import useCalculateNumberOfevents from './useCalculateNumberOfevents';
import moment from 'moment-timezone';

moment.tz.setDefault('America/Denver');

export default function useHandleAddDate(
  append: {
    (
      value:
        | {
            startdate: moment.Moment;
            enddate: moment.Moment;
            starttime: moment.Moment;
            endtime: moment.Moment;
          }
        | {
            startdate: moment.Moment;
            enddate: moment.Moment;
            starttime: moment.Moment;
            endtime: moment.Moment;
          }[],
      options?: FieldArrayMethodProps | undefined
    ): void;
    (arg0: any): void;
  },
  hideModal: { (): void; (): void }
) {
  const calculateNumberOfWeeks = useCalculateNumberOfevents();
  const formatDate = (date: moment.Moment) => {
    return date.format('YYYY-MM-DD');
  };

  return (data: {
    startdate: string | number | moment.Moment;
    enddate: string | number | moment.Moment;
    starttime: { split: (arg0: string) => number[] };
    endtime: { split: (arg0: string) => number[] };
    dayOfWeek: any[];
    repeatUntil: string | number | moment.Moment;
  }) => {
    const addDays = (date: moment.Moment, days: number) => {
      return date.clone().add(days, 'days');
    };

    const startdate = moment(data.startdate);
    const enddate = moment(data.enddate);
    const starttime = moment();
    starttime.set({
      hour: data.starttime.split(':')[0],
      minute: data.starttime.split(':')[1],
    });

    const endtime = moment();
    endtime.set({
      hour: data.endtime.split(':')[0],
      minute: data.endtime.split(':')[1],
    });

    startdate.set({
      hour: starttime.hour(),
      minute: starttime.minute(),
    });

    enddate.set({
      hour: endtime.hour(),
      minute: endtime.minute(),
    });

    const duration = moment.duration(endtime.diff(starttime)).asMilliseconds();

    const daysOfWeek = data.dayOfWeek.map((day: any) => {
      return parseInt(day.value);
    });

    const formatTime = (date: moment.Moment) => {
      return date.format('HH:mm');
    };

    const events: {
      startdate: string;
      enddate: string;
      endtime: string;
      starttime: string;
    }[] = [];

    daysOfWeek.forEach((day) => {
      let currentStartDate = moment(data.startdate);
      while (currentStartDate.isoWeekday() !== day) {
        currentStartDate = addDays(currentStartDate, 1);
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

      const numberOfevents = calculateNumberOfWeeks(
        currentStartDate.toDate(),
        currentEndDate.toDate(),
        day
      );

      Array.from({ length: numberOfevents }, (_, i) => {
        const startdate = addDays(currentStartDate, i * 7);
        startdate.set({
          hour: starttime.hour(),
          minute: starttime.minute(),
        });

        if (startdate > moment(data.repeatUntil)) {
          return;
        }

        const enddate = moment(startdate).add(duration, 'milliseconds');
        enddate.set({
          hour: endtime.hour(),
          minute: endtime.minute(),
        });

        events.push({
          startdate: formatDate(startdate),
          enddate: formatDate(enddate),
          endtime: formatTime(enddate),
          starttime: formatTime(startdate),
        });
      });
    });

    events.sort((a, b) => moment(a.startdate).diff(moment(b.startdate)));

    events.forEach((event) => append(event));

    hideModal();
  };
}
