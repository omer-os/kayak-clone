import React from "react";
import FlightsTicketCard from "./FlightsTicketCard";

export default function FlightsTicketCardWrapper() {
  return (
    <div className="flex mt-10 flex-col gap-3">
      <FlightsTicketCard />
    </div>
  );
}
