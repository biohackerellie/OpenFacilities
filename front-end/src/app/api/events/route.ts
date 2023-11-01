import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import { serializeJSON } from '@/utils/serializeJSON';
import { google } from 'googleapis';

import oauth2Client from '@/lib/googleAuth';
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

  oauth2Client.setCredentials({
    refresh_token: process.env.GOOGLE_REFRESH_TOKEN,
  });

  const body = await request.json();

  const approvedReservation = await prisma.reservation.findUnique({
    where: { id: BigInt(body.id) },
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
      await fetch(process.env.NEXT_PUBLIC_EMAIL_API as string, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          key: process.env.EMAIL_API_KEY,
          to: 'ellie@epklabs.com',
          from: 'Yur Mom',
          subject: 'Error creating event',
          html: `${error}`,
        }),
      });
      return NextResponse.error;
    }
  }
  return NextResponse.json({
    status: 200,
    message: 'google cal event created',
  });
}
