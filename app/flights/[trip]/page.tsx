import FlightsListMiddle from "@/components/flights/middle/FlightsListMiddle";
import React from "react";

export default function page({
  params,
  searchParams,
}: {
  params: { trip: string };
  searchParams: {
    sort: "cheapest" | "best" | "quickest";
  };
}) {
  const [from, to] = params.trip.split("-");

  return (
    <div>
      <FlightsListMiddle from={from} to={to} sort={searchParams.sort} />
    </div>
  );
}
