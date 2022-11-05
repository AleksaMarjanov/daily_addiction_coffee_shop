import React from "react";
import AppWrap from "../src/wrapper/AppWrap";
import MotionWrap from "../src/wrapper/MotionWrap";

const About = () => {
  return (
    <div className="flex flex-col">
      <div id="about" className="flex flex-col font-poppins ">
        <div className="animate-extend2 overflow-x-hidden no-scrollbar whitespace-nowrap duration-700 text-6xl md:text-4xl font-semibold">
          About
        </div>
        <span className="items-center justify-center mt-5 tracking-[5px]">
              Meet Our Staff
        </span>
      </div>
    </div>
  );
};

export default AppWrap(MotionWrap(About, "about"));
