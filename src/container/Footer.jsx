import React, { useEffect, useState } from "react";
import { SocialIcon } from "react-social-icons";
import { client } from "../client";
import { motion } from "framer-motion";

const Footer = () => {
  const [socials, setSocials] = useState([]);

  useEffect(() => {
    const query = "*[type == 'social']";

    client.fetch(query).then((data) => {
      setSocials(data);
      console.log({data})
    });
  }, []);


  return (
    <div className="relative bottom-0 mt-2 flex p-5 sm:p-2 px-10 items-start justify-between max-w-7xl mx-auto z-10 xl:items-center">
      <motion.div
        initial={{
          x: -500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.5,
        }}
       
        className="flex flex-row items-center"
      >
      {socials.map((social) => (
        <SocialIcon
          key={social._id}
          url={social.url}
          fgColor="gray"
          bgColor="transparent"
        />
      
        ))} 
        <motion.div
         whileHover={{
          scale: 1.2,
         }}
          >
            <SocialIcon 
      url={`https://facebook.com/dailyaddictionch`}
      fgColor="gray"
      bgColor="transparent"
      />
          </motion.div>
          <motion.div
         whileHover={{
          scale: 1.2,
         }}
          >
      <SocialIcon 
      url={`https://www.instagram.com/dailyaddictioncoffeehouse/`}
      fgColor="gray"
      bgColor="transparent"
      />
      </motion.div>
      <motion.div
         whileHover={{
          scale: 1.2,
         }}
          >
      <SocialIcon 
      url={`https://www.doordash.com/en-CA/store/daily-addiction-coffee-house-williston-1312569/`}
      fgColor="gray"
      bgColor="transparent"
      />
        </motion.div>
      </motion.div>
      {/* <div className="flex flexBetween sm:text-xs sm:mt-3">
        <p className="font-poppins xs:font-sm">
          {new Date().getFullYear()} @Aleksa All Rights Reserved
        </p>
      </div> */}
    </div>
  );
};

export default Footer;
