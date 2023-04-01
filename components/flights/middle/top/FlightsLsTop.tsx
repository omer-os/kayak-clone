"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

type PageProps = {
  sort: "cheapest" | "best" | "quickest";
};

export default function FlightsLsTop({ sort }: PageProps) {
  const sortOptions = [
    {
      name: "cheapest",
      desc: "$328 . 8h 10m",
      value: "cheapest",
    },
    {
      name: "best",
      desc: "$328 . 8h 10m",
      value: "best",
    },
    {
      name: "quickest",
      desc: "$2,383 . 7h 35m",
      value: "quickest",
    },
  ];
  const [selectedFilter, setSelectedFilter] = useState<string>(sort);

  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();

  function setNamesView(value: string) {
    const params = searchParams ? new URLSearchParams(searchParams) : undefined;
    if (params) {
      params.set("sort", value);
      router.replace(`${pathname}?${params}`);
    }
  }

  return (
    <div className="bg-white divide-x flex max-w-4xl gap-2 p-2 border border-zinc-300 shadow-xl rounded-xl">
      {sortOptions.map((i) => (
        <div
          key={i.value}
          className={`flex-1 pl-2 relative ${
            i.value === "best" && "sm:flex flex-col hidden"
          } `}
        >
          <button
            onClick={() => {
              {
                setSelectedFilter(i.value);
                setNamesView(i.value);
              }
            }}
            className={`py-2 w-full text-left active:scale-95 transition-all px-3 rounded-xl hover:bg-zinc-200 `}
          >
            <div
              className={`font-bold text-zinc-500 md:text-md text-xs transition-all capitalize ${
                selectedFilter === i.value && "!text-black"
              }`}
            >
              {i.name}
            </div>
            <div
              className={`text-zinc-500 md:text-md text-xs transition-all ${
                selectedFilter === i.value && "!text-black"
              }`}
            >
              {i.desc}
            </div>
          </button>

          {selectedFilter === i.value && (
            <motion.div
              layoutId="piernuognon"
              className="bg-gray-700 right-0 absolute -bottom-2 left-2 h-1"
            />
          )}
        </div>
      ))}
    </div>
  );
}
