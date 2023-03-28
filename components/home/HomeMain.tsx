import React from "react";
import HomeDropDown from "./components/HomeDropDown";
import HomeSearchContainer from "./components/HomeSearchContainer";

export default function HomeMain() {
  return (
    <div>
      <div className="sm:text-3xl sm:text-left text-center text-2xl transition-all font-bold capitalize">
        Where are you flying?
      </div>

      <HomeSearchContainer />
    </div>
  );
}
