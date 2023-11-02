import type { Config } from 'drizzle-kit';

export default {
  schema: './src/lib/schema/schema.ts',
  out: './drizzle',
  driver: 'pg',
  dbCredentials: {
    connectionString:
      'postgresql://postgres:ypDZomiu1cQopRRt@db.xzcuquyhlnudqrfwnbsm.supabase.co:5432/postgres?schema=facilities_db',
  },
} satisfies Config;
