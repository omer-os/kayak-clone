"use client";

import React, { Suspense, useState } from "react";
import MainNavBar from "./MainNavBar";
import SideBar from "./sideBar/SideBar";
import LoadingSideBar from "./sideBar/loadingSidebar";
export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [ShowSideBar, setShowSideBar] = useState(true);

  return (
    <>
      <div className="flex h-screen ">
        <Suspense fallback={<LoadingSideBar />}>
          <SideBar ShowSideBar={ShowSideBar} setShowSideBar={setShowSideBar} />
        </Suspense>

        <div className="flex flex-col flex-1">
          <MainNavBar
            ShowSideBar={ShowSideBar}
            setShowSideBar={setShowSideBar}
          />
          <div className="p-4">{children}</div>
        </div>
      </div>
    </>
  );
}
