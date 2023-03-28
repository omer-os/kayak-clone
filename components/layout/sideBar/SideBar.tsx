"use client";

import { usePathname } from "next/navigation";
import React, { useState } from "react";
import { HiOutlineMenu } from "react-icons/hi";
import { HiOutlineUserCircle } from "react-icons/hi";

import { FaPlaneDeparture } from "react-icons/fa";
import { IoIosBed } from "react-icons/io";
import { IoCarSport } from "react-icons/io5";
import { GiPalmTree } from "react-icons/gi";
import { MdTrain, MdFeedback } from "react-icons/md";
import { BiWorld, BiError } from "react-icons/bi";
import { AiOutlineSecurityScan } from "react-icons/ai";
import { BsBookmarksFill } from "react-icons/bs";
import Link from "next/link";
import { motion } from "framer-motion";

export default function SideBar() {
  const pathname = usePathname();

  const [ShowSideBar, setShowSideBar] = useState(true);

  return (
    <motion.div
      animate={{
        width: ShowSideBar ? "60px" : "auto",
      }}
      className="bg-white z-50 p-2 flex flex-col border-r border-zinc-300 h-full w-[15em] lg:relative fixed top-0 bottom-0 left-0 overflow-hidden"
    >
      <button
        onClick={() => setShowSideBar(!ShowSideBar)}
        className="hover:bg-zinc-300 p-2 rounded m-2 text-zinc-600 w-max"
      >
        <HiOutlineMenu size={25} />
      </button>

      <div className="flex flex-col mt-8 gap-1">
        <div className="hover:bg-zinc-300 rounded flex gap-4 min-w-max items-center capitalize py-2 px-4">
          <HiOutlineUserCircle size={20} />
          <p className="">Sign in</p>
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
            focus={pathname === i.link ? true : false}
            key={i.link}
            Icon={i.Icon}
            link={i.link}
            text={i.text}
          />
        ))}
        <div className="w-full h-[0.05em] bg-zinc-300" />

        <ListItem
          focus={pathname === "/feedback" ? true : false}
          Icon={MdFeedback}
          link="/feedback"
          text="feedback"
        />

        <div className="w-full h-[0.05em] bg-zinc-300" />

        <ListItem
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
};
const ListItem = ({ Icon, text, link, focus }: ListItemProps) => {
  return (
    <Link
      href={link}
      className={`active:scale-95 rounded flex gap-4 items-center text-sm capitalize py-3 px-4  transition-all relative min-w-max
      ${focus && "font-bold"}
      `}
    >
      {focus && (
        <motion.div
          layoutId="SideBarItem"
          className="inset-0 bg-zinc-300 rounded absolute z-10"
        />
      )}

      <span
        className={`text-zinc-400 z-20 transition-all ${focus && "!text-black"}
      `}
      >
        <Icon size={20} />
      </span>
      <p className="z-20 ">{text}</p>
    </Link>
  );
};
