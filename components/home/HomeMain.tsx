import React from "react";
import HomeSec2 from "./OtherComponents/HomeSec2";
import HomeSec4 from "./OtherComponents/HomeSec4";
import HomeDropDown from "./SearchComponents/HomeDropDown";
import HomeSearchContainer from "./SearchComponents/HomeSearchContainer";
import HomeSec3 from "./OtherComponents/HomeSec3";

export default function HomeMain() {
  return (
    <div className="">
      <div className="text-2xl font-bold text-center capitalize transition-all sm:text-3xl sm:text-left ">
        Where are you flying?
      </div>

      <HomeSearchContainer />
      <HomeSec2 />
      <HomeSec3 />
      {/* <HomeSec4 /> */}
    </div>
  );
}
