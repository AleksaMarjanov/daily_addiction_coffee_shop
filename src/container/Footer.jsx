import React from 'react'
import { images } from "../constants";
import Image from 'next/image'

const Footer = () => {
  return (
    <div className="p-5 -right-14 border-t-2  dark:bg-nft-dark bg-white  dark:border-nft-black-1 border-nft-gray-1 overflow-hidden">
<div className="flex flex-row space-x-2 items-center justify-center"> 
<Image 
      src={images.logo}
      width={120}
      height={120}
      className="rounded-full"
      alt="logo"
      />
      <p className="pb-0 font-poppins font-semibold text-lg sm:text-xs sm:mt-5">
        307 Main St<br />
        Williston 58801<br />
        701-651-4989<br/>
      </p>
      <p className=" font-semibold font-poppins text-lg  pl-14 sm:text-xs pb-4 sm:pl-0">
        HOURS:<br />
        Mon-Sun 7AM-7PM<br/>

      </p>
</div>
          <div className="flex flexBetween sm:text-xs sm:mt-3">
          <p className="font-poppins xs:font-sm">{new Date().getFullYear()}  @Aleksa All Rights Reserved</p>
          </div>
      </div>
  );
};


export default Footer