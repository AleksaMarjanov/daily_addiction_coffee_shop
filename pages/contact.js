import React, { useState, useRef } from "react";
import AppWrap from "../src/wrapper/AppWrap";
import MotionWrap from "../src/wrapper/MotionWrap";
import emailjs from "@emailjs/browser";
import Recaptcha from "react-recaptcha";

const Contact = () => {
  const [recaptchaLoad, setRecaptchaLoad] = useState(false);
  const [isVerified, setIsVerified] = useState(false);
  const { form } = useRef();

  const recaptchaLoaded = () => {
    setRecaptchaLoad(true);
  };

  const verifiedRecaptcha = (response) => {
    if (response) {
      setIsVerified(true);
    }
  };

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
            window.location.reload(false);
          },
          () => {
            alert("Failed to send the message, please try again");
          }
        );
    // } else { 
    //   alert('Please check reCaptcha and try again.')
    // }
  };

  return (
    <div className="font-poppins flex flex-col justify-center items-center">
      <h2 className="text-4xl md:font-2xl sm:font-xl font-semibold">
        Contact Us
      </h2>
      <div className="w-full mt-5">
        <form ref={form} onSubmit={sendEmail}>
          <ul className="p-0 m-0 sm:p-3 sm:m-3 md:p-2 md:m-2 list-none mb-5 overflow-hidden block clear-both relative animate ease-in duration-500 transition-all">
            <li className="w-[100%] float-left clear-none mb-2">
              <input
                className="w-full border-0 bg-coffee-blue h-[50px] text-xl
                   text-white pt-0 pr-2 box-border"
                placeholder="Full Name"
                type="text"
                name="name"
                required
              />
            </li>
            <li className="w-[100%] float-left mb-2 clear-none">
              <input
                className="w-full border-0 bg-coffee-blue h-[50px] text-xl
                   text-white pt-0 pr-2 box-border"
                placeholder="Email"
                type="email"
                name="email"
                required
              />
            </li>
            <li>
              <input
                className="w-full border-0 mb-2 bg-coffee-blue h-[50px] text-xl
                   text-white pt-0 pr-2 box-border"
                placeholder="Subject"
                type="text"
                name="subject"
                required
              />
            </li>
            <li>
              <textarea
                className="w-full border-0 bg-coffee-blue h-[50px] text-xl text-white box-border min-h-[150px]"
                placeholder="Enter your message"
                name="message"
                required
              ></textarea>
            </li>
            <li>
              <input
                type="submit"
                className="text-white bg-coffee-blue hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                value="Send"
              />
            </li>
          </ul>
          {/* <Recaptcha
              sitekey={process.env.recaptcha}
              render="explicit"
              onloadCallback={recaptchaLoaded}
              verifyCallback={verifiedRecaptcha}
            /> */}
        </form>
      </div>
    </div>
  );
};

export default AppWrap(MotionWrap(Contact, "contact"));
