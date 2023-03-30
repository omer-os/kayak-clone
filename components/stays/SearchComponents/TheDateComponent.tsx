"use client";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
// @ts-ignore
import { DateRange, Calendar } from "react-date-range";
import { motion } from "framer-motion";
import { MdOutlineClose } from "react-icons/md";
import DialogBox from "@/components/common/DialogBox";
type TheDateComponentProps = {
  SelectedType: string;
  setOneWayStartDate: (date: string) => void;
  TwoWaysTripDate: { startDate: string; endDate: string }[];
  setTwoWaysTripDate: (date: { startDate: string; endDate: string }[]) => void;
  setShowDatePicker: (show: boolean) => void;
  OneWayStartDate: string;
  ShowDatePicker: boolean;
};

export default function TheDateComponent({
  SelectedType,
  setOneWayStartDate,
  TwoWaysTripDate,
  setTwoWaysTripDate,
  setShowDatePicker,
  OneWayStartDate,
  ShowDatePicker,
}: TheDateComponentProps) {
  function formatDate(date: string) {
    const d = new Date(date);
    const year = d.getFullYear();
    const month = String(d.getMonth() + 1).padStart(2, "0");
    const day = String(d.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  }

  return (
    <DialogBox State={ShowDatePicker} setState={setShowDatePicker}>
      <motion.div
        animate={{
          bottom: [-340, 0],
          opacity: [0, 1],
        }}
        exit={{
          bottom: -340,
          opacity: 0,
        }}
        transition={{
          type: "just",
        }}
        className=" w-max -translate-x-[50%] -translate-y-[50%] left-[50%] top-[50%] h-max fixed z-50 flex flex-col bg-zinc-200 px-5 py-3 rounded-xl transition-all sm:scale-110"
      >
        <nav className="flex items-center justify-between py-3 text-lg border-b border-zinc-300">
          <div className="capitalize">Select your trip</div>

          <div
            onClick={() => setShowDatePicker(false)}
            className="flex items-center justify-center w-10 h-10 transition-all bg-white rounded-full cursor-pointer hover:bg-zinc-300 active:scale-95"
          >
            <MdOutlineClose />
          </div>
        </nav>

        <div dir="ltr">
          {SelectedType === "one way trip" && (
            <Calendar
              minDate={new Date()}
              className="w-full"
              date={new Date()}
              onChange={(date: string) =>
                setOneWayStartDate(formatDate(formatDate(date)))
              }
            />
          )}
          {SelectedType === "round trip" && (
            <DateRange
              minDate={new Date()}
              editableDateInputs={true}
              onChange={(item: any) => {
                setTwoWaysTripDate([item.selection]);
              }}
              moveRangeOnFirstSelection={false}
              ranges={TwoWaysTripDate}
              min
            />
          )}
        </div>

        <motion.div layout className="flex gap-2 mt-3">
          <motion.div
            layout
            className="flex-1 p-3 text-center bg-white border rounded border-zinc-300"
          >
            <p className="font-bold">Departure </p>
            <p>
              {SelectedType === "round trip" ? (
                <>{formatDate(TwoWaysTripDate[0].startDate)}</>
              ) : (
                <>{OneWayStartDate}</>
              )}
            </p>
          </motion.div>
          {SelectedType === "round trip" && (
            <motion.div
              layout
              className="flex-1 p-3 text-center bg-white border rounded border-zinc-300"
            >
              <p className="font-bold"> Return Date </p>
              <p>{formatDate(TwoWaysTripDate[0].endDate)}</p>
            </motion.div>
          )}
        </motion.div>

        <button
          onClick={() => {
            setShowDatePicker(false);
          }}
          className="p-2 mt-3 font-bold text-white transition-all bg-orange-600 rounded active:scale-95 active:bg-orange-700"
        >
          set date
        </button>
      </motion.div>
    </DialogBox>
  );
}
