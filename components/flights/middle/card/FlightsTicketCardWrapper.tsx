import React from "react";
import FlightsTicketCard from "./FlightsTicketCard";
import { BsChevronDown } from "react-icons/bs";

export default function FlightsTicketCardWrapper() {
  return (
    <div className="flex mt-10 flex-col gap-3 max-w-4xl">
      <FlightsTicketCard />
      <FlightsTicketCard />
      <FlightsTicketCard />
      <FlightsTicketCard />
      <FlightsTicketCard />

      <button className="w-full rounded-xl py-3 active:scale-95 transition-all active:bg-gray-600 bg-gray-700 text-white font-bold capitalize mt-5">
        view more
      </button>
    </div>
  );
}
