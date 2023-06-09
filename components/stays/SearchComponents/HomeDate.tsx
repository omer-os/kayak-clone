"use client";
import { motion } from "framer-motion";

import React from "react";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import { BsFillCalendar2DateFill } from "react-icons/bs";
interface TwoWaysTripDateType {
  startDate: Date;
  endDate: Date | null;
  key: string;
}
export default function HomeDate({
  setShowDateComponent,
  TwoWaysTripDate,
  OneWayStartDate,
  TripDirection,
}: {
  setShowDateComponent: any;
  TwoWaysTripDate: TwoWaysTripDateType;
  OneWayStartDate: string;
  TripDirection: "one way trip" | "round trip";
}) {
  return (
    <div
      onClick={() => setShowDateComponent(true)}
      className={`flex gap-2 ${
        TripDirection !== "one way trip" && "flex-1"
      } md:!flex-none flex-1 `}
    >
      <motion.div
        layout
        className="relative flex-1 group sm:min-w-[10em] lg:max-w-[13em]"
      >
        <button className="bg-zinc-200 pl-10  text-left w-full p-3 px-4 rounded  hover:!bg-zinc-300 transition-all active:scale-95">
          2023-3-3
        </button>

        <div className="absolute transition-all top-4 left-3 group-active:scale-95">
          <BsFillCalendar2DateFill />
        </div>
        <div className="absolute flex gap-1 top-4 right-3">
          <div className="rounded ">
            <BiChevronLeft />
          </div>
          <div>
            <BiChevronRight />
          </div>
        </div>
      </motion.div>

      <motion.div
        layout
        className="relative flex-1 group sm:min-w-[10em] lg:max-w-[13em]"
      >
        <button className="hover:!bg-zinc-300 transition-all bg-zinc-200 pl-10  text-left w-full p-3 px-4 rounded active:scale-95">
          2023-3-3
        </button>

        <div className="absolute transition-all top-4 left-3 group-active:scale-95">
          <BsFillCalendar2DateFill />
        </div>
        <div className="absolute flex gap-1 top-4 right-3">
          <div className="rounded ">
            <BiChevronLeft />
          </div>
          <div>
            <BiChevronRight />
          </div>
        </div>
      </motion.div>
    </div>
  );
}
