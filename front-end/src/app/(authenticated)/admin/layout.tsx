import { IsAdmin, MobileWrapper } from '@/components/contexts';

export default function authLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      <IsAdmin>
        <MobileWrapper>{children}</MobileWrapper>
      </IsAdmin>
    </section>
  );
}
