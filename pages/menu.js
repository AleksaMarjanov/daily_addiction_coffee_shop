import React, { useState, useEffect, useLayoutEffect } from "react";
import AppWrap from "../src/wrapper/AppWrap";
import MotionWrap from "../src/wrapper/MotionWrap";
import {client, urlFor} from "../src/client";
import { motion } from "framer-motion";
import Image from 'next/image'

const menus = () => {
  const [menus, setMenus] = useState([]);
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });
  const [activeFilter, setActiveFilter] = useState("All");
  const [filterMenus, setFilterMenus] = useState([]);

  useEffect(() => {
    const query = '*[_type == "menu"]';

    client.fetch(query).then((data) => {
      setMenus(data);
      setFilterMenus(data);
    });
  }, []);



  const handleMenusFilter = (item) => {
    setActiveFilter(item);
    setAnimateCard([{ y: 100, opacity: 0 }]);

    setTimeout(() => {
      setAnimateCard([{ y: 0, opacity: 1 }]);

      if (item === "All") {
        setFilterMenus(menus);
      } else {
        setFilterMenus(menus.filter((menu) => menu.tags.includes(item)));
      }
    }, 500);
  };



  const itemActive = 'xl:border-2 hover:bg-primary xl:border-coffee-blue px-3 py-2 rounded xl:rounded-lg flex items-center gap-2 justify-center cursor-pointer text-white';

  const notActiveItem = 'xl:border-2 hover:bg-primary xl:border-gray-300 px-3 py-2 rounded xl:rounded-lg flex items-center gap-2 justify-center cursor-pointer text-black'

  return (
    <div className="flex-1 w-full flex-col bg-gray-100 font-poppins ">
      <div className="flex flex-row flex-wrap justify-center items-center mt-16 mr-0 mb-8">
        {["Breakfast", "Deserts", "Drinks", "All"].map((item, index) => (
          <div
            key={index}
            onClick={() => handleMenusFilter(item)}
            className={`pt-2 pr-4 m-2 bg-white rounded-lg text-black font-semibold cursor-pointer transition-all animate ease-in duration-300 hover:bg-coffee-blue hover:text-white flex justify-center items-center p-text ${
              activeFilter === item ? `${itemActive}` : `${notActiveItem}`
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
        {filterMenus.map((menu, index) => (
          <div
            className="w-270 flex-col m-8 p-4 rounded-lg bg-white text-black cursor-pointer transition-all animate ease-in duration-300 hover:shadow-xl flex justify-center items-center"
            key={index}
          >
            <div className="w-full h-230 relative flex justify-center items-center">
              <Image
                src={`${urlFor(menu.imgUrl)}`}
                alt={menu.name}
                objectFit="cover"
                className="w-full h-full rounded-lg object-cover"
                width={300}
                height={300}
                priority
              /> 
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

export default AppWrap(MotionWrap(menus, "menus"));
