import React from "react";
import StaysSearchContainer from "./SearchComponents/StaysSearchComponent";

export default function StaysMain() {
  return (
    <div>
      <div className="sm:text-3xl font-bold text-2xl">
        Where are you staying?
      </div>

    <StaysSearchContainer />
    </div>
  );
}
