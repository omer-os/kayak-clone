"use client";

import { Switch, Tab } from "@headlessui/react";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

export default function FlightsListLeftSide() {
  const [enabled, setEnabled] = useState(false);

  return (
    <div className="xl:flex hidden flex-col gap-4">
      <div className="flex relative flex-col bg-white py-2 px-3 rounded-xl border border-zinc-300">
        <div className="font-semibold text-sm">Our Advice</div>
        <div className="text-green-700 text-lg font-bold">Buy now</div>
        <div className="text-zinc-500 text-sm mt-2">
          Prices are unlikely to decrease within 7 days
        </div>

        <div className="flex justify-between border-t border-zinc-300 pt-2 mt-3 items-center">
          <div className="font-bold text-sm">Track prices</div>

          <Switch
            checked={enabled}
            onChange={setEnabled}
            className={`${
              enabled ? "bg-blue-600" : "bg-zinc-500"
            } relative inline-flex h-5 w-10 items-center rounded-full`}
          >
            <span className="sr-only">Track prices</span>
            <span
              className={`${
                enabled ? "translate-x-6" : "translate-x-1"
              } inline-block h-3 w-3 transform rounded-full bg-white transition`}
            />
          </Switch>
        </div>

        <div className="absolute w-10 h-10 top-2 right-2">
          <Image
            src="/svgs/growingsvg.svg"
            alt="growing image"
            width={50}
            height={50}
          />
        </div>
      </div>

      <p className="text-sm">
        4657 of{" "}
        <span className="text-green-600 hover:underline">4984 flights</span>{" "}
      </p>

      <hr className="border-zinc-300" />

      <div>
        <div className="flex justify-between items-center">
          <div className="font-bold">Stops</div>
          <div className="hover:underline text-blue-600 cursor-pointer">
            Reset
          </div>
        </div>

        <div className="flex mt-3 flex-col gap-1">
          {[
            {
              name: "nonstop",
              value: "nonstop",
              checked: false,
              price: 571,
            },
            {
              name: "1 stop",
              value: "1stop",
              checked: false,
              price: 487,
            },
            {
              name: "2+ stop",
              value: "morestops",
              checked: false,
              price: 605,
            },
          ].map((i, index) => (
            <div
              key={index + i.name}
              className="flex cursor-pointer group justify-between items-center"
            >
              <span key={i.name + index}>
                <input
                  type="checkbox"
                  id={i.value}
                  value={i.checked.toString()}
                />
                <label className="ml-2 capitalize" htmlFor={i.value}>
                  {i.name}
                </label>
              </span>
              <div className="hidden group-hover:block text-xs font-bold">
                only
              </div>
              <div className="text-zinc-400 hover:underline">${i.price}</div>
            </div>
          ))}
        </div>
      </div>

      <hr className="border-zinc-300" />

      <div>
        <div className="flex justify-between items-center">
          <div className="font-bold">Airports</div>
          <div className="hover:underline text-blue-600 cursor-pointer">
            Reset
          </div>
        </div>

        <div className="flex mt-3 flex-col gap-1">
          {[
            {
              country: "london",
              items: [
                {
                  name: "LHR: Heathrow",
                  value: "Heathrow",
                  checked: false,
                  price: 571,
                },

                {
                  name: "LHR: Heathrow",
                  value: "Heathrow",
                  checked: false,
                  price: 571,
                },

                {
                  name: "LHR: Heathrow",
                  value: "Heathrow",
                  checked: false,
                  price: 571,
                },
              ],
            },
            {
              country: "new york",
              items: [
                {
                  name: "LHR: Heathrow",
                  value: "Heathrow",
                  checked: false,
                  price: 571,
                },

                {
                  name: "LHR: Heathrow",
                  value: "Heathrow",
                  checked: false,
                  price: 571,
                },

                {
                  name: "LHR: Heathrow",
                  value: "Heathrow",
                  checked: false,
                  price: 571,
                },
              ],
            },
          ].map((i, index) => (
            <div key={i.country + index} className="flex flex-col select-none">
              <div className="flex gap-1 mt-1 flex-col">
                <div className="font-bold capitalize">{i.country}</div>
                {i.items.map((c, index) => (
                  <div className="pl-2" key={c.name + index}>
                    <div className="flex cursor-pointer group justify-between items-center">
                      <span key={c.name + index}>
                        <input
                          type="checkbox"
                          id={c.value}
                          value={c.checked.toString()}
                        />
                        <label className="ml-2 capitalize" htmlFor={c.value}>
                          {c.name}
                        </label>
                      </span>
                      <div className="hidden group-hover:block text-xs font-bold">
                        only
                      </div>
                      <div className="text-zinc-400 hover:underline">
                        ${c.price}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <hr className="border-zinc-300" />

      <div className="">
        <div className="font-bold">Times</div>

        <div className="mt-2">
          <Tab.Group>
            <Tab.List className={"flex p-1 rounded ring-[.05em] ring-black"}>
              <Tab
                className={`py-1 flex-1  rounded aria-[selected=true]:bg-white aria-[selected=true]:font-bold transition-all
              `}
              >
                Take-off
              </Tab>
              <Tab
                className={`py-1 flex-1 rounded aria-[selected=true]:bg-white aria-[selected=true]:font-bold transition-all
              `}
              >
                Landing
              </Tab>
            </Tab.List>
            <Tab.Panels>
              <Tab.Panel>
                <div className="flex flex-col">
                  <div className="text-xs mt-2">Take-off from LON</div>
                  <div className="text-xs">Fri 6:00 AM - Fri 11:00 PM</div>
                  <div className="text-xs mt-2">Take-off from NYC</div>
                  <div className="text-xs">Fri 12:00 AM - Sat 12:00 AM </div>
                </div>
              </Tab.Panel>
              <Tab.Panel>Content 2</Tab.Panel>
            </Tab.Panels>
          </Tab.Group>
        </div>
      </div>
    </div>
  );
}
