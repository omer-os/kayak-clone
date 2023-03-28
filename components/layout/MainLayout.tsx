import React, { Suspense } from "react";
import MainNavBar from "./MainNavBar";
import SideBar from "./sideBar/SideBar";
import LoadingSideBar from "./sideBar/loadingSidebar";
export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="flex h-screen gap-3">
        <Suspense fallback={<LoadingSideBar />}>
          <SideBar />
        </Suspense>

        <div className="flex flex-col flex-1">
          <MainNavBar />
          {children}
        </div>
      </div>
    </>
  );
}
