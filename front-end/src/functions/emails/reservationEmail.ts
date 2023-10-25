'use server';

type emailData = {
  to: string;
  message: string;
  subject: string;
};

export default async function reservationEmail(data: emailData) {
  try {
    await fetch(`${process.env.NEXT_PUBLIC_EMAIL_API}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        key: process.env.EMAIL_API_KEY,
        to: data.to as string,
        from: 'Laurel Facility Rental',
        subject: data.subject as string,
        html: `<p>${data.message}</p>`,
      }),
    });
    return Response.json({ ok: true, status: 200 });
  } catch (error) {
    return Response.json({ ok: false, status: 500, body: error });
  }
}
