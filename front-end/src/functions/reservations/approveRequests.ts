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
      User: true,
      Facility: true,
      Category: true,
      ReservationDate: true,
    },
  });

  const category = reservation.Category.price;

  let totalHours = reservation.ReservationDate.reduce(
    (acc: any, reservationDate: any) => {
      const startTime: any = new Date(
        `1970-01-01T${reservationDate.startTime}Z`
      );
      const endTime: any = new Date(`1970-01-01T${reservationDate.endTime}Z`);
      const hours = Math.abs(endTime - startTime) / 36e5;
      return acc + hours;
    },
    0
  );

  totalHours = Math.round(totalHours * 100) / 100;

  let fees = 0;

  if (reservation.Facility.building === 'Laurel Stadium') {
    fees = reservation.Category.price;
  } else {
    fees = category ? category * totalHours : 0;
  }

  fees = Math.round(fees * 100) / 100;

  let data = {
    summary: `A Facility Reservation that requires unlocked doors, ${reservation.eventName} , at ${reservation.Facility.building}  has been approved`,
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
      totalHours: totalHours,
      fees: fees,
      ticketMade: ticket,
      ReservationDate: {
        updateMany: {
          where: {
            reservationId: id,
          },
          data: {
            approved: 'approved',
          },
        },
      },
    },
    include: {
      ReservationDate: true,
      Facility: true,
    },
  });

  for (const reservationDate of approvedReservation.ReservationDate) {
    const startDateTime = moment
      .tz(
        `${reservationDate.startDate} ${reservationDate.startTime}`,
        'America/Denver'
      )
      .toISOString();

    const endDateTime = moment
      .tz(
        `${reservationDate.endDate} ${reservationDate.endTime}`,
        'America/Denver'
      )
      .toISOString();

    const event = {
      summary: approvedReservation.eventName,
      description: approvedReservation.details,
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
      const response = await calendar.events.insert({
        calendarId: approvedReservation.Facility.googleCalendarId,
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
    from: '"Facility Reservation" no_reply@laurel.k12.mt.us',
    to: reservation.User.email,
    subject: 'Your Facility Reservation has been approved!',
    text: `Your reservation for ${approvedReservation.eventName} has been approved! You can view the details, upload insurance, and view any fees at https://facilities.laurel.k12.mt.us/reservation/${approvedReservation.id}`,
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
      ReservationDate: {
        updateMany: {
          where: {
            reservationId: id,
          },
          data: {
            approved: 'denied',
          },
        },
      },
    },
    include: {
      User: true,
      ReservationDate: true,
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
    from: '"Facility Reservation" no_reply@laurel.k12.mt.us',
    to: deniedReservation.User.email,
    subject: 'Your Facility Reservation has been denied',
    text: `Your reservation for ${deniedReservation.eventName} has been denied. You can view the details at https://facilities.laurel.k12.mt.us/reservation/${deniedReservation.id} . If you have any questions, please contact the Activities Director at lpsactivities@laurel.k12.mt.us`,
  });
  return deniedReservation;
}
