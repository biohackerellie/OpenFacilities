import { google } from 'googleapis';
import { OAuth2Client } from 'google-auth-library';
import { NextResponse, NextRequest } from 'next/server';

export async function GET(req: NextRequest, response: NextResponse) {
  const scopes = ['https://www.googleapis.com/auth/calendar.readonly'];

  const calendarId = req.nextUrl.pathname.split('/')[3];

  const oauth2Client = new OAuth2Client({
    clientId: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID,
    clientSecret: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_SECRET,
    redirectUri: process.env.NEXT_PUBLIC_GOOGLE_REDIRECT_URI,
  });

  oauth2Client.setCredentials({
    refresh_token: process.env.NEXT_PUBLIC_GOOGLE_REFRESH_TOKEN,
  });

  const calendar = google.calendar({ version: 'v3', auth: oauth2Client });

  try {
    const twoMonthsAgo = new Date();
    twoMonthsAgo.setMonth(twoMonthsAgo.getMonth() - 2);

    const response = await calendar.events.list({
      calendarId: calendarId,
      timeMin: twoMonthsAgo.toISOString(),
    });

    return NextResponse.json(response.data.items);
  } catch (error) {
    console.error(error);
    return NextResponse.json(error);
  }
}
