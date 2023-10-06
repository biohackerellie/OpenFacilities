import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import { serializeJSON } from '@/utils/serializeJSON';
import { google } from 'googleapis';

import { OAuth2Client } from 'google-auth-library';
import moment from 'moment-timezone';

export async function GET(request: Request) {
  const res = await prisma.events.findMany({
    include: {
      Facility: true,
    },
    cacheStrategy: { swr: 3600, ttl: 3600 },
  });

  return NextResponse.json(serializeJSON(res));
}

export async function POST(request: Request) {
  const scopes = ['https://www.googleapis.com/auth/calendar'];

  const oauth2Client = new OAuth2Client({
    clientId: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    redirectUri: process.env.GOOGLE_REDIRECT_URI,
  });

  oauth2Client.setCredentials({
    refresh_token: process.env.GOOGLE_REFRESH_TOKEN,
  });

  const body = await request.json();

  const approvedReservation = await prisma.reservation.findUnique({
    where: { id: body.id },
    include: {
      Facility: true,
      ReservationDate: true,
    },
    cacheStrategy: { swr: 10, ttl: 10 },
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
      //@ts-expect-error
      summary: approvedReservation.eventName,
      //@ts-expect-error
      description: approvedReservation.details,
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
        //@ts-expect-error
        calendarId: approvedReservation.Facility.googleCalendarId,
        requestBody: event,
      });
      console.log('re', response);
    } catch (error) {
      return NextResponse.json({ message: 'error' });
      console.error('Failed to create event: ', error);
    }
    console.log('Event created: ', Response);
  }
  return NextResponse.json({
    status: 200,
    message: 'google cal event created',
  });
}
