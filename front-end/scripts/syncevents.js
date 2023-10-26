const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const moment = require('moment-timezone');

async function linkResDates() {
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  console.log('Fetching ReservationDates without gcal_eventid...');
  const reservationDates = await prisma.reservationDate.findMany({
    where: {
      gcal_eventid: null,
      approved: {
        in: ['approved', 'pending'],
      },
      startDate: {
        gte: today.toISOString().split('T')[0],
      },
    },
    include: {
      Reservation: true,
    },
  });

  console.log('Fetching all Events...');
  const events = await prisma.events.findMany({
    where: {
      start: {
        gte: today,
      },
    },
  });

  console.log('Starting the comparison...');
  for (const rDate of reservationDates) {
    let foundMatch = false;
    for (const event of events) {
      const reservationStart = moment
        .tz(
          `${rDate.startDate} ${rDate.startTime}`,
          'YYYY-MM-DD HH:mm',
          'America/Denver' // Mountain Standard Time
        )
        .utc();
      const eventStart = moment(event.start).utc();
      if (
        rDate.Reservation.eventName === event.title &&
        reservationStart.isSame(eventStart)
      ) {
        console.log(
          `Found a match for ReservationDate ID ${rDate.id} with Event ID ${event.id}. Updating...`
        );
        await prisma.reservationDate.update({
          where: { id: rDate.id },
          data: { gcal_eventid: event.id },
        });
        console.log(`Updated ReservationDate ID ${rDate.id}.`);
        foundMatch = true;
        break;
      }
    }
    if (!foundMatch) {
      console.log(
        `No match found for ReservationDate ID ${rDate.id} for the ${rDate.Reservation.eventName} reservation.`
      );
    }
  }
}

linkResDates()
  .catch((e) => {
    console.log('An error occurred:', e);
  })
  .finally(async () => {
    await prisma.$disconnect();
    console.log('Disconnected from database.');
  });
