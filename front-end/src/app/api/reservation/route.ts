import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import moment from 'moment';
import { serializeJSON } from '@/utils/serializeJSON';
import generateId from '@/functions/calculations/generate-id';

import { revalidatePath } from 'next/cache';

const currentDate = moment().format('YYYY-MM-DD');

export const dynamic = 'force-dynamic';
export const runtime = 'edge';
export async function GET(req: Request) {
  const res = await prisma.reservation.findMany({
    where: {
      approved: 'approved',
      ReservationDate: {
        some: {
          startDate: {
            gte: currentDate,
          },
        },
      },
    },
    include: {
      Facility: true,
      ReservationDate: true,
      User: {
        select: {
          id: true,
          name: true,
          email: true,
          role: true,
          createdAt: true,
          tos: true,
        },
      },
    },
    cacheStrategy: { swr: 60, ttl: 10 },
  });
  return NextResponse.json(serializeJSON(res));
}

export async function POST(req: Request) {
  const data = await req.json();
  console.log(data);
  let conflicts = false;
  const categories = await prisma.category.findFirst({
    where: {
      facilityId: BigInt(data.facility),
      name: {
        contains: data.category,
      },
    },
  });

  console.log(categories);

  try {
    const res = await prisma.reservation.create({
      data: {
        eventName: data.eventName,
        Category: {
          connect: {
            id: categories?.id,
          },
        },
        name: data.name,
        conflicts: conflicts,
        details: data.details,
        doorAccess: data.doorAccess,
        doorsDetails: data.doorDetails,
        phone: data.phone,
        techSupport: data.techSupport,
        techDetails: data.techDetails,
        Facility: {
          connect: {
            id: BigInt(data.facility),
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
      const eventId = generateId();
      await prisma.events.create({
        data: {
          id: eventId,
          placeholder: true,
        },
      });
      await prisma.reservationDate.create({
        data: {
          startDate: moment(event.startDate).format('YYYY-MM-DD'),
          endDate: moment(event.startDate).format('YYYY-MM-DD'),
          startTime: event.startTime,
          endTime: event.endTime,
          gcal_eventid: eventId,
          reservationId: BigInt(res.id),
        },
      });
    }
    if (process.env.NODE_ENV === 'production') {
      let to = '';

      if (res.Facility.building === 'Laurel High School') {
        to =
          'geralyn_hill@laurel.k12.mt.us, lpsactivities@laurel.k12.mt.us, stacy_hall@laurel.k12.mt.us, john_stilson@laurel.k12.mt.us';
      } else if (res.Facility.building === 'Laurel Middle School') {
        to =
          'justin_klebe@laurel.k12.mt.us, allyson_robertus@laurel.k12.mt.us, geralyn_hill@laurel.k12.mt.us, lpsactivities@laurel.k12.mt.us';
      } else if (res.Facility.building === 'South Elementary') {
        to =
          'geralyn_hill@laurel.k12.mt.us, lpsactivities@laurel.k12.mt.us, katherine_dawe@laurel.k12.mt.us';
      } else if (res.Facility.building === 'West Elementary') {
        to =
          'geralyn_hill@laurel.k12.mt.us, lpsactivities@laurel.k12.mt.us, bethany_fuchs@laurel.k12.mt.us';
      } else if (res.Facility.building === 'Graff Elementary') {
        to =
          'geralyn_hill@laurel.k12.mt.us, lpsactivities@laurel.k12.mt.us, lynne_peterson@laurel.k12.mt.us, sunny_denz@laurel.k12.mt.us';
      } else if (res.Facility.building === 'Laurel Stadium') {
        to = 'geralyn_hill@laurel.k12.mt.us, lpsactivities@laurel.k12.mt.us';
      } else if (res.Facility.building === 'Administration Building') {
        to =
          'elliana_kerns@laurel.k12.mt.us, geralyn_hill@laurel.k12.mt.us, lpsactivities@laurel.k12.mt.us';
      } else
        to = 'geralyn_hill@laurel.k12.mt.us, lpsactivities@laurel.k12.mt.us';

      try {
        await fetch(`${process.env.NEXT_PUBLIC_EMAIL_API}`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            key: process.env.EMAIL_API_KEY,
            to: to as string,
            from: 'Facility Rental',
            subject: 'New Facility Reservation',
            html: `<h1> New Facility Reservation </h1> <p>A new reservation request has been submitted by ${data.name} for ${data.eventName}. You can view the reservation here: https://facilities.laurel.k12.mt.us/admin/reservations/${res.id}</p>`,
          }),
        });
      } catch (error) {
        return NextResponse.json({ status: 500, body: error });
      }
    }
    revalidatePath('/admin/requests', 'page');
    return NextResponse.json({
      status: 200,
      message: 'reservation request submitted',
    });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: error, status: 500 });
  }
}
