import Image from "next/image";
import Link from "next/link";
import React from "react";
import { AiFillHeart } from "react-icons/ai";

export default function MainNavBar() {
  return (
    <div className="sticky top-0 left-0 flex justify-between p-2 items-center">
      <Link href={"/"} className="relative h-[25px] w-[125px]">
        <Image src="/images/logo.svg" alt="logo" fill />
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
