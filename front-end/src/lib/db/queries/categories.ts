import { db } from '@/lib/db';
import { Category } from '../schema';
import { and, eq, sql, like } from 'drizzle-orm';

export const CategoryByFacility = db.query.Category.findFirst({
  where: and(
    eq(Category.facilityId, sql.placeholder('facilityId')),
    like(Category.name, sql.placeholder('name'))
  ),
  columns: {
    id: true,
  },
}).prepare('category_by_facility');
