import Link from 'next/link';
import { Button } from '@/components/ui/buttons/button';
import { getCurrentUser } from '@/functions/data/auth';

export default async function IsAdmin({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getCurrentUser();
  if (
    session?.user.roles === 'ADMIN_ADMIN' ||
    session?.user.roles === 'CAL_ADMIN' ||
    session?.user.roles === 'GR_ADMIN' ||
    session?.user.roles === 'HS_ADMIN' ||
    session?.user.roles === 'LMS_ADMIN' ||
    session?.user.roles === 'WE_ADMIN' ||
    session?.user.roles === 'SO_ADMIN' ||
    session?.user.roles === 'SUP_ADMIN'
  ) {
    return <> {children} </>;
  } else {
    return (
      <div className="justify-center mt-16 align-middle text-center flex flex-wrap flex-col">
        <h1 className="font-bold text-2xl">
          You dont have permission to view this page
        </h1>
        <h2 className="font-bold  text-xl">
          {' '}
          Click{' '}
          <Button asChild>
            <Link href="/">Here</Link>{' '}
          </Button>
          to go back
        </h2>
      </div>
    );
  }
}
