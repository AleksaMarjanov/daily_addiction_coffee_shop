import React, { useState, useEffect } from "react";
import AppWrap from "../src/wrapper/AppWrap";
import MotionWrap from "../src/wrapper/MotionWrap";
import Image from "next/image";
import { images } from "../src/constants";

import { client, urlFor } from "../src/client";

const Home = () => {
  const [pictures, setPictures] = useState([]);

  useEffect(() => {
    const query = '*[_type == "pictures" ]';

    client.fetch(query).then((data) => {
      setPictures(data);
    });
  }, []);

  return (
    <div
      id="home"
      className="w-full font-poppins text-3xl flex flex-col justify-center items-center"
    > 
      <div>
        <p className=" flex items-center justify-center text-xl p-5 mt-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.<br/> Architecto
          delectus sit praesentium <br/>exercitationem aspernatur hic placeat ipsum
          doloremque!<br/> Eum eveniet dolorem est unde itaque dolore sunt aut,
          repellat ipsam quam.
        </p>
     
      </div>
      <div className="p-4 gap-8 sm:p-2 sm:gap-4 grid grid-flow-col grid-rows-4 md:flex md:flex-col sm:items-center sm:justify-center">
      {pictures.map((picture, index) => (
        <div
          key={picture.name + index}
          className={`flex items-center justify-between rounded-lg shadow-xl`}
        >
          <Image
            src={`${urlFor(picture.imgurl)}`}
            alt="gallery"
            objectFit="cover"
            width={300}
            height={300}
            loading="lazy"
            className="object-center object-cover rounded-xl"
            />
        </div>
      ))}
      </div>
    </div>
  );
};

export default AppWrap(MotionWrap(Home, "home"));
