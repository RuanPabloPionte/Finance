import Header from "../ui/Header";
export default function LogedLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      {/* Include shared UI here e.g. a header or sidebar */}
      <Header />

      {children}
    </section>
  );
}
