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
      className="w-full m-auto mt-10 
    transition-all
    "
    >
      <>{children}</>
    </div>
  );
}
