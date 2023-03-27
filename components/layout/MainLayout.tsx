import React from "react";
import MainNavBar from "./MainNavBar";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <MainNavBar />
      {children}
    </>
  );
}
