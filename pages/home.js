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
        className="w-full font-poppins text-3xl flex flex-row justify-center items-center"
      >
        <figure className="relative max-w-xs cursor-pointer">
          {homePageInfo?.map((info, index) => (
            <div key={info.name + index}>
              <Link href={`/${info.name.toLowerCase()}`}>
                <div className="shadow-2xl">
                  <Image
                    src={`${urlFor(info?.imgurl)}`}
                    width={400}
                    height={400}
                    objectFit="cover"
                    className="cover"
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
        {/* {homePageInfo.map((info, index) => {
          <Link key = {info.name + index } href={`/${info.name}`}>
            {console.log(info.imgurl)}
          <div>
          <h1 className="uppercase">{info.name}</h1>
          <Image
            className="rounded-lg shadow-xl hover:shadow-2xl"
            src={`${urlFor(info?.imgurl)}`}         
            width={400}
            height={400}
            objectFit="cover"
            alt={info.name}
          />
          
          </div>
         </Link>
        })} */}
      </div>
    </>
  );
};

export default AppWrap(MotionWrap(Home, "home"));
