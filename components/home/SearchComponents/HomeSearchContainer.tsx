"use client";
import { FaPlaneArrival, FaPlaneDeparture } from "react-icons/fa";
import { useState } from "react";
import HomeDropDown from "./HomeDropDown";
import HomeInput from "./HomeInput";
import { BsArrowLeftRight } from "react-icons/bs";
import HomeDate from "./HomeDate";
import TheDateComponent from "./TheDateComponent";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { BiSearch } from "react-icons/bi";
import { AiFillCaretDown } from "react-icons/ai";
import PassengersComponent from "./PassengersComponent";

export default function HomeSearchContainer() {
  const [From, setFrom] = useState("");
  const [OpenInput, setOpenInput] = useState<"from" | "to" | null>(null);
  const [TripDirection, setTripDirection] = useState<
    "one way trip" | "round trip"
  >("one way trip");
  const [TripClass, setTripClass] = useState<"business" | "economy">("economy");

  const [Adults, setAdults] = useState(1);
  const [Children, setChildren] = useState(0);
  const [Babies, setBabies] = useState(0);

  const [ShowDateComponent, setShowDateComponent] = useState(false);
  const [ShowPassengersDialog, setShowPassengersDialog] = useState(false);

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
    <div className="flex flex-col gap-2 py-4 ">
      <div className="flex flex-wrap gap-1 sm:gap-4 ">
        <HomeDropDown
          options={["one way trip", "round trip"]}
          State={TripDirection}
          setState={setTripDirection}
        />

        <HomeDropDown
          State={TripClass}
          setState={setTripClass}
          options={["business", "economy"]}
        />

        <button
          onClick={() => setShowPassengersDialog(!ShowPassengersDialog)}
          className="flex items-center gap-2 px-3 py-2 text-xs capitalize transition-all bg-white rounded active:scale-95 hover:bg-zinc-100"
        >
          passengers
          <AiFillCaretDown />
        </button>
      </div>

      <div className="flex flex-col gap-3 lg:flex-row">
        <div className="relative flex flex-col flex-1 gap-3 sm:flex-row">
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
          <motion.button
            layout
            onClick={() => {
              setFrom(To);
              setTo(From);
            }}
            className="absolute z-10 flex items-center justify-center w-10 h-10 p-2 rotate-90 rounded md:w-14 sm:h-auto sm:right-0 sm:top-0 bg-zinc-200 sm:relative top-10 right-4 sm:rotate-0 sm:ring-0 ring-4 ring-white"
          >
            <BsArrowLeftRight />
          </motion.button>
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

        <Link
          className="flex items-center justify-center gap-3 p-3 px-5 font-bold text-white capitalize transition-all bg-orange-600 rounded lg:justify-start hover:bg-orange-700 active:scale-95"
          href={`/flights?from=${From}&to=${To}&tripclass=${TripClass}&adults=${Adults}&children=${Children}&babies=${Babies}&departure=${OneWayStartDate}`}
        >
          <span className="relative top-0.5">
            <BiSearch size={19} />
          </span>
          <p>search</p>
        </Link>
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

      <AnimatePresence>
        {ShowPassengersDialog && (
          <PassengersComponent
            Adults={Adults}
            setAdults={setAdults}
            Children={Children}
            setChildren={setChildren}
            Babies={Babies}
            setBabies={setBabies}
            State={ShowPassengersDialog}
            setState={setShowPassengersDialog}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
