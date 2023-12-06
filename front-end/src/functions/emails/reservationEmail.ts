'use server';

type emailData = {
  to: string;
  message: string;
  subject: string;
};

export default async function reservationEmail(data: emailData) {
  try {
    await fetch(`${process.env.NEXT_PUBLIC_EMAIL_API}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        key: process.env.EMAIL_API_KEY,
        to: data.to as string,
        from: 'ExampleSchool Facility Rental',
        subject: data.subject as string,
        html: `${data.message}`,
      }),
    });
    return Response.json({ ok: true, status: 200 });
  } catch (error) {
    return Response.json({ ok: false, status: 500, body: error });
  }
}

type data = {
  name: string;
  eventName: string;
  reservationId: number | bigint;
  building?: string;
};

export async function newReservationEmail(data: data) {
  let to = '';

  if (data.building === 'ExampleSchool High School') {
    to = `${process.env.BUILDING_ADMINS}`;
  } else if (data.building === 'ExampleSchool Middle School') {
    to = `${process.env.BUILDING_ADMINS}`;
  } else if (data.building === 'South Elementary') {
    to = `${process.env.BUILDING_ADMINS}`;
  } else if (data.building === 'West Elementary') {
    to = `${process.env.BUILDING_ADMINS}`;
  } else if (data.building === 'Graff Elementary') {
    to = `${process.env.BUILDING_ADMINS}`;
  } else if (data.building === 'ExampleSchool Stadium') {
    to = `${process.env.BUILDING_ADMINS}`;
  } else if (data.building === 'Administration Building') {
    to = `${process.env.BUILDING_ADMINS}`;
  } else to = `${process.env.BUILDING_ADMINS}`;

  try {
    await fetch(`${process.env.NEXT_PUBLIC_EMAIL_API}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        key: process.env.EMAIL_API_KEY,
        to: to as string,
        from: 'Facility Rental',
        subject: 'New Facility Reservation',
        html: `<h1> New Facility Reservation </h1> <p>A new reservation request has been submitted by ${data.name} for ${data.eventName}. You can view the reservation here: https://facilities.epklabs.com/reservation/${data.reservationId}</p>`,
      }),
    });
  } catch (error) {
    throw new Error('Error sending email');
  }
}
