import React, { useState, useEffect } from "react";
import AppWrap from "../src/wrapper/AppWrap";
import MotionWrap from "../src/wrapper/MotionWrap";
import Image from "next/image";
import { images } from "../src/constants";
import SEO from "@bradgarropy/next-seo";
import Head from "next/head";
import { motion } from "framer-motion";

import { client, urlFor } from "../src/client";
import Link from "next/link";

const Home = () => {
  const [homePageInfo, setHomePageInfo] = useState([]);

  useEffect(() => {
    const query = '*[_type == "homePageInfo" ]';

    client.fetch(query).then((data) => {
      setHomePageInfo(data);
    });
  }, []);

  return (
    <>
      <Head>
        <SEO
          title="Daily Addiction Coffe House"
          description="Enjoy the best coffee in Williston"
          keywords={[
            "best coffe shop in williston",
            "coffee",
            "breakfast",
            "espresso",
            "latte",
            "cappuccino",
          ]}
        />
      </Head>
      <div
        id="home"
        className="w-full font-poppins mt-8 flex flex-row minsm:flex-col minsm:space-y-6 justify-center items-center xl:text-6xl"
      >
        <div className="space-y-5 w-1/3 lg:w-1/8 flex flex-col mt-0 items-center justify-center">
          <p className="uppercase text-6xl minsm:text-3xl sm:text-2xl justify-center text-center">
            Visit us
          </p>

          <p className="text-2xl sm:text-lg underline">
            307 Main St, Williston, ND 58801
          </p>
          <a href="tel:701-651-4989" className="ml-5 text-lg underline">
            701.609.5198
          </a>
          <p className="text-xl sm:text-lg text-center justify-center items-center">
            Monday - Friday
            <br />
            <span className="font-semibold text-xl sm:text-lg">7AM–5PM</span>
            <br />
            Saturday <br />
           <span className="font-semibold text-xl sm:text-lg">9AM–4PM</span> 
            <br />
            Sunday Closed
            <br />
          </p>
        </div>
        <div>
          <motion.div
            initial={{
              x: 500,
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
          >
            <figure className="relative  space-y-6 sm:max-w-xs minmd:max-w-sm max-w-xl cursor-pointer">
              {homePageInfo?.map((info, index) => (
                <div className="group" key={info.name + index}>
                  <Link href={`/${info.name.toLowerCase()}`}>
                    <div className="shadow-xl group-hover:opacity-30 flex-row space-x-5  cursor-pointer opacity-100 sm:pr-3 sm:pl-3">
                      <Image
                        src={`${urlFor(info?.imgurl)}`}
                        width={800}
                        height={800}
                        objectFit="cover"
                        className="cover rounded-lg"
                        alt={info.name}
                      />
                      <figcaption className="absolute -mt-16 text-4xl -ml-8 text-white font-semibold lg:text-2xl lg:px-4 lg:-mt-20 px-12">
                        <div>
                          <h1 className="uppercase">{info.name}</h1>
                        </div>
                      </figcaption>
                    </div>
                  </Link>
                </div>
              ))}
            </figure>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default AppWrap(MotionWrap(Home, "home"));
