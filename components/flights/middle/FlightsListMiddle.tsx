"use client";
import { motion } from "framer-motion";

import React, { useState } from "react";
import FlightsLsTop from "./top/FlightsLsTop";
import FlightsTicketCardWrapper from "./card/FlightsTicketCardWrapper";

export default function FlightsListMiddle() {
  return (
    <div>
      <FlightsLsTop />

      <FlightsTicketCardWrapper />
    </div>
  );
}
