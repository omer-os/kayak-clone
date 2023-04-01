import Image from "next/image";
import React from "react";
import { BsChevronDown } from "react-icons/bs";
import * as Popover from "@radix-ui/react-popover";

export default function FlightsTicketCard() {
  return (
    <div className="flex relative lg:flex-row flex-col p-4 rounded-xl shadow-xl bg-white ">
      <div className="img flex items-end lg:items-start justify-start ">
        <img
          src="https://www.freepnglogos.com/uploads/turkish-airlines-logo-emblem-3.png"
          className="lg:w-14 lg:h-14 min-w-10 h-10 object-cover rounded-full"
          alt="airline logo"
        />

        <div className="flex lg:hidden flex-col flex-1">
          <div className="text-xs font-bold">8h 10m</div>
          <div className="text-xs text-zinc-400">LGW - JFK</div>
        </div>
      </div>
      <div className="flex mt-3 lg:mt-0 flex-1 flex-col gap-2">
        <div className="flex items-end gap-5">
          <div className="flex flex-col flex-1">
            <div className="text-xl font-bold min-w-max">
              12:40 Pm - 3:50 Pm
            </div>
            <div className="text-sm text-zinc-400">Norse Atlantic Uk</div>
            <div className="font-bold text-xs">nonstop</div>
          </div>

          <div className="lg:flex hidden flex-col flex-1">
            <div className="text-xl font-bold">8h 10m</div>
            <div className="text-sm text-zinc-400">LGW - JFK</div>
          </div>

          <div className="font-bold text-2xl">$328</div>
        </div>

        <div className="w-full mt-2 lg:!mt:0  h-[.05em] bg-zinc-300" />

        <div className="flex justify-between items-center">
          <div className="flex flex-col">
            <div className="text-xs text-zinc-400">Economy</div>
            <div className="text-xs text-zinc-400">Edereams</div>
          </div>

          <div className="flex min-w-max mt-2 font-bold bg-gradient-to-br from-orange-500 to-orange-700 text-white rounded divide-x-2 h-max">
            <button className="flex-1 active:scale-95 transition-all text-sm px-5 py-2 capitalize flex items-center justify-center">
              view deal
            </button>

            <Popover.Root>
              <Popover.Trigger className="px-3 active:scale-95 transition-all flex items-center justify-center">
                <BsChevronDown />
              </Popover.Trigger>

              <Popover.Portal>
                <Popover.Content
                sideOffset={10}
                  align="end"
                  className="bg-white z-50 rounded-lg overflow-hidden right-0 flex flex-col shadow-xl text-sm"
                >
                  <div className="text-black capitalize">
                    {[
                      {
                        name: "kiwi.com",
                        price: 293,
                      },
                      {
                        name: "studentUniverse",
                        price: 100,
                      },
                    ].map((i) => (
                      <button
                        key={i.name}
                        className="hover:bg-zinc-200 w-full p-3 flex gap-2"
                      >
                        <span className="font-bold">${i.price}</span>
                        <span>{i.name}</span>
                      </button>
                    ))}
                  </div>
                </Popover.Content>
              </Popover.Portal>
            </Popover.Root>
          </div>
        </div>
      </div>

      <div className="flex gap-2 absolute top-2 right-2">
        <Popover.Root>
          <Popover.Trigger>
            <div className="bg-zinc-200 active:scale-95 transition-all active:bg-zinc-300 py-1 px-3 rounded font-bold">
              <img
                src="/svgs/carryon.svg"
                className="w-6 h-5 object-contain"
                alt=""
              />
            </div>{" "}
          </Popover.Trigger>

          <Popover.Portal>
            <Popover.Content
              sideOffset={10}
              align="end"
              className="p-4 w-[15em] rounded-xl shadow-xl bg-white"
            >
              <div className="font-bold">Price breakdown</div>

              <div className="mt-3 flex flex-col">
                <div className="flex justify-between items-center">
                  <div className="flex gap-2 items-center text-xs">
                    <span>
                      <img
                        src="/svgs/ticketicon.svg"
                        className="w-3 h-3 object-cover"
                        alt=""
                      />
                    </span>
                    Ticket price
                  </div>

                  <p>$324</p>
                </div>
              </div>
            </Popover.Content>
          </Popover.Portal>
        </Popover.Root>
        <Popover.Root>
          <Popover.Trigger>
            <div className="bg-zinc-200 active:scale-95 transition-all active:bg-zinc-300 py-1 px-3 rounded font-bold">
              <img
                src="/svgs/checkedbag.svg"
                className="w-6 h-5 object-contain"
                alt=""
              />
            </div>{" "}
          </Popover.Trigger>

          <Popover.Portal>
            <Popover.Content
              sideOffset={10}
              align="end"
              className="p-4 w-[15em] rounded-xl shadow-xl bg-white"
            >
              <div className="font-bold">Price breakdown</div>

              <div className="mt-3 flex flex-col">
                <div className="flex justify-between items-center">
                  <div className="flex gap-2 items-center text-xs">
                    <span>
                      <img
                        src="/svgs/ticketicon.svg"
                        className="w-3 h-3 object-cover"
                        alt=""
                      />
                    </span>
                    Ticket price
                  </div>

                  <p>$324</p>
                </div>
              </div>
            </Popover.Content>
          </Popover.Portal>
        </Popover.Root>
      </div>
    </div>
  );
}




// https://www.kayak.com/flights/LON-NYC/2023-04-12?sort=price_a&attempt=1&lastms=1680383010937&fs=cfc=0;takeoff=1353,2300;bfc=0;transportation=transportation_plane,transportation_flight_train,transportation_flight_train_bus