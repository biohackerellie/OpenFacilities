'use server';

import prisma from '@/lib/prisma';

interface IFormInput {
  startdate: string;
  enddate: string;
  starttime: string;
  endtime: string;
  id: any;
}
export default async function modifyDate(data: IFormInput, id: any) {
  await prisma.reservationdate.update({
    where: {
      id: id,
    },
    data: {
      startdate: data.startdate,
      enddate: data.enddate,
      starttime: data.starttime,
      endtime: data.endtime,
    },
  });
}
