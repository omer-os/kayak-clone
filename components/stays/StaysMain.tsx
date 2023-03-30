import React from "react";
import StaysSearchContainer from "./SearchComponents/StaysSearchComponent";
import HomeSec2 from "../home/OtherComponents/HomeSec2";

export default function StaysMain() {
  return (
    <div>
      <div className="text-2xl font-bold sm:text-3xl">
        Where are you staying?
      </div>

      <StaysSearchContainer />
      <HomeSec2 />
    </div>
  );
}
