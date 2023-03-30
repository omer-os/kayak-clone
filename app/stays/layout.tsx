export const metadata = {
  title: "Kayak",
  description: "Search for your next trip, hotel etc...",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      className="
  m-auto
  xl:max-w-7xl
  lg:!max-w-5xl
  w-full
  mt-10
  "
    >
      <>{children}</>
    </div>
  );
}
