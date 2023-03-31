export default function HomeLoading() {
  return (
    <div className="flex flex-col gap-2 py-4 ">
      <div className="flex flex-wrap gap-1 sm:gap-4 ">
        <div className="rounded h-8 w-[5em] bg-zinc-200 animate-pulse"></div>
        <div className="rounded h-8 w-[5em] bg-zinc-200 animate-pulse"></div>
        <div className="rounded h-8 w-[5em] bg-zinc-200 animate-pulse"></div>
      </div>

      <div className="flex md:flex-row flex-col mt-2 gap-3">
        <div className="min-h-[3em] flex-1 w-full bg-zinc-200 animate-pulse rounded"></div>
        <div className="min-h-[3em] flex-1 w-full bg-zinc-200 animate-pulse rounded"></div>

        <div className="flex gap-3">
          <div className="min-h-[3em] md:min-w-[10em] flex-1 w-full bg-zinc-200 animate-pulse rounded"></div>
          <div className="min-h-[3em] md:min-w-[10em] flex-1 w-full bg-zinc-200 animate-pulse rounded"></div>
        </div>
      </div>

      <div className="mt-20">
        <div className="min-h-[3em] md:max-w-[20em] mr-32 bg-zinc-200 animate-pulse rounded"></div>

        <div className="flex gap-4 flex-wrap mt-10">
          <div className="bg-zinc-200 animate-pulse rounded-xl h-[10em] flex-grow min-w-[15em]"></div>
          <div className="bg-zinc-200 animate-pulse rounded-xl h-[10em] flex-grow min-w-[15em]"></div>
          <div className="bg-zinc-200 animate-pulse rounded-xl h-[10em] flex-grow min-w-[15em]"></div>
          <div className="bg-zinc-200 animate-pulse rounded-xl h-[10em] flex-grow min-w-[15em]"></div>
        </div>
      </div>
    </div>
  );
}
