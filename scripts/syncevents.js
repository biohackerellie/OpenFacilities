const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const moment = require('moment-timezone');
const { google } = require('googleapis');
const { OAuth2Client } = require('google-auth-library');
require('dotenv').config();

async function linkResDates() {
	const today = new Date();
	today.setHours(0, 0, 0, 0);

	let datecount = 0;
	const oauth2Client = new OAuth2Client({
		clientId: process.env.GOOGLE_CLIENT_ID,
		clientSecret: process.env.GOOGLE_CLIENT_SECRET,
		redirectUri: process.env.GOOGLE_REDIRECT_URI,
	});
	oauth2Client.setCredentials({
		refresh_token: process.env.GOOGLE_REFRESH_TOKEN,
	});

	const approvedDates = await prisma.reservationDate.findMany({
		where: {
			gcal_eventid: null,
			approved: 'approved',
			startDate: {
				gte: today.toISOString().split('T')[0],
			},
		},
		include: {
			Reservation: {
				include: {
					Facility: true,
				},
			},
		},
	});
	console.log('approvedDate', approvedDates);
	let dates = approvedDates.count;
	console.log('dates', dates);
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
			await calendar.events.insert({
				calendarId: approvedDate.Reservation.Facility.googleCalendarId,
				requestBody: event,
			});
			datecount++;
			console.log('datecount', datecount);
		} catch (error) {
			console.log('failed to create event: ', error);
		}
	}
}

linkResDates()
	.catch((e) => {
		console.log('An error occurred:', e);
	})
	.finally(console.log('All done'));
