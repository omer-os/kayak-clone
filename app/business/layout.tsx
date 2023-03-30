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
    <div className="bg-[#192024] -z-10">
      <div className="pb-20">{children}</div>
    </div>
  );
}
