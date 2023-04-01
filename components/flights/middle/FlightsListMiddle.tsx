"use client";
import { motion } from "framer-motion";

import React, { useState } from "react";
import FlightsLsTop from "./top/FlightsLsTop";
import FlightsTicketCardWrapper from "./card/FlightsTicketCardWrapper";

type PageProps = {
  from: string;
  to: string;
  sort: "cheapest" | "best" | "quickest";
};

export default function FlightsListMiddle({ from, to, sort }: PageProps) {
  return (
    <div>
      <FlightsLsTop sort={sort} />

      <FlightsTicketCardWrapper from={from} to={to} sort={sort} />
    </div>
  );
}
