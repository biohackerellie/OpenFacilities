import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import { serializeJSON } from '@/utils/serializeJSON';
import { google } from 'googleapis';
import oauth2Client from '@/lib/googleAuth';

import moment from 'moment-timezone';

export async function POST(request: Request) {
  const scopes = ['https://www.googleapis.com/auth/calendar'];

  oauth2Client.setCredentials({
    refresh_token: process.env.GOOGLE_REFRESH_TOKEN,
  });

  const body = await request.json();

  const approvedDate = await prisma.reservationDate.findUnique({
    where: {
      id: BigInt(body.id),
    },
    include: {
      Reservation: {
        include: {
          Facility: true,
        },
      },
    },
    cacheStrategy: { swr: 10, ttl: 10 },
  });

  console.log('approvedDate', approvedDate);

  const calendar = google.calendar({ version: 'v3', auth: oauth2Client });

  const startDateTime = moment
    .tz(
      `${approvedDate?.startDate} ${approvedDate?.startTime}`,
      'America/Denver'
    )
    .toISOString();

  const endDateTime = moment
    .tz(`${approvedDate?.endDate} ${approvedDate?.endTime}`, 'America/Denver')
    .toISOString();

  const event = {
    id: approvedDate?.gcal_eventid,
    summary: approvedDate?.Reservation.eventName,

    description: approvedDate?.Reservation.details,
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
      calendarId: approvedDate?.Reservation.Facility.googleCalendarId,
      requestBody: event,
    });
    console.log('re', response);
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: 'error' });
  }
  return NextResponse.json({
    status: 200,
    message: 'google cal events created',
  });
}
