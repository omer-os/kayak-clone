import Image from "next/image";
import Link from "next/link";

export default function Business() {
  return (
    <div>
      <div className="img top-0 h-[85vh] w-full absolute left-0">
        <Image
          src={
            "https://content.r9cdn.net/res/images/horizon/ui/business/registration/header.jpg?v=6fe7d3e3cfeb5c91ca7cb2e8522b5f6d648b87cf&cluster=5"
          }
          fill
          alt="background"
          className="w-full h-full object-cover"
        />

        <div className="absolute bottom-0 left-0 w-full h-[20em] bg-gradient-to-t from-[#192024]"></div>
      </div>
      <div className="mx-auto lg:w-5/6 px-6 md:pt-5 pt-10 mt-24 z-10 relative ">
        <div className="text-5xl font-bold capitalize">
          Business travel.
          <br />
          Made simple.
        </div>
        <p className="text-xl mt-10">
          At KAYAK, we wanted a better way to plan and manage our own business
          travel. But we found tools with limited inventory, outdated
          interfaces, hidden costs and fees that seemed unreasonable. We just
          wanted something like KAYAK – easy and free – so we built it.
        </p>
        <p className="text-xl mt-10">It’s easy to get started.</p>
        <div className="flex gap-3 items-center mt-5">
          <input
            type="text"
            className="bg-white rounded-sm py-2 px-3 w-4/6"
            placeholder="Enter your work email address"
          />

          <button className="capitalize px-3 py-2 rounded bg-orange-600 h-max hover:bg-orange-700 transition-all  active:scale-95">
            sign up
          </button>
        </div>
        <div className="cursor-pointer mt-5 select-none text-sm">
          <span>
            <input type="checkbox" id="condition" value="false" />
            <label className="ml-2" htmlFor="condition">
              <span>
                I accept the{" "}
                <Link className="underline" href="/">
                  Terms and Conditions
                </Link>{" "}
                and{" "}
                <Link className="underline" href="/" target="_blank">
                  Privacy Policy
                </Link>
                .
              </span>
            </label>
          </span>
        </div>
      </div>
      <hr className="border-gray-700 my-5 w-4/6" />
      <p className="mx-auto lg:w-5/6 px-6 md:pt-5 pt-10">
        Already using KAYAK for Business?
        <Link
          className="ml-2 hover:underline text-orange-600 font-bold"
          href="/"
        >
          Sign in
        </Link>
      </p>
      <div className="my-10 mx-auto lg:w-5/6 px-6 md:pt-5 pt-10">
        <iframe
          width="100%"
          height="427"
          src="https://www.youtube.com/embed/Kw1fXwT93oI"
          title="What makes KAYAK for Business different"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        ></iframe>
      </div>
      <hr className="border-gray-100 rounded-full mt-20 my-10 w-full border-[.05em]" />
      <Sec2 />
      <Sec3 />
      <Sec3Extra />
    </div>
  );
}

const Sec2 = () => {
  const WhatWeDo = [
    {
      title: "Save time",
      description: `We search 2,500+ travel providers, so you don’t have to. Find flights
      and hotels from across the internet to plan the trip that’s best for
      you.`,
    },
    {
      title: "Save money",
      description: `Get corporate rates on the best flights and hotels with no subscription or additional fees. (Yes, that means “for free.”)`,
    },
    {
      title: "Save the hassle",
      description: `Keep all your bookings in one place, and easily submit receipts, track travel spending and see where and when your team is traveling.`,
    },
  ];

  return (
    <div className="my-20 mx-auto lg:w-5/6 px-6 md:pt-5 grid lg:grid-cols-3 lg:gap-4 gap-10">
      {WhatWeDo.map((i) => (
        <div key={i.title} className="flex flex-col">
          <div className="font-bold text-3xl">{i.title}</div>
          <div className="text-xl mt-3">{i.description}</div>
        </div>
      ))}
    </div>
  );
};

