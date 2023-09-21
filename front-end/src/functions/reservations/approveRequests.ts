'use server';

import prisma from '@/lib/prisma';
import { google } from 'googleapis';

import nodemailer from 'nodemailer';
import { OAuth2Client } from 'google-auth-library';
import moment from 'moment-timezone';

export async function approveReservation(id: number) {
  const scopes = ['https://www.googleapis.com/auth/calendar'];

  const oauth2Client = new OAuth2Client({
    clientId: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    redirectUri: process.env.GOOGLE_REDIRECT_URI,
  });

  oauth2Client.setCredentials({
    refresh_token: process.env.GOOGLE_REFRESH_TOKEN,
  });

  const calendar = google.calendar({ version: 'v3', auth: oauth2Client });

  const reservation: any = await prisma.reservation.findUnique({
    where: { id: id },
    include: {
      user: true,
      facility: true,
      category: true,
      reservationdate: true,
    },
  });

  const category = reservation.category.price;

  let totalhours = reservation.reservationdate.reduce(
    (acc: any, reservationdate: any) => {
      const starttime: any = new Date(
        `1970-01-01T${reservationdate.starttime}Z`
      );
      const endtime: any = new Date(`1970-01-01T${reservationdate.endtime}Z`);
      const hours = Math.abs(endtime - starttime) / 36e5;
      return acc + hours;
    },
    0
  );

  totalhours = Math.round(totalhours * 100) / 100;

  let fees = 0;

  if (reservation.facility.building === 'Laurel Stadium') {
    fees = reservation.category.price;
  } else {
    fees = category ? category * totalhours : 0;
  }

  fees = Math.round(fees * 100) / 100;

  let data = {
    summary: `A facility reservation that requires unlocked doors, ${reservation.eventname} , at ${reservation.facility.building}  has been approved`,
    description: `Visit https://facilities.laurel.k12.mt.us/admin/reservations/${reservation.id} to view the details \n \n Additional details: ${reservation.doorsDetails}`,
    department: 'IT',
  };

  let ticket = false;

  if (reservation.doorAccess) {
    ticket = true;
    const formData = JSON.stringify(data);
    await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/jira`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: formData,
    });
  }

  const approvedReservation = await prisma.reservation.update({
    where: {
      id: id,
    },
    data: {
      approved: 'approved',
      totalhours: totalhours,
      fees: fees,
      ticketmade: ticket,
      reservationdate: {
        updateMany: {
          where: {
            reservationid: id,
          },
          data: {
            approved: 'approved',
          },
        },
      },
    },
    include: {
      reservationdate: true,
      facility: true,
    },
  });

  for (const reservationdate of approvedReservation.reservationdate) {
    const startdateTime = moment
      .tz(
        `${reservationdate.startdate} ${reservationdate.starttime}`,
        'America/Denver'
      )
      .toISOString();

    const enddateTime = moment
      .tz(
        `${reservationdate.enddate} ${reservationdate.endtime}`,
        'America/Denver'
      )
      .toISOString();

    const event = {
      summary: approvedReservation.eventname,
      description: approvedReservation.details,
      start: {
        dateTime: startdateTime,
        timeZone: 'America/Denver',
      },
      end: {
        dateTime: enddateTime,
        timeZone: 'America/Denver',
      },
    };
    try {
      const response = await calendar.events.insert({
        calendarId: approvedReservation.facility.googlecalendarid,
        requestBody: event,
      });
    } catch (error) {
      console.error('Failed to create event: ', error);
    }
  }

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_PASSWORD,
    },
  });

  const info = await transporter.sendMail({
    from: '"facility reservation" no_reply@laurel.k12.mt.us',
    to: reservation.user.email,
    subject: 'Your facility reservation has been approved!',
    text: `Your reservation for ${approvedReservation.eventname} has been approved! You can view the details, upload insurance, and view any fees at https://facilities.laurel.k12.mt.us/reservation/${approvedReservation.id}`,
  });

  return approvedReservation;
}

export async function denyReservation(id: number) {
  const deniedReservation = await prisma.reservation.update({
    where: {
      id: id,
    },
    data: {
      approved: 'denied',
      reservationdate: {
        updateMany: {
          where: {
            reservationid: id,
          },
          data: {
            approved: 'denied',
          },
        },
      },
    },
    include: {
      user: true,
      reservationdate: true,
    },
  });

  let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_PASSWORD,
    },
  });

  const info = await transporter.sendMail({
    from: '"facility reservation" no_reply@laurel.k12.mt.us',
    to: deniedReservation.user.email,
    subject: 'Your facility reservation has been denied',
    text: `Your reservation for ${deniedReservation.eventname} has been denied. You can view the details at https://facilities.laurel.k12.mt.us/reservation/${deniedReservation.id} . If you have any questions, please contact the Activities Director at lpsactivities@laurel.k12.mt.us`,
  });
  return deniedReservation;
}
