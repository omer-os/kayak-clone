import Image from "next/image";
import React from "react";

export default function HomeSec3() {
  return (
    <div>
      <div className="sm:text-2xl text-xl font-bold mt-10">
        Warm up for your next adventure.
      </div>
      <div className="text">
        Days are getting longer and the urge to travel is getting stronger - use
        these guides to save this spring.
      </div>

      <div className="grid md:grid-cols-2 grid-cols-1 mt-4 gap-4">
        <NewsComponent />
        <NewsComponent />
      </div>
    </div>
  );
}

const NewsComponent = () => {
  return (
    <div className="flex flex-col">
      <div className="relative h-[20em]">
        <Image
          src="https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          fill
          alt="something"
          className="rounded-xl object-cover"
        />
      </div>

      <div className="font-bold mt-2 text-xl">
        How to hack in-betweason travel for better deals.
      </div>
      <div>
        Find out why you should swap your summer trip for this sweet-spot season
        instead.
      </div>
    </div>
  );
};
