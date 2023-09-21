'use client';
import moment from 'moment-timezone';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
const MySwal = withReactContent(Swal);

export function swallDates() {
  return (dates: any[]) => {
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
  };
}

export function SwallButton({ reservation }: any) {
  const handleDateClick = swallDates();
  return (dates: any[]) => {
    <button onClick={() => handleDateClick(reservation.reservationdate)}>
      {`${reservation.reservationdate[0].startdate} - ${reservation.reservationdate[0].enddate}`}{' '}
    </button>;
  };
}
