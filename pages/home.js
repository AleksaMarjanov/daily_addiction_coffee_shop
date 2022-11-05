import React, { useState, useEffect } from "react";
import AppWrap from "../src/wrapper/AppWrap";
import MotionWrap from "../src/wrapper/MotionWrap";
import Image from "next/image";
import { images } from "../src/constants";
import SEO from "@bradgarropy/next-seo";
import Head from "next/head";

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
        className="w-full font-poppins text-3xl mt-8 flex flex-row justify-center items-center"
      >
      <div className="space-x-12 w-1/3">
        <p className="font-poppins uppercase text-3xl">visit us</p>
          <span>307 Main St, Williston, ND 58801</span>
      </div>
        <>
        <figure className="relative space-y-6 max-w-xl cursor-pointer">
          {homePageInfo?.map((info, index) => (
            <div key={info.name + index}>
              <Link href={`/${info.name.toLowerCase()}`}>
                <div className="shadow-xl flex-row space-x-5  cursor-pointer">
                  <Image
                    src={`${urlFor(info?.imgurl)}`}
                    width={800}
                    height={800}
                    objectFit="cover"
                    className="cover rounded-lg"
                    alt={info.name}
                  />
                  <figcaption className="absolute -mt-16 text-4xl  text-white px-4">
                    <div>
                      <h1 className="uppercase">{info.name}</h1>
                    </div>
                  </figcaption>
                </div>
              </Link>
            </div>
          ))}
        </figure>
        </>
      </div>
    </>
  );
};

export default AppWrap(MotionWrap(Home, "home"));
