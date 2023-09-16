import SubNav from '@/components/ui/subNav';

export default function buildingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <section>{children}</section>;
}
