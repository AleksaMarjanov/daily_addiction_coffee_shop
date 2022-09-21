import React, { useState, useRef } from "react";
import AppWrap from "../src/wrapper/AppWrap";
import MotionWrap from "../src/wrapper/MotionWrap";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from '@heroicons/react/24/solid'

const Contact = () => {
  const { form } = useRef();
  const [isFormSubmitted, setIsFormSubmitted] = useState(false)

  const sendEmail = (e) => {
    e.preventDefault();

    // if (recaptchaLoad && isVerified) {
      emailjs 
        .sendForm(
          process.env.emailJs_service,
          process.env.emailJs_tempalte,
          e.target,
          process.env.emailJs_API
        )
        .then(
          () => {
            alert("Message successfully sent!");
            setIsFormSubmitted(true);
            window.location.reload(false);
          },
          () => {
            alert("Failed to send the message, please try again");
          }
        );
    // }
  };

  return (
    <div className="font-poppins flex flex-col justify-center items-center">
      <motion.div
      inital={{
        x: -500,
        opacity: 0,
      }}
      animate={{
        x: 0,
        opacity: 1,
      }}
      transition={{ duration: 2.5 }}
      >
      <h2 className="text-4xl md:font-2xl sm:font-xl font-semibold">
        Contact
      </h2>
      </motion.div>
      <div className='flex flex-col space-y-10 mt-10 md:mt-5'>
        <h4 className='text-4xl font-semibold text-center'>Come and Visit Us. <span className='underline decoration-[#0086bb]/50'>Have Coffee.</span> 
        </h4>

        <div className='space-y-10'>
            <div className='flex items-center space-x-5 justify-center'>
            <PhoneIcon className='text-[#0086bb] h-7 w-7 animate-pulse'/>
            <p className='text-2xl'>+701-651-4989</p>
            </div>
            <div className='flex items-center space-x-5 justify-center'>
            <EnvelopeIcon className='text-[#0086bb] h-7 w-7 animate-pulse'/>
            <p className='text-2xl'>dailyaddictionch@gmail.com</p>
            </div>
            <div className='flex items-center space-x-5 justify-center'>
            <MapPinIcon className='text-[#0086bb] h-7 w-7 animate-pulse'/>
            <p className='text-2xl'>307 Main St, Williston, ND</p>
            </div>
            {!isFormSubmitted ? (

            <form className='flex flex-col space-y-2 w-fit mx-auto' onSubmit={() => sendEmail()} ref={form}>
                <div className='flex space-x-2'>
                  <input  type="text" className='contactInput' placeholder='Name' required/>
                  <input  type="email" className='contactInput' placeholder='Email'required/>
                </div>

                <input  placeholder="Subject" type="text" className='contactInput' required/>

                <textarea  placeholder="Message" name="" className='contactInput' required/>
                <button type="submit" className='cursor-pointer bg-[#0086bb] py-5 px-10 rounded-md text-white font-bold text-lg'>Submit</button>
            </form>
            ): (
              <div className="flex flex-col items-center justify-center">
                <h2 className="font-poppins text-2xl">Thank you for getting in touch with us!</h2>
              </div>
            )}
        </div>
      </div>
    </div>
  );
};

export default AppWrap(MotionWrap(Contact, "contact"));
