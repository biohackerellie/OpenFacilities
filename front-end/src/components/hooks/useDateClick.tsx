import React from 'react';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import moment from 'moment-timezone';

export default function useDateClick(dates: any[]) {
  const MySwal = withReactContent(Swal);

  const datesString = dates
    .map((date) => {
      const start = moment.tz(
        date.startdate + ' ' + date.starttime,
        'America/Denver'
      );
      const end = moment.tz(
        date.enddate + ' ' + date.endtime,
        'America/Denver'
      );
      return `${date.startdate} ${start.format('h:mm a')} -  ${end.format(
        'h:mm a'
      )}`;
    })
    .join('<br>');
  MySwal.fire({
    title: 'Dates',
    html: datesString,
    confirmButtonText: 'Close',
  });
  return {
    datesString,
    MySwal,
  };
}
