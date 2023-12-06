import type { Config } from 'drizzle-kit';
import * as dotenv from 'dotenv';
dotenv.config();

export default {
  schema: './src/lib/db/schema.ts',
  out: './src/lib/db',
  driver: 'pg',
  dbCredentials: {
    connectionString: process.env.DATABASE_URL as string,
  },
  introspect: {
    casing: 'preserve',
  },
  schemaFilter: 'facilities_db',
} satisfies Config;
