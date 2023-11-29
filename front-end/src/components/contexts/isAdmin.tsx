import Link from 'next/link';
import { Button } from '@/components/ui/buttons/button';
import { getCurrentUser } from '@/functions/data/auth';

export default async function IsAdmin({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getCurrentUser();
  if (session.isAdmin()) {
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
