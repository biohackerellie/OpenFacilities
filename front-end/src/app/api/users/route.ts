import { GetUsers } from '@/lib/db/queries/users';
import type { NextRequest} from 'next/server';
import { NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
	const res = await GetUsers.execute();
	return NextResponse.json(res);
}
