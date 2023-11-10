'use server';

import { google } from 'googleapis';
import { NextResponse } from 'next/server';
import { GetReservationbyID } from '@/lib/db/queries/reservations';
import oauth2Client from '@/lib/googleAuth';
import moment from 'moment-timezone';

export default async function CreateGoogleEvents(id: Number | BigInt) {
  const scopes = ['https://www.googleapis.com/auth/calendar'];

  oauth2Client.setCredentials({
    refresh_token: process.env.GOOGLE_REFRESH_TOKEN,
  });

  const approvedReservation = await GetReservationbyID.execute({
    id: id as number,
  });

  console.log('approvedReservation', approvedReservation);

  const calendar = google.calendar({ version: 'v3', auth: oauth2Client });
  //@ts-expect-error
  for (const reservationDate of approvedReservation.ReservationDate) {
    const startDateTime = moment
      .tz(
        `${reservationDate.startDate} ${reservationDate.startTime}`,
        'America/Denver'
      )
      .toISOString();

    const endDateTime = moment
      .tz(
        `${reservationDate.endDate} ${reservationDate.endTime}`,
        'America/Denver'
      )
      .toISOString();

    const event = {
      id: reservationDate.gcal_eventid,

      summary: approvedReservation?.eventName,

      description: approvedReservation?.details,
      start: {
        dateTime: startDateTime,
        timeZone: 'America/Denver',
      },
      end: {
        dateTime: endDateTime,
        timeZone: 'America/Denver',
      },
    };
    try {
      console.log('calendar', approvedReservation?.Facility.googleCalendarId);
      const response = await calendar.events.insert({
        calendarId: approvedReservation?.Facility.googleCalendarId as string,
        requestBody: event,
      });
      console.log('re', response);
    } catch (error) {
      console.error('Failed to create event: ', error);

      return NextResponse.json({ response: 500, message: error });
    }
  }
  return NextResponse.json({
    response: 200,
    message: 'google cal event created',
  });
}
