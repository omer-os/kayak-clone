import React from "react";
import FlightsTicketCard from "./FlightsTicketCard";
import { BsChevronDown } from "react-icons/bs";

export default function FlightsTicketCardWrapper() {
  return (
    <div className="flex mt-10 flex-col gap-3">
      <FlightsTicketCard />
      <FlightsTicketCard />
      <FlightsTicketCard />
      <FlightsTicketCard />
      <FlightsTicketCard />
    </div>
  );
}
