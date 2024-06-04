import type { NextRequest} from 'next/server';
import { NextResponse } from 'next/server';
import { EventsByFacilityIdQuery } from '@/lib/db/queries/events';
import { FacilityQuery } from '@/lib/db/queries/facility';
import { GetApprovedDates } from '@/lib/db/queries/reservations';
import { serializeJSON } from '@/utils/serializeJSON';
import { google } from 'googleapis';
import { OAuth2Client } from 'google-auth-library';

import moment from 'moment-timezone';

export async function GET(
  request: NextRequest,
  { params }: { params: { id: any } }
) {
  const id = params.id;

  const res = await FacilityQuery.execute({ id: id });

  const calID = res?.googleCalendarId;

  const oauth2Client = new OAuth2Client({
    clientId: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    redirectUri: process.env.GOOGLE_REDIRECT_URI,
  });
  oauth2Client.setCredentials({
    refresh_token: process.env.GOOGLE_REFRESH_TOKEN,
  });
  const calendar = google.calendar({ version: 'v3', auth: oauth2Client });
  try {
    const twoMonthsAgo = new Date();
    twoMonthsAgo.setMonth(twoMonthsAgo.getMonth() - 2);

    const response = await calendar.events.list({
      calendarId: calID,
      maxResults: 1000,
      singleEvents: true,

      orderBy: 'startTime',
    });
    if (response.data.items) {
      const events = response.data.items.map((e) => {
        const start = e.start?.dateTime || e.start?.date;
        const end = e.end?.dateTime || e.end?.date;
        return {
          gLink: e.htmlLink,
          description: e.description,
          location: e.location,
          start,
          end,
          title: e.summary,
          meta: e,
        };
      });
      return NextResponse.json(events);
    }
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: 'error' }, { status: 500 });
  }
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
