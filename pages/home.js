import React, { useState, useEffect } from "react";
import AppWrap from "../src/wrapper/AppWrap";
import MotionWrap from "../src/wrapper/MotionWrap";
import Image from "next/image";
import { images } from "../src/constants";
import SEO from '@bradgarropy/next-seo'
import Head from "next/head";

import { client, urlFor } from "../src/client";
import Link from "next/link";

const Home = () => {
  const [pictures, setPictures] = useState([]);

  useEffect(() => {
    const query = '*[_type == "pictures" ]';

    client.fetch(query).then((data) => {
      setPictures(data);
    });
  }, []);

  return (
    <>
    <Head>
        <SEO 
        title="Daily Addiction Coffe House" 
        description="Enjoy the best coffee in Williston" 
        keywords={['best coffe shop in williston', 'coffee', 'breakfast', 'espresso', 'latte', 'cappuccino']}
        />
    </Head>
    <div
      id="home"
      className="w-full font-poppins text-3xl flex flex-row justify-center items-center"
    >
      <div className="flex items-center justify-center h-screen">
        <figure className="relative max-w-xs cursor-pointer">
          <Link href="/menu">
          <div>
          <Image
            className="rounded-lg shadow-xl hover:shadow-2xl"
            src="https://images.unsplash.com/photo-1554520735-0a6b8b6ce8b7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2564&q=80"
            width={400}
            height={400}
            objectFit="cover"
            alt="menuPicture"
          />
          <figcaption className="absolute -mt-16 text-4xl  text-white px-4">
            <div>
              <h1>MENU</h1>
            </div>
          </figcaption>
          </div>
         </Link>
        </figure>
      </div>
    </div>

    </>
    
  );
};

export default AppWrap(MotionWrap(Home, "home"));
