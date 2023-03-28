import React from "react";
import {
  FaBell,
  FaRegCalendarAlt,
  FaSearch,
  FaSuitcaseRolling,
} from "react-icons/fa";

export default function HomeSec2() {
  return (
    <div className="mt-10">
      <div className="sm:text-2xl text-xl font-bold">
        What KAYAK brings to the table.
      </div>

      <div className="grid mt-4 sm:mt-6 lg:grid-cols-4 sm:grid-cols-2 gap-3">
        {[
          {
            title: "Big names, great deals",
            description: "Search 100s of travel sites to compare prices",
            icon: <FaSearch />,
          },
          {
            title: "Book with flexibility",
            description:
              "Use our “no change fees” filter for flights that waive fees",
            icon: <FaRegCalendarAlt />,
          },
          {
            title: "Track prices",
            description: "Not ready to book? Set alerts for when prices drop",
            icon: <FaBell />,
          },
          {
            title: "More than flights",
            description:
              "Find deals for your entire trip from hotels to rental cars",
            icon: <FaSuitcaseRolling />,
          },
        ].map((i, index) => (
          <div
            key={index}
            className="flex sm:flex-col px-3 sm:py-3 py-5 sm:rounded transition-all sm:border border-y border-zinc-300 sm:gap-0 gap-3"
          >
            <div className="min-w-[2.5em] w-[2.5em] h-[2.5em] rounded bg-orange-600/40 flex items-center justify-center text-orange-600">
              {i.icon}
            </div>

            <div className="flex flex-col sm:mt-2">
              <div className="font-bold">{i.title}</div>

              <div className="text-sm text-zinc-500">{i.description}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
