import { HiMenuAlt4, HiX } from "react-icons/hi";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import logo from "../assets/logo.jpg";
import Link from "next/link";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [navbar, setNavbar] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 80) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener("scroll", changeBackground);

  return (
    <nav
      className={` w-full flex flex-row justify-between items-center pt-4 pr-8
      fixed z-[2] backdrop-blur-sm sm:pr-0 border border-b-slate-300 border-transparent ${
        navbar ? "button-gradient" : "bg-transparent-0"
      }`}
    >
      <div className="flex items-center justify-start mb-3 ml-5 sm:ml-2">
        <a href="/">
          <motion.div
            initial={{
              x: -500,
              opacity: 0,
            }}
            animate={{
              x: 0,
              opacity: 1,
            }}
            transition={{ duration: 1.2 }}
          >
          <div className="w-20 h-20 sm:w-14 sm:h-14">
            <Image
              src={logo}
              alt="logo"
              className="rounded-full "
              objectFit="cover"
            />
          </div>
          </motion.div>
        </a>
        <motion.div
          initial={{
            x: -500,
            opacity: 0,
          }}
          animate={{
            x: 0,
            opacity: 1,
          }}
          transition={{ duration: 1.2 }}
        >
          <a
            href="tel:701-651-4989"
            className={`${
              navbar ? "text-white" : "text-gray-800"
            } font-poppins ml-5 text-xs md:hidden`}
          >
            📞(701)-651-4989
          </a>
        </motion.div>
      </div>

      <ul className="flex-1 space-x-6 md:space-x-0 flex items-center justify-center  list-none md:hidden">
        {["home", "about", "events", "menu", "location", "contact"].map(
          (item, index) => (
            <motion.div
              key={index}
              initial={{
                x: 500,
                opacity: 0,
              }}
              animate={{
                x: 0,
                opacity: 1,
              }}
              transition={{ duration: 1.2 }}
            >
              <li
                className="mt-0 cursor-pointer flex flex-col items-center justify-center group font-poppins list-none"
                key={`link-${item}`}
              >
                <div className="md:w-[5px] md:h-[5px] xl:w-[7px] xl:h-[7px] rounded-full mb-[5px] group-hover:bg-secondary-color animate-bounce bg-transparent" />
                <a
                  href={`${item}`}
                  className={`${
                    navbar ? "text-white" : "text-gray-800"
                  } flex flex-col uppercase no-underline font-normal transition-all ease-in-out duration-300 group-hover:text-secondary-color`}
                >
                  {item}
                </a>
              </li>
            </motion.div>
          )
        )}
        <div className="mt-8">
          <motion.div
            initial={{
              x: 500,
              opacity: 0,
            }}
            animate={{
              x: 0,
              opacity: 1,
            }}
            transition={{ duration: 1.2 }}
          >
            <Link href="https://www.doordash.com/en-CA/store/daily-addiction-coffee-house-williston-1312569/">
              <motion.button
                className="box relative mt-10 text-md py-2 px-2 font-poppins font-semibold text-white text-xs sm:pt-2 sm:mb-5 rounded-full
            md:bottom-5 lg:bottom-10 sm:bottom-0 
            button-gradient sm:py-2 sm:px-2 
             "
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                Order Now
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </ul>

      <div className="w-[35px] h-[35px] flex rounded-full relative items-center justify-center xl:hidden md:block mt-2 mr-4 ">
        <HiMenuAlt4
          onClick={() => setToggle(true)}
          className="w-[35px] h-[35px] text-secondary-color"
        />

        {toggle && (
          <motion.div
            whileInView={{ x: [300, 0] }}
            transition={{ duration: 0.85, ease: "easeOut" }}
            className="fixed top-0 bottom-0 right-0 z-5 p-4 xs:w-full sm:w-[80%] md:w-[60%] xl:w-[40%]
             min-h-screen flex flex-col items-end justify-end bg-white bg-cover bg-repeat shadow-xl"
          >
            <HiX
              onClick={() => setToggle(false)}
              className="w-[35px] h-[35px] text-secondary-color "
            />
            <ul className="list-none p-0 m-0 h-full w-full flex items-center justify-start flex-col">
              <div>
                <a href="/">
                  <Image
                    src={logo}
                    alt="logo"
                    width={240}
                    height={120}
                    className="rounded-xl"
                    objectFit="cover"
                  />
                </a>
                {["home", "about", "events", "menu", "location", "contact"].map(
                  (item) => (
                    <li key={item} className="m-4">
                      <a
                        href={`${item}`}
                        className="text-gray-500 no-underline xl:text-2xl sm:text-xl
                    uppercase font-poppins font-semibold transition-all ease-in-out duration-500 hover:text-secondary-color"
                        onClick={() => setToggle(false)}
                      >
                        {item}
                      </a>
                    </li>
                  )
                )}
              </div>
              <div className="mt-10">
                <Link href="https://www.doordash.com/en-CA/store/daily-addiction-coffee-house-williston-1312569/">
                  <motion.button
                    className="box z-[20] text-md py-2 px-2 mb-32 font-poppins font-semibold text-white text-xs sm:pt-2 sm:mb-5 rounded-full
            md:bottom-5 lg:bottom-10 sm:bottom-0 
            button-gradient md:py-4 md:px-4 md:text-sm 
             "
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    Order Now
                  </motion.button>
                </Link>
              </div>
            </ul>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
