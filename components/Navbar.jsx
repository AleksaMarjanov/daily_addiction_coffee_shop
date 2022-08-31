import Link from "next/link";
import { HiMenuAlt4, HiX } from "react-icons/hi";
import React, { useState } from "react";
import { motion } from "framer-motion";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav
      className="w-full flex justify-between items-center 
      fixed backdrop-sepia-0  z-2 pt-4 pr-8 border border-b-slate-300 border-transparent"
    >
      <div className="flex items-center justify-start">
        {/* <img src={images.logo} alt="logo" /> */}
        <p>logo</p>
      </div>
      <ul className="flex-1 flex items-center justify-center list-none flex-col mt-0 mr-4 cursor-pointer">
        {["home", "about", "events", "menu", "gallery", "contact"].map(
          (item) => (
            <li
              className="flex items-center justify-center font-poppins "
              key={`link-${item}`}
            >
              <div className="w-[5px] h-[5px] rounded-full mb-[5px] bg-transparent hover:bg-gray-400" />
              <a
                href={`#${item}`}
                className="text-gray-500 flex flex-col uppercase font-semibold transition-all ease-in-out duration-300 hover:text-secondary-color"
              >
                {item}
              </a>
            </li>
          )
        )}
      </ul>
      {/* 
  background: var(--secondary-color);

  svg {
    width: 70%;
    height: 70%;
    color: var(--white-color);
  }

  div {
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    z-index: 5;

    padding: 1rem;
    width: 80%;
    height: 100vh;

    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
    flex-direction: column;
    background: url("../../assets/bgWhite.png");

    background-color: var(--white-color);
    background-size: cover;
    background-repeat: repeat;

    box-shadow: 0 0 20px rgba(168, 168, 168, 0.15);

    svg {
      width: 35px;
      height: 35px;
      color: var(--secondary-color);
      margin: 0.5rem 1rem;
    }

    ul {
      list-style: none;
      margin: 0;
      padding: 0;
      height: 100%;
      width: 100%;

      display: flex;
      justify-content: flex-start;
      align-items: flex-start;
      flex-direction: column;

      li {
        margin: 1rem;

        a {
          color: var(--grey-color);
          text-decoration: none;
          font-size: 1rem;
          text-transform: uppercase;
          font-weight: 500;
          transition: all 0.3s ease-in-out;

          &:hover {
            color: var(--secondary-color);
          }
        }
      }
    }

    @media screen and (min-width: 900px) {
      display: none;
    }
  }
  @media screen and (min-width: 900px) {
    display: none;
  } */}
      <div className="w-[35px] h-[35px] flex rounded-full relative items-center justify-center mt-2 mr-4">
        <HiMenuAlt4 onClick={() => setToggle(true)} className="w-[35px] h-[35px] text-secondary-color"/>

        {toggle && (
          <motion.div
            whileInView={{ x: [300, 0] }}
            transition={{ duration: 0.85, ease: "easeOut" }}
            className="fixed top-0 bottom-0 right-0 z-5 p-4 w-[80%]
             min-h-screen flex flex-col items-end justify-end bg-white bg-cover bg-repeat shadow-xl"
          >
            <HiX onClick={() => setToggle(false)} className="w-[35px] h-[35px] text-secondary-color " />
            <ul className="list-none p-0 m-0 h-full w-full flex items-start justify-start flex-col">
              {["home", "about", "events", "menu", "gallery", "contact"].map(
                (item) => (
                  <li key={item} className='m-4'>
                    <a 
                    href={`#${item}`} 
                    className='text-gray-500 no-underline text-2xl
                    uppercase font-poppins font-semibold transition-all ease-in-out duration-300 hover:text-secondary-color md:hidden' 
                    onClick={() => setToggle(false)}>
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
