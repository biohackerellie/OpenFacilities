import ReservationForm from '@/components/forms/reservationForm2';

export const runtime = 'edge';

export default function reservationPage() {
  return (
    <section className="justify-center flex flex-col sm:flex-row my-4">
      <ReservationForm />
    </section>
  );
}
