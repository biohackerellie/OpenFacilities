const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const fetch = require('node-fetch');
const moment = require('moment-timezone');
require('dotenv').config();

async function main() {
  const facilities = await prisma.facility.findMany();
  const allevents = [];
  for (const facility of facilities) {
    try {
      const currentevents = await prisma.events.findMany({
        where: { facilityid: facility.id },
        select: { id: true },
      });

      const currents = currentevents.map((event) => event.id);

      const result = await fetch(
        `https://facilities.laurel.k12.mt.us/api/calendars/${facility.googlecalendarid}`
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
        const fetchedevents = data
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
                  `event ${event.summary} at ${event.location} does not have a valid start and end time.`
                );
                return null;
              }
              return {
                id: event.id,
                title: event.summary,
                start: start,
                end: end,
                location: event.location,
                recurring: event.recurring,
              };
            } else {
              console.warn(
                `event ${event.summary} at ${event.location} does not have a start and end property.`
              );
              return null;
            }
          })
          .filter((event) => event !== null);

        const fetcheds = fetchedevents.map((event) => event.id);

        const eventsToRemove = currents.filter((id) => !fetcheds.includes(id));

        for (const id of eventsToRemove) {
          await prisma.events.delete({ where: { id } });
        }

        for (const event of fetchedevents) {
          const existingevent = await prisma.events.findUnique({
            where: { id: event.id },
          });
          if (!existingevent) {
            await prisma.events.create({
              data: {
                id: event.id,
                title: event.title,
                start: event.start,
                end: event.end,
                location: event.location,
                recurring: event.recurring,
                facilityid: facility.id,
              },
            });
          }
        }
        allevents.push(...fetchedevents);
      }
    } catch (error) {
      console.error(error);
    }
  }
}

main().catch((error) => {
  throw error;
});
