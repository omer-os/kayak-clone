"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { AiFillHeart } from "react-icons/ai";
import { BiUserCircle } from "react-icons/bi";

export default function MainNavBar({ ShowSideBar, setShowSideBar }: any) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function handleScroll() {
      if (window.pageYOffset > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div
      className={`lg:sticky fixed right-0 top-0 left-0 flex justify-between py-3 px-4 items-center border-b border-zinc-300 bg-white z-40 ${
        scrolled && "!shadow-xl"
      } shadow-none transition-all sm:pl-0 pl-16
      ${!ShowSideBar ? "md:!pl-[17em]" : "md:!pl-[7em]"}
      `}
    >
      <Link
        href={"/"}
        className="relative z-50 h-[24px] md:w-[125px] w-[24px] transition-all"
      >
        <Image
          src="/images/logo.svg"
          alt="logo"
          fill
          className="md:object-contain object-cover object-left"
        />
      </Link>

      <div className="flex items-center sm:gap-3 gap-2">
        <Link className="sm:flex hidden" href="/">
          Business
        </Link>
        <Link href="/">Trips</Link>
        <div className="h-6 w-0.5 bg-zinc-600" />

        <Link href="/" className="hover:bg-zinc-300 p-1 rounded">
          <AiFillHeart size={24} />
        </Link>

        <Link
          className="flex font-semibold capitalize px-3 py-2 gap-2 rounded border border-black sm:text-md text-sm items-center"
          href="/"
        >
          <span>
            <BiUserCircle />
          </span>
          sign in
        </Link>
      </div>
    </div>
  );
}
