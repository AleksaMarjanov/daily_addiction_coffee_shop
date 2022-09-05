import React from "react";
import AppWrap from '../src/wrapper/AppWrap'
import MotionWrap from '../src/wrapper/MotionWrap'
import Image from 'next/link'
import { images } from '../src/constants'

const Home = () => {
  return (
      <div id="home" className="font-poppins text-3xl flex flex-col justify-start items-start">
        <p>
          This is a home pageee
        </p> 
        <Image
          className="relative"
          src={images.logo}
          objectFit="contain"
          width={1200}
          height={400}
          alt="hero"
        />
        <span>This is a spann</span>/
        <h2>Specificly brewed coffee to your taste</h2>
      </div>
  );
};

export default AppWrap(MotionWrap(Home,"home"));
