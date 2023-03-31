import Image from "next/image";
import React from "react";
import { BsChevronDown } from "react-icons/bs";

export default function FlightsTicketCard() {
  return (
    <div className="flex relative lg:flex-row flex-col p-4 rounded-xl shadow-xl bg-white ">
      <div className="img flex items-end lg:items-start justify-start ">
        <img
          src="https://www.freepnglogos.com/uploads/turkish-airlines-logo-emblem-3.png"
          className="lg:w-14 lg:h-14 min-w-10 h-10 object-cover rounded-full"
          alt="airline logo"
        />

        <div className="flex lg:hidden flex-col flex-1">
          <div className="text-xs font-bold">8h 10m</div>
          <div className="text-xs text-zinc-400">LGW - JFK</div>
        </div>
      </div>
      <div className="flex mt-3 lg:mt-0 flex-1 flex-col gap-2">
        <div className="flex items-end gap-5">
          <div className="flex flex-col flex-1">
            <div className="text-xl font-bold min-w-max">
              12:40 Pm - 3:50 Pm
            </div>
            <div className="text-sm text-zinc-400">Norse Atlantic Uk</div>
            <div className="font-bold text-xs">nonstop</div>
          </div>

          <div className="lg:flex hidden flex-col flex-1">
            <div className="text-xl font-bold">8h 10m</div>
            <div className="text-sm text-zinc-400">LGW - JFK</div>
          </div>

          <div className="font-bold text-2xl">$328</div>
        </div>

        <div className="w-full mt-2 lg:!mt:0  h-[.05em] bg-zinc-300" />

        <div className="flex justify-between items-center">
          <div className="flex flex-col">
            <div className="text-xs text-zinc-400">Economy</div>
            <div className="text-xs text-zinc-400">Edereams</div>
          </div>

          <div className="flex min-w-max mt-2 font-bold bg-gradient-to-br from-orange-500 to-orange-700 text-white rounded divide-x-2 h-max">
            <button className="flex-1 text-sm px-5 py-2 capitalize flex items-center justify-center">
              view deal
            </button>

            <button className="px-3 flex items-center justify-center">
              <BsChevronDown />
            </button>
          </div>
        </div>
      </div>

      <div className="flex gap-2 absolute top-2 right-2">
        <div className="bg-zinc-200 py-1 px-3 rounded font-bold">
          <img
            src="/svgs/carryon.svg"
            className="w-6 h-5 object-contain"
            alt=""
          />
        </div>
        <div className="bg-zinc-200 py-1 px-3 rounded font-bold">
          <img
            src="/svgs/checkedbag.svg"
            className="w-6 h-5 object-contain"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

/* <img
src={
  "https://www.freepnglogos.com/uploads/turkish-airlines-logo-emblem-3.png"
}
alt="turkish airlines logo"
/>
</div> */
