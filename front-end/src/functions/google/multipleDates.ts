'use server';

import { google } from 'googleapis';
import { NextResponse } from 'next/server';
import { GetReservationbyID } from '@/lib/db/queries/reservations';

import generateId from '../calculations/generate-id';
import moment from 'moment-timezone';
import { OAuth2Client } from 'google-auth-library';

export default async function CreateGoogleEvents(id: number | bigint) {
  const scopes = ['https://www.googleapis.com/auth/calendar'];
  const oauth2Client = new OAuth2Client({
    clientId: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    redirectUri: process.env.GOOGLE_REDIRECT_URI,
  });

  oauth2Client.setCredentials({
    refresh_token: process.env.GOOGLE_REFRESH_TOKEN,
  });

  const approvedReservation = await GetReservationbyID.execute({
    id: id as number,
  });

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
      const response = await calendar.events.insert({
        calendarId: approvedReservation?.Facility.googleCalendarId!,
        requestBody: event,
      });
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
