"use client";

import { useState } from "react";
import HomeDropDown from "./HomeDropDown";

export default function HomeSearchContainer() {
  const [TripDirection, setTripDirection] = useState("oneway");
  return (
    <div className="flex flex-col py-4">
      <div className="flex gap-4">
        <HomeDropDown
          options={[
            { option: "round trip", value: "round" },
            { option: "one way", value: "oneway" },
          ]}
          State={TripDirection}
          setState={setTripDirection}
        />
        <HomeDropDown
          options={[
            { option: "economy", value: "economy" },
            { option: "business", value: "business" },
          ]}
          State={TripDirection}
          setState={setTripDirection}
        />
      </div>



      <div className="flex gap-1">
        
      </div>
    </div>
  );
}
