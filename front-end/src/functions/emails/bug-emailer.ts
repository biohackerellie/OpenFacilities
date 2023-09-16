'use server';

import NodeMailer from 'nodemailer';

export default async function BugEmailer(formData: any) {
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
    from: formData.email,
    to: 'elliana_kerns@laurel.k12.mt.us',
    subject: `Bug Report from ${formData.name}`,
    text: formData.text,
  };

  const info = await transporter.sendMail(mailOptions);
  return info;
}
