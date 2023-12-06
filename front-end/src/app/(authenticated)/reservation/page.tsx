import ReservationForm from '@/components/forms/reservationForm2';
import { Suspense } from 'react';
import { Skeleton } from '@/components/ui/skeleton';

const Loading = () => {
  return (
    <div>
      <Skeleton className=" h-20 w-auto" />
      <Skeleton className=" h-96 w-auto" />
      <Skeleton className=" h-20 w-auto" />
    </div>
  );
};

export default function reservationPage() {
  return (
    <section className="justify-center flex flex-col sm:flex-row my-4">
      <Suspense fallback={<Loading />}>
        <ReservationForm />
      </Suspense>
    </section>
  );
}
