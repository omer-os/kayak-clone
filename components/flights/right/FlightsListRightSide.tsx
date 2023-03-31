import React from "react";

export default function FlightsListRightSide() {
  return (
    <div className="xl:flex flex-col hidden">
      <div className="flex h-[10em] bg-white gap-1 rounded">
        {[1, 2, 3].map((i) => (
          <div
            key={i}
            className="bg-zinc-200 flex-1 rounded animate-pulse"
          ></div>
        ))}
      </div>

      <div className="h-[5em] w-full rounded bg-zinc-200 animate-pulse mt-10"></div>
      <div className="h-[5em] w-full rounded bg-zinc-200 animate-pulse mt-2"></div>
    </div>
  );
}
