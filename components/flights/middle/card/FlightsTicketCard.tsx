import Image from "next/image";
import React from "react";
import { BsChevronDown } from "react-icons/bs";

export default function FlightsTicketCard() {
  return (
    <div className="flex bg-white rounded-xl border-[0.05em] border-zinc-200 transition-all gap-2  hover:border-zinc-700 shadow-xl ">
      <div className="flex xl:flex-row flex-col xl:gap-4 gap-1 flex-1 self-center xl:items-center">
        <div className="img h-full w-[5em] flex items-center justify-center relative">
          <img
            src={
              "https://www.freepnglogos.com/uploads/turkish-airlines-logo-emblem-3.png"
            }
            alt="turkish airlines logo"
          />
        </div>

        <div className="flex xl:flex-row flex-col xlgap-4 xl:p-0 p-3">
          <div className="flex flex-col flex-1 min-w-max">
            <div className="font-bold  capitalize">12:40 pm - 3:50 pm</div>
            <div className="text-zinc-400 capitalize">
              norse atlantic uk
            </div>{" "}
          </div>
          <div className="flex xl:flex-row flex-col xl:gap-4">
            <div className="font-bold flex-1">nonstop</div>

            <div className="flex flex-col min-w-max flex-1">
              <div className="font-bold capitalize">8h 10m</div>
              <div className="text-zinc-400 capitalize">LGW - JFK</div>{" "}
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col relative p-3">
        <div className="h-full bg-zinc-300 self-center w-[0.05em] absolute -left-2 top-0 bottom-0" />

        <div className="flex gap-1">
          <button className="rounded border-[0.01em] border-zinc-300 px-2 hover:bg-zinc-100">
            <img
              src="/svgs/carryon.svg"
              className="w-5 h-5 object-contain"
              alt="carry on bag icon"
            />
          </button>
          <button className="rounded border-[0.01em] border-zinc-300 px-2 hover:bg-zinc-100">
            <img
              src="/svgs/checkedbag.svg"
              className="w-5 h-5 object-contain"
              alt="checked bag icon"
            />
          </button>
        </div>

        <div className="font-bold text-2xl mt-2">$328</div>
        <div className="flex flex-col text-xs capitalize">
          <div className="text-zinc-400">economy</div>
          <div className="text-zinc-400">eDreams</div>
        </div>

        <div className="flex min-w-max mt-2 flex-1 font-bold bg-gradient-to-br from-orange-500 to-orange-700 text-white rounded divide-x-2">
          <button className="flex-1 text-sm px-5 py-2 capitalize flex items-center justify-center">
            view deal
          </button>

          <button className="px-3 flex items-center justify-center">
            <BsChevronDown />
          </button>
        </div>
      </div>
    </div>
  );
}
