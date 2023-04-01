import MainLayout from "@/components/layout/MainLayout";
import "../styles/globals.css";

export const metadata = {
  title: "Kayak",
  description: "Search for your next trip, hotel etc...",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <>
          <MainLayout>{children}</MainLayout>
        </>
      </body>
    </html>
  );
}
