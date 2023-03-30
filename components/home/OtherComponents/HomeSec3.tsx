"use client";

import { Carousel } from "@trendyol-js/react-carousel";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type CardProps = {
  image: string;
  title: string;
  tag: string;
  price: number;
};

export default function HomeSec3() {
  const cardData: CardProps[] = [
    {
      image:
        "https://images.unsplash.com/photo-1680125533385-eb2bb7464c48?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      title: "Frankfurt am Main",
      price: 43,
      tag: "nonstop",
    },
    {
      image:
        "https://images.unsplash.com/photo-1680004661457-772c03735a30?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyNHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
      title: "Copenhagen",
      price: 143,
      tag: "nonstop",
    },
    {
      image:
        "https://images.unsplash.com/photo-1680079527072-b98a5caad9dc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyOHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
      title: "Vienna",
      price: 65,
      tag: "nonstop",
    },
    {
      image:
        "https://images.unsplash.com/photo-1680034200919-26a16a426d34?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyN3x8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
      title: "Amsterdam",
      price: 100,
      tag: "nonstop",
    },
  ];

  return (
    <div className="mt-10 overflow-hidden flex-1">
      <header className="flex  justify-between items-end">
        <div className="flex flex-col">
          <div className="sm:text-3 xl text-xl font-bold">Hop on, hop off</div>
          <div className="text">
            Skip the layovers and fly nonstop to these destinations
          </div>
        </div>

        <Link href="/" className="text-blue-600 underline font-bold">
          See More
        </Link>
      </header>
      <div className="gap-4 sm:gap-0 grid xl:grid-cols-4 lg:grid-cols-2 grid-cols-1 mt-4">
        {cardData.map((i, index) => (
          <Card
            key={index + i.title}
            image={i.image}
            title={i.title}
            tag={i.tag}
            price={i.price}
          />
        ))}
      </div>
    </div>
  );
}

const Card = ({ image, title, tag, price }: CardProps) => {
  return (
    <div>
      <Link
        href="/"
        className="flex flex-col hover:bg-zinc-100 sm:p-[1em] transition-all bg-white"
      >
        <div className="img relative w-full h-[23em]">
          <Image
            src={image}
            alt={title + " image"}
            fill
            className="rounded-xl object-cover"
          />
          <div className="absolute bottom-4 left-3 rounded bg-white p-2 text-xs font-semibold capitalize">
            {tag}
          </div>
        </div>{" "}
        <div className="font-bold mt-2 capitalize text-lg">{title}</div>
        <div className="text">from ${price}</div>
      </Link>
    </div>
  );
};
