import React, {useState, useEffect} from "react";
import AppWrap from "../src/wrapper/AppWrap";
import MotionWrap from "../src/wrapper/MotionWrap";
import {client, urlFor} from '../src/client'
import Image from "next/image";


const About = () => {
  const [gallery, setGallery] = useState([]);
  
  useEffect(() => {
    const query = '*[_type == "homePageInfo" ]';

    client.fetch(query).then((data) => {
      setGallery(data);
    });
  }, []);
  return (
  
    <div className="flex flex-col items-center justify-center space-y-5">
      <div id="about" className="flex flex-col font-poppins ">
        <div className="animate-extend2 overflow-x-hidden no-scrollbar whitespace-nowrap duration-700 text-6xl md:text-4xl justify-center items-center font-semibold">
          About
        </div>
        <span className="font-semibold first-line:items-center justify-center mt-5 tracking-[1px]">
        Locally owned<br/>full service specialty coffeehouse<br/> in the heart of Downtown Williston, ND.
        </span>
        {gallery?.map((image, index) => {
          <div key={image.imgUrl + index} className="shadow-xl flex-row space-x-5 ">
                    <Image
                      src={`${urlFor(image?.imgurl)}`}
                      width={400}
                      height={400}
                      objectFit="cover"
                      className="cover rounded-lg"
                    />
          </div>
        })}
      </div>
    </div>
  );
};

export default AppWrap(MotionWrap(About, "about"));
