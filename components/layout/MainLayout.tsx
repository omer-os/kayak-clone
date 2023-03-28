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
  const [ShowSideBar, setShowSideBar] = useState(true);

  return (
    <>
      <div className="flex h-screen  overflow-y-scroll">
        <Suspense fallback={<LoadingSideBar />}>
          <SideBar ShowSideBar={ShowSideBar} setShowSideBar={setShowSideBar} />
        </Suspense>

        <div className="flex flex-col">
          <MainNavBar
            ShowSideBar={ShowSideBar}
            setShowSideBar={setShowSideBar}
          />
          <div
            className={`py-5 md:px-10 px-3 lg:mt-10 mt-20 relative z-20  transition-all 
            ${!ShowSideBar ? "md:!pl-[16em]" : "md:!pl-[6em]"}`}
          >
            {children}
          </div>

          <Footer ShowSideBar={ShowSideBar} />
        </div>
      </div>
    </>
  );
}
