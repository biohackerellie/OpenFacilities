import type { NextRequest} from 'next/server';
import { NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';

export async function POST(request: NextRequest) {
  const { token } = await request.json();

  const publicKey: string = Buffer.from(
    process.env.RSA_PUBLIC_KEY!,
    'base64'
  ).toString('utf-8');
  const decoded = jwt.verify(token, publicKey, { algorithms: ['RS256'] });
  if (!decoded) {
    return NextResponse.json({ status: 401, message: 'Invalid token' });
  }

  return NextResponse.json({
    status: 200,
    userId: decoded,
  });
}
