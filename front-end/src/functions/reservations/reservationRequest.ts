//@ts-nocheck
'use server';

import prisma from '@/lib/prisma';
import { IFormInput } from '@/lib/types';
import nodemailer from 'nodemailer';
import moment from 'moment-timezone';

moment.tz.setDefault('America/Denver');

export default async function createReservation(data: IFormInput) {
  let conflicts = false;

  // const existingEvents = await prisma.events.findMany({
  //   where: {
  //     start: {
  //       gte: moment(data.startDate),
  //     },
  //   },
  // });

  // for (const event of existingEvents) {
  //   if (event.facilityId === parseInt(data.facilityName)) {
  //     if (
  //       moment(event.start).isBetween(
  //         moment(data.startDate),
  //         moment(data.endDate)
  //       )
  //     ) {
  //       conflicts = true;
  //     }
  //   }
  // }

  const reservation = await prisma.reservation.create({
    data: {
      eventName: data.eventName,
      Category: {
        connect: {
          id: BigInt(data.Category),
        },
      },
      name: data.name,
      conflicts: conflicts,
      people: data.people,
      details: data.details,
      doorAccess: data.doorAccess,
      doorsDetails: data.doorDetails,
      phone: data.phone,
      techSupport: data.techSupport,
      techDetails: data.techDetails,
      Facility: {
        connect: {
          id: BigInt(data.facilityName),
        },
      },
      insurance: false,

      User: {
        connect: {
          email: data.email,
        },
      },
    },
    include: {
      User: true,
      Facility: true,
      InsuranceFiles: true,
      Category: true,
    },
  });

  for (const event of data.events) {
    await prisma.reservationDate.create({
      data: {
        startDate: moment(event.startDate).format('YYYY-MM-DD'),
        endDate: moment(event.endDate).format('YYYY-MM-DD'),
        startTime: event.startTime,
        endTime: event.endTime,
        reservationId: reservation.id,
      },
    });
  }

  if (process.env.NODE_ENV === 'production') {
    let transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASSWORD,
      },
    });

    let to = '';

    if (reservation.Facility.building === 'Laurel High School') {
      to =
        'geralyn_hill@laurel.k12.mt.us, lpsactivities@laurel.k12.mt.us, stacy_hall@laurel.k12.mt.us, john_stilson@laurel.k12.mt.us';
    } else if (reservation.Facility.building === 'Laurel Middle School') {
      to =
        'justin_klebe@laurel.k12.mt.us, allyson_robertus@laurel.k12.mt.us, geralyn_hill@laurel.k12.mt.us, lpsactivities@laurel.k12.mt.us';
    } else if (reservation.Facility.building === 'South Elementary') {
      to =
        'geralyn_hill@laurel.k12.mt.us, lpsactivities@laurel.k12.mt.us, katherine_dawe@laurel.k12.mt.us';
    } else if (reservation.Facility.building === 'West Elementary') {
      to =
        'geralyn_hill@laurel.k12.mt.us, lpsactivities@laurel.k12.mt.us, bethany_fuchs@laurel.k12.mt.us';
    } else if (reservation.Facility.building === 'Graff Elementary') {
      to =
        'geralyn_hill@laurel.k12.mt.us, lpsactivities@laurel.k12.mt.us, lynne_peterson@laurel.k12.mt.us, sunny_denz@laurel.k12.mt.us';
    } else if (reservation.Facility.building === 'Laurel Stadium') {
      to = 'geralyn_hill@laurel.k12.mt.us, lpsactivities@laurel.k12.mt.us';
    } else if (reservation.Facility.building === 'Administration Building') {
      to =
        'elliana_kerns@laurel.k12.mt.us, geralyn_hill@laurel.k12.mt.us, lpsactivities@laurel.k12.mt.us';
    } else to = 'geralyn_hill@laurel.k12.mt.us, lpsactivities@laurel.k12.mt.us';

    const info = await transporter.sendMail({
      from: '"Facility Reservation" no_reply@laurel.k12.mt.us',
      to: to as string,
      subject: 'New Facility Reservation',
      text: `A new reservation request has been submitted by ${data.name} for ${data.eventName}. You can view the reservation here: https://facilities.laurel.k12.mt.us/admin/reservations/${reservation.id}`,
    });
  }
}
