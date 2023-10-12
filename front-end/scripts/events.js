const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const fetch = require('node-fetch');
const moment = require('moment-timezone');
require('dotenv').config();

async function main() {
  const facilities = await prisma.facility.findMany();
  const allEvents = [];
  for (const facility of facilities) {
    try {
      const currentEvents = await prisma.events.findMany({
        where: { facilityId: facility.id },
        select: { id: true },
      });

      const currentEventIds = currentEvents.map((event) => event.id);

      const result = await fetch(
        `https://open-facilities/api/calendars/${facility.googleCalendarId}`
      );
      if (!result.ok) {
        console.error(
          `Could not fetch events for facility ${facility.name} at ${facility.building}.`
        );
        console.error(await result.text());
        continue;
      }
      const data = await result.json();

      if (data) {
        const fetchedEvents = data
          .map((event) => {
            let start, end;
            if (event.start && event.end) {
              if (event.start.dateTime && event.end.dateTime) {
                start = moment(event.start.dateTime)
                  .tz('America/Denver')
                  .toDate();
                end = moment(event.end.dateTime).tz('America/Denver').toDate();
              } else if (event.start.date && event.end.date) {
                start = moment(event.start.date)
                  .startOf('day')
                  .tz('America/Denver')
                  .toDate();
                end = moment(event.end.date)
                  .endOf('day')
                  .tz('America/Denver')
                  .toDate();
              } else {
                console.warn(
                  `Event ${event.summary} at ${event.location} does not have a valid start and end time.`
                );
                return null;
              }
              return {
                id: event.id,
                title: event.summary,
                start: start,
                end: end,
                location: event.location,
                recurringEventId: event.recurringEventId,
              };
            } else {
              console.warn(
                `Event ${event.summary} at ${event.location} does not have a start and end property.`
              );
              return null;
            }
          })
          .filter((event) => event !== null);

        const fetchedEventIds = fetchedEvents.map((event) => event.id);

        const eventsToRemove = currentEventIds.filter(
          (id) => !fetchedEventIds.includes(id)
        );

        for (const id of eventsToRemove) {
          await prisma.events.delete({ where: { id } });
        }

        for (const event of fetchedEvents) {
          const existingEvent = await prisma.events.findUnique({
            where: { id: event.id },
          });
          if (!existingEvent) {
            await prisma.events.create({
              data: {
                id: event.id,
                title: event.title,
                start: event.start,
                end: event.end,
                location: event.location,
                recurringEventId: event.recurringEventId,
                facilityId: facility.id,
              },
            });
          }
        }
        allEvents.push(...fetchedEvents);
      }
    } catch (error) {
      console.error(error);
    }
  }
}

main().catch((error) => {
  throw error;
});
