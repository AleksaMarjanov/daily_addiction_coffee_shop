import React from "react";
import AppWrap from "../src/wrapper/AppWrap";
import MotionWrap from "../src/wrapper/MotionWrap";
import dynamic from "next/dynamic";
import { useRouter } from 'next/router';

const Map = dynamic(() => import("../src/container/Map"), {
  ssr: false,
});

const Location = () => {
  const router = useRouter()

  return (
    <>
      <div className="w-full flex flex-col justify-center items-center mt-5">
        <h2 className="font-poppins font-semibold text-4xl md:text-xl sm:text-sm ">
          Daily Addiction{" "}
          <span className="underline decoration-[#0086bb]/50">Coffeehouse</span>
        </h2>
        <div className="space-y-5 flex flex-col mt-3 items-center justify-center">
          <p className="text-lg underline">307 Main St, Williston, ND 58801</p>
          <a href="tel:701-651-4989" className="ml-5 text-lg underline">
            701.609.5198
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
        <div className="mt-6 md:mt-2 relative z-[0] h-[60vh] w-[80%] md:w-[75%] sm:w-[80%]">
          <Map />
        </div>
        <div className="absolute left-[45%] bottom-0 z-200 -mb-80 minmd:-mb-128">
          <button className='border-2 border-black decoration-none cursor-pointer p-3 minmd:p-1 text-lg minmd:text-sm font-poppins uppercase tracking-[1px] hover:border-[#0086bb] transition-all ease-out' type="button" onClick={() => router.push('https://www.google.com/maps/dir/48.1574907,-103.6397794/daily+addiction+williston+nd/@48.1522838,-103.6395727,15z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x53215b6088f0b3a5:0xbadcade96cc8ebc7!2m2!1d-103.6220281!2d48.1468544')}>Get Directions</button>
        </div>
      </div>
    </>
  );
};

export default AppWrap(MotionWrap(Location, "location"));
