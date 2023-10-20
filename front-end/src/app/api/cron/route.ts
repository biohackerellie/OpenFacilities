import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import moment from 'moment-timezone';
import nodemailer from 'nodemailer';

export const runtime = 'nodejs';

export async function GET(req: NextRequest, res: NextResponse) {
  if (
    req.headers.get('Authorization') !== `Bearer ${process.env.CRON_SECRET}`
  ) {
    return NextResponse.json({ status: 401, body: 'Unauthorized' });
  }
  const currentDate = moment().tz('America/Denver').startOf('day').toDate();
  const sevenDaysFromNow = moment()
    .tz('America/Denver')
    .startOf('day')
    .add(7, 'days')
    .toDate();

  const schools = [
    {
      name: 'Laurel High School',
      email:
        'lillian_kooistra@laurel.k12.mt.us, lpsactivities@laurel.k12.mt.us, elliana_kerns@laurel.k12.mt.us, stacy_hall@laurel.k12.mt.us, john_stilson@laurel.k12.mt.us, tamara_raty@laurel.k12.mt.us, wendi_clark@laurel.k12.mt.us, paul_damjanovich@laurel.k12.mt.us, austin_anderson@laurel.k12.mt.us, mischele_miller@laurel.k12.mt.us, hsmessage@laurel.k12.mt.us  ',
    },
    {
      name: 'Laurel Middle School',
      email:
        'lillian_kooistra@laurel.k12.mt.us, lpsactivities@laurel.k12.mt.us, justin_klebe@laurel.k12.mt.us, allyson_robertus@laurel.k12.mt.us, amanda_nelson@laurel.k12.mt.us, gayle_wisecup@laurel.k12.mt.us, sam_spitzer@laurel.k12.mt.us, nigel_oloughlin@laurel.k12.mt.us ',
    },
    {
      name: 'Graff Elementary',
      email:
        'lillian_kooistra@laurel.k12.mt.us, lpsactivities@laurel.k12.mt.us, lynne_peterson@laurel.k12.mt.us, roberto_holloway@laurel.k12.mt.us ',
    },
    {
      name: 'West Elementary',
      email:
        'lillian_kooistra@laurel.k12.mt.us, lpsactivities@laurel.k12.mt.us, bethany_fuchs@laurel.k12.mt.us, marla_adams@laurel.k12.mt.us, jordan_white@laurel.k12.mt.us ',
    },
    {
      name: 'South Elementary',
      email:
        'lillian_kooistra@laurel.k12.mt.us, lpsactivities@laurel.k12.mt.us, tom_williams@laurel.k12.mt.us, katherine_dawe@laurel.k12.mt.us ',
    },
    {
      name: 'Laurel Stadium',
      email:
        'lillian_kooistra@laurel.k12.mt.us, lpsactivities@laurel.k12.mt.us, stacy_hall@laurel.k12.mt.us, john_stilson@laurel.k12.mt.us, tamara_raty@laurel.k12.mt.us, wendi_clark@laurel.k12.mt.us, paul_damjanovich@laurel.k12.mt.us, austin_anderson@laurel.k12.mt.us, mischele_miller@laurel.k12.mt.us, hsmessage@laurel.k12.mt.us',
    },
  ];

  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASSWORD,
      },
    });

    for (const school of schools) {
      const events = await prisma.events.findMany({
        where: {
          AND: [
            {
              Facility: {
                building: school.name,
              },
            },
            {
              start: {
                gte: currentDate,
                lt: sevenDaysFromNow,
              },
            },
          ],
        },

        orderBy: {
          start: 'asc',
        },
      });

      const eventsInMST = events.map((event) => {
        return {
          ...event,
          start: moment(event.start)
            .tz('America/Denver')
            .format('dddd, MMMM Do, h:mm a'),
          end: moment(event.end).tz('America/Denver').format('h:mm a'),
        };
      });

      const eventList = eventsInMST
        .map(
          (event) =>
            `<li>"${event.title}" at ${event.location} on ${event.start} to ${event.end}</li>`
        )
        .join('');

      const info = await transporter.sendMail({
        from: '"Weekly Events" no_reply@laurel.k12.mt.us',
        to: school.email,
        subject: 'Weekly Events',
        html: `<p>Here are the events happening in your building this week:</p><ul>${eventList}</ul>`,
      });
    }
  } catch (error) {
    return NextResponse.json({ ok: false, body: { error } });
  }

  return NextResponse.json({ ok: true });
}
