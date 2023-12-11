import { NextResponse } from 'next/server';
import { OAuth2Client } from 'google-auth-library';
import { google } from 'googleapis';

export async function GET(request: Request, response: NextResponse) {
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
      calendarId:
        'c_a55b94eb4dd05e5dd936dd548d434d6a25c2694efe67224e3eff10205d2fb82b@group.calendar.google.com',
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
