import { HiOutlineMenu } from "react-icons/hi";

export default function SideBar() {
  return (
    <div className="p-2 flex flex-col border-r border-zinc-300 h-full w-[15em] lg:relative fixed top-0 bottom-0 left-0">
      <button className="p-2 m-2 rounded text-zinc-600 w-max">
        <HiOutlineMenu size={25} />
      </button>

      <div className="flex flex-col gap-3 mt-8">
        <div className="flex items-center gap-4 p-2 capitalize rounded ">
          <p className="w-3/6 rounded h-7 bg-zinc-300 animate-pulse"></p>
        </div>

        <div className="w-full h-[0.05em] bg-zinc-300" />

        {[1, 2, 3, 4, 5, 6].map((i) => (
          <ListItem key={i} />
        ))}
      </div>
    </div>
  );
}

//
//
//

const ListItem = () => {
  return (
    <div
      className={`active:scale-95 rounded flex gap-4 items-center text-sm capitalize py-3 px-4  transition-all relative w-full h-14 bg-zinc-300 animate-pulse`}
    ></div>
  );
};
