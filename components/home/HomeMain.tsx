import React from "react";
import HomeSec2 from "./OtherComponents/HomeSec2";
import HomeSec3 from "./OtherComponents/HomeSec3";
import HomeDropDown from "./SearchComponents/HomeDropDown";
import HomeSearchContainer from "./SearchComponents/HomeSearchContainer";

export default function HomeMain() {
  return (
    <div>
      <div className="sm:text-3xl sm:text-left text-center text-2xl transition-all font-bold capitalize">
        Where are you flying?
      </div>

      <HomeSearchContainer />
      <HomeSec2 />
      <HomeSec3 />
    </div>
  );
}
