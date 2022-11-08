import React, { useState, useEffect } from "react";
import AppWrap from "../src/wrapper/AppWrap";
import MotionWrap from "../src/wrapper/MotionWrap";
import { client, urlFor } from "../src/client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const About = () => {
  const [gallery, setGallery] = useState([]);

  useEffect(() => {
    const query = '*[_type == "gallery" ]';

    client.fetch(query).then((data) => {
      setGallery(data);
      console.log({ data });
    });
  }, []);
  return (
    <main className="flex flex-col items-center justify-center space-y-5">
      <div id="about" className="flex flex-col font-poppins ">
        <section>
          <div className="flex text-6xl md:text-4xl sm:text-xl justify-center items-center font-semibold">
            About
          </div>
          <span className="flex font-semibold items-center justify-center mt-10  sm:text-sm sm:p-1 tracking-[1px]">
            Locally owned
            <br />
            full service specialty coffeehouse
            <br /> in the heart of Downtown Williston, ND.
          </span>
        </section>
        <figure className="mt-5 grid gap-6 grid-rows-2 grid-flow-col lg:grid-rows-1 sm:flex sm:flex-col max-w-6xl sm:max-w-lg minmd:max-w-xl cursor-pointer">
          {gallery?.map((images, index) => (
            <div key={images.name + index}>
              <div className="shadow-xl items-center justify-center flex object-fit object-contain">
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
                    duration: 1,
                  }}
                  whileHover={{
                    scale: 1.1,
                  }}
                >
                  <Image
                    src={`${urlFor(images?.imgurl)}`}
                    width={400}
                    height={400}
                    objectFit="cover"
                    className="cover rounded-lg"
                    alt={images.name}
                  />
                </motion.div>
              </div>
            </div>
          ))}
        </figure>
      </div>
    </main>
  );
};

export default AppWrap(MotionWrap(About, "about"));
