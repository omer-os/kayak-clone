"use client";
import { FaPlaneArrival, FaPlaneDeparture } from "react-icons/fa";
import { useState } from "react";
import HomeDropDown from "./HomeDropDown";
import HomeInput from "./HomeInput";
import { BsArrowLeftRight } from "react-icons/bs";
import HomeDate from "./HomeDate";
import TheDateComponent from "./TheDateComponent";
import { AnimatePresence } from "framer-motion";

export default function HomeSearchContainer() {
  const [From, setFrom] = useState("");
  const [OpenInput, setOpenInput] = useState<"from" | "to" | null>(null);
  const [TripDirection, setTripDirection] = useState<
    "one way trip" | "round trip"
  >("one way trip");
  const [TripClass, setTripClass] = useState<"business" | "economy">("economy");

  const [ShowDateComponent, setShowDateComponent] = useState(false);

  const [OneWayStartDate, setOneWayStartDate] = useState("");
  const [TwoWaysTripDate, setTwoWaysTripDate] = useState<any>([
    {
      startDate: new Date(),
      endDate: null,
      key: "selection",
    },
  ]);

  const [To, setTo] = useState("");
  return (
    <div className="flex flex-col py-4 gap-2">
      <div className="flex gap-4 ">
        {/* <HomeDropDown
          options={[
            { option: "round trip", value: "round" },
            { option: "one way", value: "oneway" },
          ]}
          State={TripDirection}
          setState={setTripDirection}
        /> */}
        <HomeDropDown
          options={["one way trip", "round trip"]}
          State={TripDirection}
          setState={setTripDirection}
        />
      </div>

      <div className="flex gap-3 lg:flex-row flex-col">
        <div className="flex gap-3 sm:flex-row flex-col relative flex-1">
          <HomeInput
            icon={<FaPlaneDeparture />}
            placeholder="Going From"
            State={From}
            setState={setFrom}
            setOpenInput={setOpenInput}
            OpenInput={OpenInput}
            name="from"
            key={"from"}
          />
          <button
            onClick={() => {
              setFrom(To);
              setTo(From);
            }}
            className="p-2 w-10 h-10 sm:h-auto sm:right-0 sm:top-0 bg-zinc-200 flex items-center justify-center rounded sm:relative absolute top-10 right-4 sm:rotate-0 rotate-90 sm:ring-0 ring-4 ring-white z-10"
          >
            <BsArrowLeftRight />
          </button>
          <HomeInput
            State={To}
            setState={setTo}
            setOpenInput={setOpenInput}
            OpenInput={OpenInput}
            icon={<FaPlaneArrival />}
            placeholder="Going To"
            name="to"
            key={"to"}
          />
        </div>

        <HomeDate
          TwoWaysTripDate={TwoWaysTripDate}
          OneWayStartDate={OneWayStartDate}
          setShowDateComponent={setShowDateComponent}
          TripDirection={TripDirection}
        />
      </div>

      <AnimatePresence>
        {ShowDateComponent && (
          <TheDateComponent
            ShowDatePicker={ShowDateComponent}
            setShowDatePicker={setShowDateComponent}
            SelectedType={TripDirection}
            TwoWaysTripDate={TwoWaysTripDate}
            setTwoWaysTripDate={setTwoWaysTripDate}
            OneWayStartDate={OneWayStartDate}
            setOneWayStartDate={setOneWayStartDate}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
