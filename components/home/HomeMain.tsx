import React from "react";
import HomeDropDown from "./components/HomeDropDown";
import HomeSearchContainer from "./components/HomeSearchContainer";

export default function HomeMain() {
  return (
    <div>
      <div className="text-3xl font-bold capitalize">Where are you flying?</div>

      <HomeSearchContainer />
    </div>
  );
}
