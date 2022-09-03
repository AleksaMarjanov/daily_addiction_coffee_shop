import { HiMenuAlt4, HiX } from "react-icons/hi";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import logo from "../assets/logo.jpg";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav
      className="w-full flex justify-between items-center pt-4 pr-8
      fixed z-[2] backdrop-blur-sm sm:pr-0 border border-b-slate-300 border-transparent bg-gray-100"
    >
      <div className="flex items-center justify-start mb-3">
        <a href="/">
          {/* <p className="font-poppins text-xl ml-3">Daily Addiction</p> */}
          <Image
            src={logo}
            alt="logo"
            width={70}
            height={70}
            className="rounded-full"
            objectFit="cover"
          />
        </a>
        <a
          href="tel:701-651-4989"
          className="font-poppins ml-5 text-sm xs:hidden sm:hidden"
        >
          📞(701)-651-4989
        </a>
      </div>
      <ul className="flex-1 flex items-center justify-center list-none md:hidden">
        {["home", "about", "events", "menu", "gallery", "contact"].map(
          (item) => (
            <li
              className="mt-0 mr-4 cursor-pointer flex items-center justify-center font-poppins "
              key={`link-${item}`}
            >
              <div className="w-[5px] h-[5px] rounded-full mb-[5px] bg-transparent hover:bg-gray-400" />
              <a
                href={`#${item}`}
                className="text-gray-500 flex flex-col uppercase font-normal transition-all ease-in-out duration-500 hover:text-secondary-color"
              >
                {item}
              </a>
            </li>
          )
        )}
      </ul>

      <div className="w-[35px] h-[35px] flex rounded-full relative items-center justify-center xl:hidden md:block mt-2 mr-4 xl:">
        <HiMenuAlt4
          onClick={() => setToggle(true)}
          className="w-[35px] h-[35px] text-secondary-color"
        />

        {toggle && (
          <motion.div
            whileInView={{ x: [300, 0] }}
            transition={{ duration: 0.85, ease: "easeOut" }}
            className="fixed top-0 bottom-0 right-0 z-5 p-4 xs:w-full w-[80%]
             min-h-screen flex flex-col items-end justify-end bg-white bg-cover bg-repeat shadow-xl"
          >
            <HiX
              onClick={() => setToggle(false)}
              className="w-[35px] h-[35px] text-secondary-color "
            />
            <ul className="list-none p-0 m-0 h-full w-full flex items-start justify-start flex-col">
              <div>
              <a href='/'>
                <Image
                  src={logo}
                  alt="logo"
                  width={120}
                  height={40}
                  className="rounded-xl"
                  objectFit="cover"
                />
              </a>
                {["home", "about", "events", "menu", "gallery", "contact"].map(
                  (item) => (
                    <li key={item} className="m-4">
                      <a
                        href={`#${item}`}
                        className="text-gray-500 no-underline md:text-2xl xs:text-lg
                    uppercase font-poppins font-semibold transition-all ease-in-out duration-500 hover:text-secondary-color"
                        onClick={() => setToggle(false)}
                      >
                        {item}
                      </a>
                    </li>
                  )
                )}
              </div>
            </ul>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
