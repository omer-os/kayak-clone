import React from "react";
import HomeSearchContainer from "../home/SearchComponents/HomeSearchContainer";
import FlightsListLeftSide from "./Left/FlightsListLeftSide";
import FlightsListRightSide from "./right/FlightsListRightSide";
import FlightsListMiddle from "./middle/FlightsListMiddle";

export default function FlightsListWrapper() {
  return (
    <div>
      <div className="mx-auto lg:w-5/6 px-6 md:pt-5  pt-20 z-10 relative">
        <HomeSearchContainer />
      </div>

      <div className="mt-20 bg-zinc-200 border-t border-zinc-300 p-10">
        <div
          className="gap-5 grid 
        
        xl:grid-cols-[15em_1fr_15em]
        lg:grid-cols-[15em_1fr]
        grid-cols-1
        "
        >
          <FlightsListLeftSide />
          <FlightsListMiddle />
          <FlightsListRightSide />
        </div>
      </div>
    </div>
  );
}
