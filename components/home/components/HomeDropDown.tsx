"use client";

import { Listbox } from "@headlessui/react";
import { useState } from "react";
import { AiOutlineCaretDown } from "react-icons/ai";

type DropDownProps = {
  options: string[];
  State: string;
  setState: any;
};

export default function HomeDropDown({
  options,
  State,
  setState,
}: DropDownProps) {
  const [Open, setOpen] = useState(false);

  return (
    <div className="relative z-40">
      <Listbox value={State} onChange={(e) => setState(e)}>
        <Listbox.Button
          className={
            "flex gap-2 items-center text-sm capitalize transition-all hover:ring p-2 rounded w-max"
          }
          // onClick={() => setOpen(!Open)}
        >
          {State}
          <AiOutlineCaretDown
            className={`transition-all rotate-0 ${Open && "!rotate-180"}`}
          />
        </Listbox.Button>
        <Listbox.Options
          className={
            "bg-white shadow-lg mt-1 p-2 rounded absolute top-9 left-0 w-max"
          }
        >
          {options.map((option, index) => (
            <Listbox.Option
              className={`py-2 px-3 cursor-pointer hover:bg-zinc-100 capitalize rounded ${
                State === option && "bg-zinc-200"
              }`}
              key={index}
              value={option}
            >
              {option}
            </Listbox.Option>
          ))}
        </Listbox.Options>
      </Listbox>
    </div>
  );
}
