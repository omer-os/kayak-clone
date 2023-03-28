"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { AiFillHeart } from "react-icons/ai";
import { HiOutlineMenu } from "react-icons/hi";

export default function MainNavBar({ ShowSideBar, setShowSideBar }: any) {
  return (
    <div className="sticky top-0 left-0 flex justify-between py-4 px-4 items-center border-b border-zinc-300 pl-16 md:pl-4">
      <Link
        href={"/"}
        className="relative h-[24px] md:w-[125px] w-[24px] transition-all"
      >
        <Image
          src="/images/logo.svg"
          alt="logo"
          fill
          className="md:object-contain object-cover object-left"
        />
      </Link>

      <div className="flex items-center gap-3">
        <Link href="/">Business</Link>
        <Link href="/">Trips</Link>
        <div className="h-6 w-0.5 bg-zinc-600" />

        <Link href="/" className="hover:bg-zinc-300 p-1 rounded">
          <AiFillHeart size={24} />
        </Link>
      </div>
    </div>
  );
}
