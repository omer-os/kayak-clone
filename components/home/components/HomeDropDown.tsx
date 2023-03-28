"use client";

import { Listbox } from "@headlessui/react";
import { useState } from "react";
import { AiOutlineCaretDown } from "react-icons/ai";

type DropDownProps = {
  options: {
    option: string;
    value: string;
  }[];
  State: string;
  setState: any;
};

export default function HomeDropDown({
  options,
  State,
  setState,
}: DropDownProps) {
  return (
    <Listbox value={State} onChange={(e) => setState(e)}>
      <Listbox.Button
        className={
          "flex gap-2 items-center text-sm capitalize transition-all hover:ring p-2 rounded w-max"
        }
      >
        {State}
        <AiOutlineCaretDown />
      </Listbox.Button>
      <Listbox.Options className={"bg-white shadow-lg w-max mt-1 p-2 rounded"}>
        {options.map((option, index) => (
          <Listbox.Option
            className={`py-2 px-3 cursor-pointer hover:bg-zinc-100 capitalize rounded
            ${State === option.value && "bg-zinc-200"}
            `}
            key={index}
            value={option.value}
          >
            {option.option}
          </Listbox.Option>
        ))}
      </Listbox.Options>
    </Listbox>
  );
}
