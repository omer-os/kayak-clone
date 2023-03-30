"use client";

import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import { HiOutlineMenu } from "react-icons/hi";
import { HiOutlineUserCircle } from "react-icons/hi";

import { FaPlaneDeparture } from "react-icons/fa";
import { IoIosBed } from "react-icons/io";
import { IoCarSport, IoClose } from "react-icons/io5";
import { GiPalmTree } from "react-icons/gi";
import { MdTrain, MdFeedback } from "react-icons/md";
import { BiWorld, BiError } from "react-icons/bi";
import { AiOutlineSecurityScan } from "react-icons/ai";
import { BsBookmarksFill } from "react-icons/bs";
import Link from "next/link";
import { motion } from "framer-motion";

export default function SideBar({ ShowSideBar, setShowSideBar }: any) {
  const pathname = usePathname();

  return (
    <motion.div
      className={`bg-white z-50 flex flex-col border-r border-zinc-300 md:w-[15em] w-0 md:sticky fixed top-0 bottom-0 left-0 overflow-hidden transition-all ${
        ShowSideBar && "md:!w-[4em] w-full"
      }`}
    >
      <div
        className={`md:text-zinc-600 flex items-center justify-center p-[.8em]  fixed top-0 left-0 bg-white ${
          !ShowSideBar && "!justify-start"
        } transition-all
        shadow-none
       `}
      >
        <button
          onClick={() => setShowSideBar(!ShowSideBar)}
          className="relative z-50 p-2 transition-all bg-white rounded hover:bg-zinc-300 active:scale-90 "
        >
          {!ShowSideBar ? <HiOutlineMenu size={20} /> : <IoClose size={20} />}
        </button>
      </div>

      <div className="flex flex-col gap-1 m-2 mt-20">
        <div className="flex items-center gap-4 px-4 py-2 capitalize rounded hover:bg-zinc-300 min-w-max">
          <HiOutlineUserCircle size={20} />
          {!ShowSideBar && <p className="">Sign in</p>}
        </div>

        <div className="w-full h-[0.05em] bg-zinc-300" />

        {[
          {
            Icon: FaPlaneDeparture,
            text: "Flights",
            link: "/",
          },
          {
            Icon: IoIosBed,
            text: "stays",
            link: "/stays",
          },
          {
            Icon: IoCarSport,
            text: "cars",
            link: "/cars",
          },
          {
            Icon: GiPalmTree,
            text: "packages",
            link: "/packages",
          },
          {
            Icon: MdTrain,
            text: "trains and buses",
            link: "/string",
          },
        ].map((i) => (
          <ListItem
            ShowSideBar={ShowSideBar}
            focus={pathname === i.link ? true : false}
            key={i.link}
            Icon={i.Icon}
            link={i.link}
            text={i.text}
          />
        ))}

        <div className="w-full h-[0.05em] bg-zinc-300" />

        {[
          {
            Icon: BiWorld,
            text: "explore",
            link: "/explore",
          },
          {
            Icon: AiOutlineSecurityScan,
            text: "flight tracker",
            link: "/flight-tracker",
          },
          {
            Icon: BiError,
            text: "travel restrictions",
            link: "/travel-restrictions",
          },
        ].map((i) => (
          <ListItem
            ShowSideBar={ShowSideBar}
            focus={pathname === i.link ? true : false}
            key={i.link}
            Icon={i.Icon}
            link={i.link}
            text={i.text}
          />
        ))}
        <div className="w-full h-[0.05em] bg-zinc-300" />

        <ListItem
          ShowSideBar={ShowSideBar}
          focus={pathname === "/feedback" ? true : false}
          Icon={MdFeedback}
          link="/feedback"
          text="feedback"
        />

        <div className="w-full h-[0.05em] bg-zinc-300" />

        <ListItem
          ShowSideBar={ShowSideBar}
          focus={pathname === "/trips" ? true : false}
          Icon={BsBookmarksFill}
          link="/trips"
          text="trips"
        />
      </div>
    </motion.div>
  );
}

//
//
//

type ListItemProps = {
  Icon: any;
  text: string;
  link: string;
  focus: boolean;
  ShowSideBar: boolean;
};
const ListItem = ({ Icon, ShowSideBar, text, link, focus }: ListItemProps) => {
  return (
    <Link
      href={link}
      className={`active:scale-95 rounded flex gap-4 items-center text-sm capitalize py-3 px-4 transition-all relative min-w-max hover:bg-zinc-200
      ${focus && "font-bold"}`}
    >
      {focus && (
        <motion.div
          layoutId="SideBarItem"
          className={`inset-0 left-0 top-0 bg-zinc-300 rounded absolute z-10 ${
            ShowSideBar && ""
          }`}
        />
      )}

      <span
        className={`text-zinc-400 z-20 transition-all ${focus && "!text-black"}
      `}
      >
        <Icon size={20} />
      </span>
      <p className={`z-20 ${ShowSideBar && "md:hidden"}`}>{text}</p>
    </Link>
  );
};
