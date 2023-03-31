import MainLayout from "@/components/layout/MainLayout";
import MainNavBar from "@/components/layout/MainNavBar";
import "../styles/globals.css";
import { Session } from "next-auth";
import { headers } from "next/headers";
import AuthContext from "./AuthContext";

export const metadata = {
  title: "Kayak",
  description: "Search for your next trip, hotel etc...",
};

async function getSession(cookie: string): Promise<Session> {
  const response = await fetch(
    `${process.env.LOCAL_AUTH_URL}/api/auth/session`,
    {
      headers: {
        cookie,
      },
    }
  );

  const session = await response.json();

  return Object.keys(session).length > 0 ? session : null;
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getSession(headers().get("cookie") ?? "");

  return (
    <html lang="en">
      <body>
        <AuthContext session={session}>
          <MainLayout>{children}</MainLayout>
        </AuthContext>
      </body>
    </html>
  );
}
