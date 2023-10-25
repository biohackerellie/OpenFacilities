import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import { AnyARecord } from 'dns';
import { serializeJSON } from '@/utils/serializeJSON';
import { google } from 'googleapis';
import { OAuth2Client } from 'google-auth-library';
import moment from 'moment-timezone';

export const runtime = 'edge';
export async function GET(
  request: NextRequest,
  { params }: { params: { id: any } }
) {
  const id = BigInt(params.id);

  const res = await prisma.events.findMany({
    where: {
      facilityId: id,
    },
    include: {
      Facility: true,
    },
    cacheStrategy: { swr: 3600, ttl: 3600 },
  });

  return NextResponse.json(serializeJSON(res));
}

export async function POST(
  request: NextRequest,
  { params }: { params: { id: any } }
) {
  const scopes = ['https://www.googleapis.com/auth/calendar'];
  let datecount = 0;
  const oauth2Client = new OAuth2Client({
    clientId: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    redirectUri: process.env.GOOGLE_REDIRECT_URI,
  });

  oauth2Client.setCredentials({
    refresh_token: process.env.GOOGLE_REFRESH_TOKEN,
  });
  const id = params.id;
  const approvedDates = await prisma.reservationDate.findMany({
    where: { reservationId: BigInt(id), approved: 'approved' },
    include: {
      Reservation: {
        include: {
          Facility: true,
        },
      },
    },
    cacheStrategy: { swr: 10, ttl: 10 },
  });

  console.log('approvedDate', approvedDates);

  const calendar = google.calendar({ version: 'v3', auth: oauth2Client });

  for (const approvedDate of approvedDates) {
    const startDateTime = moment
      .tz(
        `${approvedDate.startDate} ${approvedDate.startTime}`,
        'America/Denver'
      )
      .toISOString();

    const endDateTime = moment
      .tz(`${approvedDate.endDate} ${approvedDate.endTime}`, 'America/Denver')
      .toISOString();

    const event = {
      summary: approvedDate.Reservation.eventName,

      description: approvedDate.Reservation.details,
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
        calendarId: approvedDate.Reservation.Facility.googleCalendarId,
        requestBody: event,
      });
      datecount++;
      console.log('re', response, datecount);
    } catch (error) {
      return NextResponse.json({ message: 'error' });
      console.error('Failed to create event: ', error);
    }
    console.log('Event created: ', Response);
  }
  return NextResponse.json({
    status: 200,
    message: datecount + 'google cal events created',
  });
}
