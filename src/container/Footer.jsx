import React, {useEffect, useState} from 'react'
import { SocialIcon } from "react-social-icons";
import { client } from '../client';

const Footer = () => {
  const [socials, setSocials] = useState([])

  useEffect(() => {
    const query = "*[type == 'social']"
    
    client.fetch(query).then((data) => {
      setSocials(data)
    })
  }, [])
  

  return (
    <div className="p-5 -right-14 border-t-2  dark:bg-nft-dark bg-white  dark:border-nft-black-1 border-nft-gray-1 overflow-hidden">
<div className="flex flex-row space-x-2 items-center justify-center"> 
    {socials?.map((social) => {
      <SocialIcon 
         key={social._id}
          url={social.url}
          fgColor="gray"
          bgColor="transparent"
      />
    })}
    
</div>
          <div className="flex flexBetween sm:text-xs sm:mt-3">
          <p className="font-poppins xs:font-sm">{new Date().getFullYear()}  @Aleksa All Rights Reserved</p>
          </div>
      </div>
  );
};


export default Footer