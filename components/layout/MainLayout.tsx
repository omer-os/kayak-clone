"use client";

import React, { Suspense, useState } from "react";
import MainNavBar from "./MainNavBar";
import SideBar from "./sideBar/SideBar";
import LoadingSideBar from "./sideBar/loadingSidebar";
import Footer from "./footer/Footer";
export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [ShowSideBar, setShowSideBar] = useState(false);

  return (
    <>
      <div className="flex h-screen overflow-hidden">
        <Suspense fallback={<LoadingSideBar />}>
          <SideBar ShowSideBar={ShowSideBar} setShowSideBar={setShowSideBar} />
        </Suspense>

        <div className="flex flex-col flex-1">
          <MainNavBar
            ShowSideBar={ShowSideBar}
            setShowSideBar={setShowSideBar}
          />
          <div className={`overflow-y-scroll min-h-screen relative`}>
            {children}

            <Footer ShowSideBar={ShowSideBar} />
          </div>
        </div>
      </div>
    </>
  );
}
