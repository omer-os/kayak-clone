"use client";

import { ElasticSearch } from "@/interface/ElasticSearch";
import { Combobox } from "@headlessui/react";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { MdOutlineSubdirectoryArrowRight } from "react-icons/md";

type InputProps = {
  icon: React.ReactNode;
  placeholder: string;
  OpenInput: "from" | "to" | null;
  setOpenInput: any;
  name: string;
  State: string;
  setState: any;
};

export default function HomeInput({
  icon,
  placeholder,
  State,
  setState,
  setOpenInput,
  OpenInput,
  name,
}: InputProps) {
  const [results, setResults] = useState<ElasticSearch[]>([]);
  const [selectedFromList, setSelectedFromList] = useState(false);

  useEffect(() => {
    async function fetchResults() {
      const response = await fetch(
        `https://booking.kayak.com/mvm/smartyv2/search?f=j&s=airportonly&where=${State}`
      );
      const data = await response.json();
      setResults(data);
    }

    fetchResults();
  }, [State]);

  function handleInputBlur() {
    if (!selectedFromList) {
      setState("");
    }
  }

  return (
    <>
      <div className="flex flex-col relative flex-1">
        <Combobox value={State} onChange={setState}>
          <div className="relative">
            <Combobox.Input
              className="w-full h-full bg-zinc-200 sm:py-3 py-4 rounded px-4 pl-10"
              value={State}
              onChange={(e) => {
                setState(e.target.value);
                setSelectedFromList(false);
              }}
              onBlur={handleInputBlur}
              onClick={() => setOpenInput(name)}
              type="text"
              placeholder={placeholder}
            />
            <div className="z-10 absolute sm:top-3.5 top-[1.3em] left-4">{icon}</div>
          </div>

          <Combobox.Options
            className={
              "absolute rounded sm:shadow-xl left-0 sm:top-12 top-[3em] mt-2 right-0 bg-white sm:p-3 p-2 z-40 min-w-max sm:max-h-[20em] overflow-y-scroll"
            }
          >
            {results.map((result: ElasticSearch, index: number) => {
              const previousImage =
                index > 0
                  ? results[index - 1].destination_images?.image_jpeg
                  : null;
              const currentImage = result.destination_images?.image_jpeg;
              const showImage = currentImage !== previousImage || index === 0;

              return (
                <Combobox.Option
                  key={index + result.id}
                  onClick={() => {
                    setState(result.id);
                    setOpenInput(null);
                    setSelectedFromList(true);
                  }}
                  value={result.id}
                >
                  <motion.li
                    layout
                    initial={{
                      y: 20,
                      opacity: 0,
                    }}
                    animate={{
                      y: 0,
                      opacity: 1,
                    }}
                    exit={{
                      y: 20,
                      opacity: 0,
                    }}
                    className="flex gap-3 rounded hover:bg-gray-100 justify-between items-center p-2 cursor-pointer"
                  >
                    {" "}
                    {showImage ? (
                      <div className="min-w-10 h-10">
                        <img
                          className="w-full h-full rounded object-cover"
                          src={currentImage}
                          alt=""
                        />
                      </div>
                    ) : (
                      <MdOutlineSubdirectoryArrowRight className="text-black ml-3" />
                    )}
                    <div className="flex flex-col flex-1">
                      <div className="font-bold">{result.name}</div>
                      <div className="text-zinc-500 text-xs truncate max-w-[20em] ">
                        {result.cityname}
                      </div>
                    </div>
                    <div className="font-bold text-white bg-orange-600 py-1 px-2 rounded text-xs">
                      {result.id}
                    </div>
                  </motion.li>
                </Combobox.Option>
              );
            })}
          </Combobox.Options>
        </Combobox>
      </div>
    </>
  );
}
