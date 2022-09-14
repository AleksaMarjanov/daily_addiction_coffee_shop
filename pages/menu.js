import React, { useState, useEffect } from "react";
import AppWrap from "../src/wrapper/AppWrap";
import MotionWrap from "../src/wrapper/MotionWrap";
import {client, urlFor} from "../src/client";
import { motion } from "framer-motion";
import Image from 'next/image'

const Menu = () => {
  const [menu, setMenu] = useState([]);
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });
  const [activeFilter, setActiveFilter] = useState("All");
  const [filterMenu, setFilterMenu] = useState([]);

  useEffect(() => {
    const query = '*[_type == "menu"]';

    client.fetch(query).then((data) => {
      setMenu(data);
      setFilterMenu(data);
    });
  }, []);

  const handleMenuFilter = (item) => {
    setActiveFilter(item);
    setAnimateCard([{ y: 100, opacity: 0 }]);

    setTimeout(() => {
      setAnimateCard([{ y: 0, opacity: 1 }]);

      if (item === "All") {
        setMenu(menu);
      } else {
        setMenu(menu.filter((menuItem) => menuItem.tags.includes(item)));
      }
    }, 500);
  };

  const itemActive = 'bg-coffee-blue text-white'

  return (
    <div className="flex-1 w-full flex-col">
      <div className="flex flex-row justify-start items-center flex-wrap mt-32 mr-0 mb-16">
        {["Breakfast", "Deserts", "Drinks", "All"].map((item, index) => (
          <div
            key={index}
            onClick={() => handleMenuFilter(item)}
            className={`pt-[0.5px] pr-4 bg-white text-black font-semibold cursor-pointer transition-all animate ease-in duration-300 hover:bg-coffee-blue hover:text-white flex justify-center items-center p-text ${
              activeFilter === item ? `${itemActive}` : ""
            }`}
          >
            {item}
          </div>
        ))}
      </div>

      <motion.div
        animate={animateCard}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="flex flex-wrap justify-center items-center"
      >
        {filterMenu.map((menu, index) => (
          <div
            className="w-270 flex-col m-8 p-4 rounded-lg bg-white text-black cursor-pointer transition-all animate duration-300 hover:shadow-xl flex justify-center items-center"
            key={menu.name + index}
          >
            <div className="w-full h-230 relative flex justify-center items-center">
              <Image
                src={`${urlFor(menu.imgurl)}`}
                alt={menu.name}
                objectFit="cover"
                className="w-full h-full rounded-lg object-cover"
                width={300}
                height={300}
              />
{/* 
              <motion.div
                whileHover={{ opacity: [0, 1] }}
                transition={{
                  duration: 0.25,
                  ease: "easeInOut",
                  staggerChildren: 0.5,
                }}
                className="app__work-hover flex justify-center items-center"
              ></motion.div> */}
            </div>

            <div className="p-2 w-full relative flex flex-col items-center justify-center">
                <h4 className="font-bold">{menu.title}</h4>
                <p className="leading-5 mt-2">{menu.description}</p>
                <p className="font-thin">{menu.price}</p>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default AppWrap(MotionWrap(Menu, "menu"));
