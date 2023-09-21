'use server';
import NodeMailer from 'nodemailer';
import prisma from '@/lib/prisma';

export default async function updateEmail(id: number) {
  const reservation = await prisma.reservation.findUnique({
    where: {
      id: id,
    },
    include: {
      facility: true,
      user: true,
    },
  });

  const transporter = NodeMailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_PASSWORD,
    },
  });
  const mailOptions = {
    from: 'noreply@laurel.k12.mt.us',
    to: reservation?.user.email,
    subject: 'Laurel facility reservation Update',
    text: `Your reservation for ${reservation?.facility.name} has been updated. Please visit https://laurel.k12.mt.us/reservation/${reservation?.id} to view the update. \n\n If you have any questions, please contact the Activities Director at lpsactivities@laurel.k12.mt.us`,
  };

  const info = await transporter.sendMail(mailOptions);
  return info;
}
