import { NextRequest, NextResponse } from 'next/server';
import { EventsByFacilityIdQuery } from '@/lib/db/queries/events';
import { GetApprovedDates } from '@/lib/db/queries/reservations';
import { serializeJSON } from '@/utils/serializeJSON';
import { google } from 'googleapis';
import oauth2Client from '@/lib/googleAuth';
import moment from 'moment-timezone';

export async function GET(
  request: NextRequest,
  { params }: { params: { id: any } }
) {
  const id = params.id;

  const res = await EventsByFacilityIdQuery.execute({ facilityId: id });

  return NextResponse.json(serializeJSON(res));
}

export async function POST(
  request: NextRequest,
  { params }: { params: { id: any } }
) {
  const scopes = ['https://www.googleapis.com/auth/calendar'];
  let datecount = 0;

  oauth2Client.setCredentials({
    refresh_token: process.env.GOOGLE_REFRESH_TOKEN,
  });
  const id = params.id;
  const approvedDates = await GetApprovedDates.execute({ reservationId: id });

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
    } catch (error) {
      return NextResponse.json({ message: 'error' });
      console.error('Failed to create event: ', error);
    }
  }
  return NextResponse.json({
    status: 200,
    message: datecount + 'google cal events created',
  });
}
