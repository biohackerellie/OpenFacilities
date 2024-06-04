import { SortedEventsQuery } from '@/lib/db/queries/events';
import type { NextRequest} from 'next/server';
import { NextResponse } from 'next/server';
import { calendarIDs } from '@/lib/types/constants';
import { OAuth2Client } from 'google-auth-library';
import { google } from 'googleapis';
import moment from 'moment-timezone';
import { time } from 'console';

export async function GET(req: NextRequest) {
  return NextResponse.error();
}

export async function POST(req: NextRequest) {
  const body = await req.json();
  if (!body) {
    return NextResponse.json({
      ok: false,
      status: 400,
      message: 'Bad Request',
    });
  }
  const bodyKey = body.key;
  if (bodyKey !== process.env.EMAIL_API_KEY) {
    return NextResponse.json({
      ok: false,
      status: 401,
      message: 'Unauthorized',
    });
  }

  const oauth2Client = new OAuth2Client({
    clientId: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    redirectUri: process.env.GOOGLE_REDIRECT_URI,
  });
  oauth2Client.setCredentials({
    refresh_token: process.env.GOOGLE_REFRESH_TOKEN,
  });

  const currentDate = moment().tz('America/Denver').startOf('day').toDate();
  const sevenDaysFromNow = moment()
    .tz('America/Denver')
    .startOf('day')
    .add(7, 'days')
    .toDate();

  const calendar = google.calendar({ version: 'v3', auth: oauth2Client });
  const schools = [
    {
      name: 'Laurel High School',
      email:
        'lillian_kooistra@laurel.k12.mt.us, lpsactivities@laurel.k12.mt.us, elliana_kerns@laurel.k12.mt.us, stacy_hall@laurel.k12.mt.us, john_stilson@laurel.k12.mt.us, tamara_raty@laurel.k12.mt.us, wendi_clark@laurel.k12.mt.us, paul_damjanovich@laurel.k12.mt.us, austin_anderson@laurel.k12.mt.us, mischele_miller@laurel.k12.mt.us, hsmessage@laurel.k12.mt.us  ',
    },
    {
      name: 'Laurel Middle School',
      email:
        'lillian_kooistra@laurel.k12.mt.us, lpsactivities@laurel.k12.mt.us, justin_klebe@laurel.k12.mt.us, allyson_robertus@laurel.k12.mt.us, amanda_nelson@laurel.k12.mt.us, gayle_wisecup@laurel.k12.mt.us, sam_spitzer@laurel.k12.mt.us, nigel_oloughlin@laurel.k12.mt.us ',
    },
    {
      name: 'Graff Elementary',
      email:
        'lillian_kooistra@laurel.k12.mt.us, lpsactivities@laurel.k12.mt.us, lynne_peterson@laurel.k12.mt.us, roberto_holloway@laurel.k12.mt.us ',
    },
    {
      name: 'West Elementary',
      email:
        'lillian_kooistra@laurel.k12.mt.us, lpsactivities@laurel.k12.mt.us, bethany_fuchs@laurel.k12.mt.us, marla_adams@laurel.k12.mt.us, ',
    },
    {
      name: 'South Elementary',
      email:
        'lillian_kooistra@laurel.k12.mt.us, lpsactivities@laurel.k12.mt.us, tom_williams@laurel.k12.mt.us, katherine_dawe@laurel.k12.mt.us ',
    },
    {
      name: 'Laurel Stadium',
      email:
        'lillian_kooistra@laurel.k12.mt.us, lpsactivities@laurel.k12.mt.us, stacy_hall@laurel.k12.mt.us, john_stilson@laurel.k12.mt.us, tamara_raty@laurel.k12.mt.us, wendi_clark@laurel.k12.mt.us, paul_damjanovich@laurel.k12.mt.us, austin_anderson@laurel.k12.mt.us, mischele_miller@laurel.k12.mt.us, hsmessage@laurel.k12.mt.us',
    },
  ] as const;

  //match the school name from the school array to the calendarIDs array

  for (const school of schools) {
    const schoolBuilding = calendarIDs.find((building) => {
      return building.school === school.name;
    });

    const events = await calendar.events.list({
      calendarId: schoolBuilding?.calendar,
      maxResults: 100,
      singleEvents: true,
      orderBy: 'startTime',
      timeMin: currentDate.toISOString(),
      timeMax: sevenDaysFromNow.toISOString(),
    });
    console.log(events.data.items);
    if (events.data.items) {
      const eventsInMST = events.data.items.map((event) => {
        return {
          ...event,
          start: moment(event.start?.dateTime || event.start?.date)
            .tz('America/Denver')
            .format('dddd, MMMM Do, h:mm a'),
          end: moment(event.end?.dateTime || event.end?.date)
            .tz('America/Denver')
            .format('h:mm a'),
          location: event.location || 'No Location Provided',
        };
      });

      const eventList = eventsInMST
        .map(
          (event) =>
            `<li>"${event.summary}" at ${event.location} on ${event.start} to ${event.end}</li>`
        )
        .join('');

      try {
        await fetch(`${process.env.NEXT_PUBLIC_EMAIL_API}`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            key: process.env.EMAIL_API_KEY,
            to: school.email,
            from: 'Weekly Events',
            subject: 'Weekly Events',
            html: `<h1>Here are the events happening in your building this week: </h1><ul>${eventList}</ul>`,
          }),
        });
      } catch (error) {
        return NextResponse.json({
          ok: false,
          status: 500,
          message: 'Internal Server Error',
        });
      }
    }
    return NextResponse.json({
      ok: true,
      status: 200,
      message: 'Success',
    });
  }
}
