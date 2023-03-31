import FlightsListWrapper from "@/components/flights/FlightsListWrapper";
import React from "react";

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <FlightsListWrapper>{children}</FlightsListWrapper>
    </div>
  );
}
