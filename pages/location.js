import React from "react";
import AppWrap from "../src/wrapper/AppWrap";
import MotionWrap from "../src/wrapper/MotionWrap";
import dynamic from "next/dynamic";

const Map = dynamic(() => import("../src/container/Map"), {
  ssr: false,
});

const Location = () => {
  return (
      
      <div className="relative z-[0] h-[40vh] w-[50%]">
        <Map />
      </div>
  );
};

export default AppWrap(MotionWrap(Location, "location"));
 