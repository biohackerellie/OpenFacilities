import { NextRequest } from 'next/server';
import { revalidatePath } from 'next/cache';

export async function GET(req: NextRequest) {
  const headers = req.headers;

  if (headers.get('x-api-key') !== process.env.EMAIL_API_KEY) {
    return new Response('Unauthorized', { status: 401 });
  }

  return revalidatePath('/', 'layout');
}
