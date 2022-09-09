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
        The Best Quality Coffee In Town For You!
        </h2>
        <div className="mt-6 md:mt-2 relative z-[0] h-[60vh] w-[60%] md:w-[75%] sm:w-[80%]">
          <Map />
        </div>
      </div>
    </>
  );
};

export default AppWrap(MotionWrap(Location, "location"));
