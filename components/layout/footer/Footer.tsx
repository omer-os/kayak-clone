import { Listbox } from "@headlessui/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BiDownArrow } from "react-icons/bi";

export default function Footer({ ShowSideBar }: { ShowSideBar: boolean }) {
  return (
    <footer
      className={`bg-gray-800 py-20 px-10
    ${!ShowSideBar ? "md:!pl-[16em]" : "md:!px-[9em]"}
    flex lg:flex-row flex-col gap-10 text-white
    `}
    >
      <div className="flex gap-10">
        <div className="flex flex-col capitalize flex-1">
          <div className="font-bold mb-2">Company</div>
          <div className="text">about</div>
          <div className="text">about</div>
          <div className="text">about</div>
          <div className="text">about</div>
        </div>
        <div className="flex flex-col capitalize flex-1">
          <div className="font-bold mb-2">Company</div>
          <div className="text">about</div>
          <div className="text">about</div>
          <div className="text">about</div>
          <div className="text">about</div>
        </div>
        <div className="flex flex-col capitalize flex-1">
          <div className="font-bold mb-2">Company</div>
          <div className="text">about</div>
          <div className="text">about</div>
          <div className="text">about</div>
          <div className="text">about</div>
        </div>
      </div>
      <div className="flex flex-col flex-1">
        <div className="font-bold capitalize">site / currency</div>

        <Listbox>
          <Listbox.Button
            className={
              "flex min-w-[15em] border border-gray-400 rounded items-center p-2 justify-between mt-4 hover:bg-gray-600/30"
            }
          >
            <div className="flex gap-2">United States</div>
            <BiDownArrow />
          </Listbox.Button>

          <Listbox.Options className={"flex flex-col mt-2 gap-1"}>
            <Listbox.Option
              value={"s"}
              className={"w-full p-2 rounded bg-gray-600/40"}
            >
              sss
            </Listbox.Option>
            <Listbox.Option
              value={"s"}
              className={"w-full p-2 rounded bg-gray-600/40"}
            >
              sss
            </Listbox.Option>
            <Listbox.Option
              value={"s"}
              className={"w-full p-2 rounded bg-gray-600/40"}
            >
              sss
            </Listbox.Option>
          </Listbox.Options>
        </Listbox>
      </div>
    </footer>
  );
}
