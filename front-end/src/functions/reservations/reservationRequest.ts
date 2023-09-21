//@ts-nocheck
'use server';

import prisma from '@/lib/prisma';
import { IFormInput } from '@/lib/types';
import nodemailer from 'nodemailer';
import moment from 'moment-timezone';

moment.tz.setDefault('America/Denver');

export default async function createReservation(data: IFormInput) {
  let conflicts = false;

  // const existingevents = await prisma.events.findMany({
  //   where: {
  //     start: {
  //       gte: moment(data.startdate),
  //     },
  //   },
  // });

  // for (const event of existingevents) {
  //   if (event.facilityid === parseInt(data.facilityName)) {
  //     if (
  //       moment(event.start).isBetween(
  //         moment(data.startdate),
  //         moment(data.enddate)
  //       )
  //     ) {
  //       conflicts = true;
  //     }
  //   }
  // }

  const reservation = await prisma.reservation.create({
    data: {
      eventname: data.eventname,
      category: {
        connect: {
          id: parseInt(data.category),
        },
      },
      name: data.name,
      conflicts: conflicts,
      people: data.people,
      details: data.details,
      doorAccess: data.doorAccess,
      doorsDetails: data.doorDetails,
      phone: data.phone,
      techsupport: data.techsupport,
      techdetails: data.techdetails,
      facility: {
        connect: {
          id: parseInt(data.facilityName),
        },
      },
      insurance: false,

      user: {
        connect: {
          email: data.email,
        },
      },
    },
    include: {
      user: true,
      facility: true,
      insurancefiles: true,
      category: true,
    },
  });

  for (const event of data.events) {
    await prisma.reservationdate.create({
      data: {
        startdate: moment(event.startdate).format('YYYY-MM-DD'),
        enddate: moment(event.enddate).format('YYYY-MM-DD'),
        starttime: event.starttime,
        endtime: event.endtime,
        reservationid: reservation.id,
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

    if (reservation.facility.building === 'Laurel High School') {
      to =
        'geralyn_hill@laurel.k12.mt.us, lpsactivities@laurel.k12.mt.us, stacy_hall@laurel.k12.mt.us, john_stilson@laurel.k12.mt.us';
    } else if (reservation.facility.building === 'Laurel Middle School') {
      to =
        'justin_klebe@laurel.k12.mt.us, allyson_robertus@laurel.k12.mt.us, geralyn_hill@laurel.k12.mt.us, lpsactivities@laurel.k12.mt.us';
    } else if (reservation.facility.building === 'South Elementary') {
      to =
        'geralyn_hill@laurel.k12.mt.us, lpsactivities@laurel.k12.mt.us, katherine_dawe@laurel.k12.mt.us';
    } else if (reservation.facility.building === 'West Elementary') {
      to =
        'geralyn_hill@laurel.k12.mt.us, lpsactivities@laurel.k12.mt.us, bethany_fuchs@laurel.k12.mt.us';
    } else if (reservation.facility.building === 'Graff Elementary') {
      to =
        'geralyn_hill@laurel.k12.mt.us, lpsactivities@laurel.k12.mt.us, lynne_peterson@laurel.k12.mt.us, sunny_denz@laurel.k12.mt.us';
    } else if (reservation.facility.building === 'Laurel Stadium') {
      to = 'geralyn_hill@laurel.k12.mt.us, lpsactivities@laurel.k12.mt.us';
    } else if (reservation.facility.building === 'Administration Building') {
      to =
        'elliana_kerns@laurel.k12.mt.us, geralyn_hill@laurel.k12.mt.us, lpsactivities@laurel.k12.mt.us';
    } else to = 'geralyn_hill@laurel.k12.mt.us, lpsactivities@laurel.k12.mt.us';

    const info = await transporter.sendMail({
      from: '"facility reservation" no_reply@laurel.k12.mt.us',
      to: to as string,
      subject: 'New facility reservation',
      text: `A new reservation request has been submitted by ${data.name} for ${data.eventname}. You can view the reservation here: https://facilities.laurel.k12.mt.us/admin/reservations/${reservation.id}`,
    });
  }
}
