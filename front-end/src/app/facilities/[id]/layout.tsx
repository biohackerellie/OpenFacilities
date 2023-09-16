export default function facilityLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="relative">
      <div className="flex flex-col justify-between items-center h-full p-3">
        {children}
      </div>
    </section>
  );
}
