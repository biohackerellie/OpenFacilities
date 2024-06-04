'use server';

interface emailData {
  to: string;
  message: string;
  subject: string;
}

export default async function reservationEmail(data: emailData) {
  try {
    await fetch(`${process.env.NEXT_PUBLIC_EMAIL_API}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        key: process.env.EMAIL_API_KEY,
        to: data.to,
        from: 'Laurel Facility Rental',
        subject: data.subject,
        html: `${data.message}`,
      }),
    });
    return Response.json({ ok: true, status: 200 });
  } catch (error) {
    return Response.json({ ok: false, status: 500, body: error });
  }
}

interface data {
  name: string;
  eventName: string;
  reservationId: number | bigint;
  building?: string;
}

export async function newReservationEmail(data: data) {
  let to = '';

  if (data.building === 'Laurel High School') {
    to =
      'geralyn_hill@laurel.k12.mt.us, lpsactivities@laurel.k12.mt.us, stacy_hall@laurel.k12.mt.us, john_stilson@laurel.k12.mt.us';
  } else if (data.building === 'Laurel Middle School') {
    to =
      'justin_klebe@laurel.k12.mt.us, allyson_robertus@laurel.k12.mt.us, geralyn_hill@laurel.k12.mt.us, lpsactivities@laurel.k12.mt.us';
  } else if (data.building === 'South Elementary') {
    to =
      'geralyn_hill@laurel.k12.mt.us, lpsactivities@laurel.k12.mt.us, katherine_dawe@laurel.k12.mt.us';
  } else if (data.building === 'West Elementary') {
    to =
      'geralyn_hill@laurel.k12.mt.us, lpsactivities@laurel.k12.mt.us, bethany_fuchs@laurel.k12.mt.us';
  } else if (data.building === 'Graff Elementary') {
    to =
      'geralyn_hill@laurel.k12.mt.us, lpsactivities@laurel.k12.mt.us, lynne_peterson@laurel.k12.mt.us, sunny_denz@laurel.k12.mt.us';
  } else if (data.building === 'Laurel Stadium') {
    to = 'geralyn_hill@laurel.k12.mt.us, lpsactivities@laurel.k12.mt.us';
  } else if (data.building === 'Administration Building') {
    to =
      'elliana_kerns@laurel.k12.mt.us, geralyn_hill@laurel.k12.mt.us, lpsactivities@laurel.k12.mt.us';
  } else to = 'geralyn_hill@laurel.k12.mt.us, lpsactivities@laurel.k12.mt.us';

  try {
    await fetch(`${process.env.NEXT_PUBLIC_EMAIL_API}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        key: process.env.EMAIL_API_KEY,
        to: to,
        from: 'Facility Rental',
        subject: 'New Facility Reservation',
        html: `<h1> New Facility Reservation </h1> <p>A new reservation request has been submitted by ${data.name} for ${data.eventName}. You can view the reservation here: https://facilities.laurel.k12.mt.us/reservation/${data.reservationId}</p>`,
      }),
    });
  } catch (error) {
    throw new Error('Error sending email');
  }
}