const Sec3 = () => {
  return (
    <div className="relative h-[85vh] w-full left-0">
      <Image
        src={
          "https://content.r9cdn.net/res/images/horizon/ui/business/registration/office.jpg?v=032a05301ae1fbd3fc9b9c65b1aec3ce16c65ee3&cluster=5"
        }
        fill
        alt="background"
        className="w-full h-full object-cover"
      />

      <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-[#192024] h-[20em]"></div>

      <div className="mx-auto lg:w-5/6 px-6 md:pt-5 pt-10 z-10 relative ">
        <div className="md:text-4xl text-3xl font-bold mt-10">
          What can you do with KAYAK for Business?
        </div>
        <div className="flex md:flex-row items-center flex-col gap-4 mt-20">
          <div className="flex flex-col flex-1">
            <div className="md:text-4xl text-3xl font-bold">Plan</div>
            <div className="md:text-2xl text-xl  font-bold">
              Get your best trip, in budget
            </div>
            <div className="mt-5 text-lg md:text-xl">
              Search hundreds of travel sites to find great deals and plan
              travel your way. Your travel policy (if you have one) is part of
              the search so it’s easy to follow, and if you need approval, it’s
              only a click away.
            </div>
          </div>

          <div className="flex-1 md:w-max flex justify-center px-4 bg-[#212A30] rounded-xl">
            <Image
              src="https://content.r9cdn.net/res/images/horizon/ui/business/registration/policy.png?v=280a9edcb5cd381844de386827852caf07e75a92&cluster=5"
              alt="sss"
              className="object-cover"
              width={400}
              height={200}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const Sec3Extra = () => {
  const WhatCanYouDo = [
    {
      title: "Manage",
      subtitle: "Keep all your bookings in one place",
      description:
        "Automatically create travel itineraries with your flights, boarding passes, hotel and restaurant reservations. The KAYAK app stores everything for you and keeps you up-to-date so you can focus on your business, not your travel.",
      image:
        "https://content.r9cdn.net/res/images/horizon/ui/business/registration/trips.png?v=9c5c5070223ed9ac24c454073ff5ff7636b0e1d7&cluster=5",
    },
    {
      title: "Report",
      subtitle: "Keep tabs on spending",
      description:
        "Easily organize and submit receipts, track travel spending, and visualize where your team is traveling. And if you use Expensify, KAYAK for Business will automatically import receipts and create expense reports for your trips.",
      image:
        "https://content.r9cdn.net/res/images/horizon/ui/business/registration/reporting.png?v=955b56804a26eb42fe5450bd8a4b531602eaa7db&cluster=5",
    },
    {
      title: "Save",
      subtitle: "Access corporate rates and KAYAK savings",
      description:
        "Get all the savings of KAYAK, the world’s leading travel search engine, and access to additional corporate rates on flights and hotels. All for free.",
      image:
        "https://content.r9cdn.net/res/images/horizon/ui/business/registration/savings.png?v=259a8fe00e014d7ef4d4c8a5f920610fe17dd0a2&cluster=5",
    },
  ];

  return (
    <div className="flex flex-col gap-10 mt-10">
      {WhatCanYouDo.map((i) => (
        <div
          key={i.title}
          className="mx-auto lg:w-5/6 flex-1 px-6 md:pt-5 pt-10 z-10 relative "
        >
          <div className="flex md:flex-row items-center flex-col gap-4 mt-20">
            <div className="flex flex-col flex-1">
              <div className="md:text-4xl text-3xl font-bold">{i.title}</div>
              <div className="md:text-2xl text-xl  font-bold">
                {i.subtitle}{" "}
              </div>
              <div className="mt-5 text-lg md:text-xl">{i.description}</div>
            </div>

            <div className="flex-1 md:w-max flex justify-center px-4 bg-[#212A30] rounded-xl">
              <Image
                src={i.image}
                alt="sss"
                className="object-cover"
                width={400}
                height={200}
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

// const Sec4 = () => {
//   return (
//     <div className="flex gap-5">
//       <div className="flex flex-col">
//         <div className="text-xl font-bold">Business travelers</div>
//       </div>
//     </div>
//   );
// };
