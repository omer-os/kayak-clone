import { Listbox } from "@headlessui/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { AiFillInstagram, AiOutlineTwitter } from "react-icons/ai";
import { BsChevronDown } from "react-icons/bs";
import { GrFacebookOption } from "react-icons/gr";

export default function Footer({ ShowSideBar }: { ShowSideBar: boolean }) {
  return (
    <footer
      className={`bg-gray-800 ${!ShowSideBar ? "" : "md:!px-[9em]"} text-white
      


      py-20 sm:px-20 px-6


      flex flex-col
      
      
      `}
    >
      <div className="flex md:flex-row flex-col md:gap-0 gap-20 justify-between flex-1">
        <div className="flex flex-1">
          <div className="flex flex-col gap-3 flex-1">
            <div className="font-bold text-md capitalize">company</div>
            {[
              { name: "About", link: "/about" },
              { name: "Careers", link: "/careers" },
              { name: "Mobile", link: "/mobile" },
              { name: "Blog", link: "/blog" },
              { name: "How we work", link: "/how-we-work" },
            ].map((i, index) => (
              <Link href={i.link} key={i.link} className="text-sm">
                {i.name}
              </Link>
            ))}
          </div>
          <div className="flex flex-col gap-3 flex-1">
            <div className="font-bold text-md capitalize">contact</div>
            {[
              { name: "Help/FAQ", link: "/help-faq" },
              { name: "Press", link: "/press" },
              { name: "Affiliates", link: "/affiliates" },
              { name: "Hotel owners", link: "/hotel-owners" },
              { name: "Partners", link: "/partners" },
              { name: "Advertise with us", link: "/advertise-with-us" },
            ].map((i, index) => (
              <Link href={i.link} key={i.link} className="text-sm">
                {i.name}
              </Link>
            ))}
          </div>
          <div className="flex flex-col gap-3 flex-1">
            <div className="font-bold text-md capitalize">more</div>
            {[
              { name: "Airline fees", link: "/airline-fees" },
              { name: "Airlines", link: "/airlines" },
              { name: "Low fare tips", link: "/low-fare-tips" },
              { name: "Badges & Certificates", link: "/badges-certificates" },
            ].map((i, index) => (
              <Link href={i.link} key={i.link} className="text-sm">
                {i.name}
              </Link>
            ))}
          </div>
        </div>

        <div className="flex flex-col">
          <div className="font-bold text-md">Site / currency</div>

          <button className="md:mt-10 mt-5 hover:bg-white/20 transition-all border border-white rounded flex items-center justify-between py-1 px-3 min-w-[10em]">
            <div className="flex gap-2 items-center">
              🇨🇦
              <div className="font-bold text-xs">Canada</div>
            </div>

            <BsChevronDown />
          </button>
        </div>
      </div>

      <div className="flex sm:gap-10 gap-3 mt-20">
        {[
          { name: "Privacy", link: "/privacy" },
          { name: "Terms & Conditions", link: "/terms-conditions" },
          { name: "Ad Choices", link: "/ad-choices" },
          { name: "©2023 KAYAK", link: "/kayak" },
        ].map((i, index) => (
          <Link
            href={i.link}
            key={i.link + index}
            className="text-zinc-400 text-sm"
          >
            {i.name}
          </Link>
        ))}
      </div>

      <div className="mt-10 text-xs text-zinc-400">
        Search cheap flights with KAYAK. Search for the cheapest airline tickets
        for all the top airlines around the world and the top international
        flight routes. KAYAK searches hundreds of travel sites to help you find
        cheap airfare and book a flight that suits you best. Since KAYAK
        searches many plane tickets sites at once, you can find cheap tickets
        from cheap airlines quickly.
      </div>
      <div className="mt-2 text-xs text-zinc-400">
        KAYAK also helps you find the right hotels for your needs.
      </div>
      <div className="mt-2 text-xs text-zinc-400">
        Not what you’re looking for? Find thousands of other hotels, flights and
        car rentals with KAYAK.
      </div>

      <div>
        <div className="mt-10 flex gap-4">
          {[
            {
              name: "Twitter",
              link: "https://twitter.com/",
              icon: <AiOutlineTwitter />,
            },
            {
              name: "Facebook",
              link: "https://www.facebook.com/",
              icon: <GrFacebookOption />,
            },
            {
              name: "Instagram",
              link: "https://www.instagram.com/",
              icon: <AiFillInstagram />,
            },
          ].map((i, index) => (
            <Link
              className="w-6 h-6 flex rounded items-center justify-center hover:bg-white/20"
              href={i.link}
              key={i.name + index}
            >
              {i.icon}
            </Link>
          ))}
        </div>

        <div className="text-zinc-400 mt-10 mb-20">
          KAYAK is part of Booking Holdings Inc., the world leader in online
          travel & related services.
        </div>
      </div>
    </footer>
  );
}
