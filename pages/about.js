import React, { useState, useEffect } from "react";
import AppWrap from "../src/wrapper/AppWrap";
import MotionWrap from "../src/wrapper/MotionWrap";
import { client, urlFor } from "../src/client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const About = () => {
  const [gallery, setGallery] = useState([]);
  const directionLeft = true;

  useEffect(() => {
    const query = '*[_type == "pictures" ]';

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
          <p className="flex font-semibold lg:text-xl items-center justify-center mt-10  sm:text-sm sm:p-2 minsm:pl-5">
            Daily Addiction is a unique,
            full-service specialty coffee house<br/>
            focusing on a variety of quality hand crafted hot and iced drinks.<br/>
            We also offer a variety of savory food choices while offering a cozy,<br/>comfortable atmosphere.<br/>
            Daily Addiction is locally owned by Opportunity Foundation,<br/> a nonprofit organization which provides individualized support and <br/>services for people with intellectual and developmental disabilities.
          </p>
        </section>
        <figure className="mt-5 grid gap-6 grid-rows-3 grid-flow-col lg:grid-rows-4 sm:flex sm:flex-col max-w-6xl minsm:grid-rows-6 minsm:p-3 sm:max-w-lg minmd:grid-rows-4 minmd:max-w-4xl cursor-pointer sm:p-3">
          {gallery?.map((images, index) => (
            <div key={images.name + index}>
              <div className="shadow-xl items-center justify-center flex object-fit object-contain">
                <motion.div
                  initial={{
            x: directionLeft ? -200 : 200,
            opacity: 0,
          }}
          transition={{ duration: 1 }}
          whileInView={{ opacity: 1, x: 0}}
                  whileHover={{
                    scale: 1.1,
                  }}
                  viewport={{ once: true}}
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
