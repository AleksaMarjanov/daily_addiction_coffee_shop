import React from "react";
import AppWrap from '../src/wrapper/AppWrap'
import MotionWrap from '../src/wrapper/MotionWrap'


const Home = () => {
  return (
      <div id="home" className="font-poppins text-3xl flex flex-col justify-start items-start">
        <p>
          This is a home pageee
        </p> 
        <span>This is a spann</span>
        <h2>Specificly brewed coffee to your taste</h2>
      </div>
  );
};

export default AppWrap(MotionWrap(Home,"home"));
