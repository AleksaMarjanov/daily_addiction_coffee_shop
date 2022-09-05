import React, { useState, useEffect } from "react";
import AppWrap from '../src/wrapper/AppWrap'
import MotionWrap from '../src/wrapper/MotionWrap'
import Image from "next/image";
import { images } from '../src/constants'

import { client, urlFor } from "../src/client";


const Home = () => {
  const [pictures, setPictures] = useState([])

  useEffect(() => {
    const query = '*[_type == "pictures" ]';

    client.fetch(query).then((data) => {
      setPictures(data);
    });
  }, []);

  return (
      <div id="home" className="font-poppins text-3xl flex flex-col justify-start items-start">
        <p>
          This is a home pageee
        </p> 
        {pictures.map((picture, index) => (
              <div
                key={picture.name + index}
                className={`flex flex-col items-center justify-between rounded-lg shadow-xl`}
              > 
                <Image
                  src={`${urlFor(picture.imgurl)}`}
                  alt="gallery"
                  objectFit="cover"
                  width={300}
                  height={300}
                  loading="lazy"
                  className="object-center object-cover flex items-center justify-center"
                />
                </div>
        ))}        
        <span>This is a spann</span>
        <h2>Specificly brewed coffee to your taste</h2>
      </div>
  );
};

export default AppWrap(MotionWrap(Home,"home"));
