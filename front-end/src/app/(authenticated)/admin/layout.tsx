import { IsAdmin } from '@/components/contexts';

export default function authLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      <IsAdmin>{children}</IsAdmin>
    </section>
  );
}
