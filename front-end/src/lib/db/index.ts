import * as schema from './schema';
import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';

const connectionSring = process.env.DATABASE_URL as string;
const client = postgres(connectionSring);
export const db = drizzle(client, { schema });
