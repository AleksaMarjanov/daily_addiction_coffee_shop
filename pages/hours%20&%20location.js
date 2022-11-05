import React from "react";
import AppWrap from "../src/wrapper/AppWrap";
import MotionWrap from "../src/wrapper/MotionWrap";
import dynamic from "next/dynamic";

const Map = dynamic(() => import("../src/container/Map"), {
  ssr: false,
});

const Location = () => {
  return (
    <>
      <div className="w-full flex flex-col justify-center items-center mt-5">
        <h2 className="font-poppins font-semibold text-4xl md:text-xl sm:text-sm ">
          Daily Addiction{" "}
          <span className="underline decoration-[#0086bb]/50">Coffehouse</span>
        </h2>
        <div className="space-y-5 flex flex-col mt-3 items-center justify-center">
          <p className="text-lg underline">307 Main St, Williston, ND 58801</p>
          <a href="tel:701-651-4989" className="ml-5 text-lg underline">
            701.651.4989
          </a>
          <p className="text-lg text-center justify-center items-center">
            9AM–4PM
            <br />
            Saturday
            <br />
            Sunday Closed
            <br />
            <span>7AM–5PM</span>
            <br />
            Monday - Friday
          </p>
        </div>
        <div className="mt-6 md:mt-2 relative z-[0] h-[60vh] w-[60%] md:w-[75%] sm:w-[80%]">
          <Map />
        </div>
      </div>
    </>
  );
};

export default AppWrap(MotionWrap(Location, "location"));
