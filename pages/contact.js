import React, { useState, useRef } from "react";
import AppWrap from "../src/wrapper/AppWrap";
import MotionWrap from "../src/wrapper/MotionWrap";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid";

const Contact = () => {
  const form = useRef();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    // if (recaptchaLoad && isVerified) {
    emailjs
      .sendForm(
        process.env.emailJs_service,
        process.env.emailJs_template_contact,
        form.current,
        process.env.emailJs_API
      )
      .then(
        () => {
          setIsFormSubmitted(true);
        },
        () => {
          alert("Failed to send the message, please try again");
        }
      );
    // }
  };

  const handleInputChange = (e) => {
    const {name, value} = e.target;
    setFormData({ ...formData, [name] : value})
  }

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
        <h2 className="text-4xl md:text-2xl sm:text-xl font-semibold">
          Contact
        </h2>
      </motion.div>
      <div className="flex flex-col justify-center items-center space-y-10 mt-10 md:mt-5">
        <h4 className="text-4xl md:text-2xl sm:text-xl font-semibold text-center">
          Come and Visit Us.{" "}
          <span className="underline decoration-[#0086bb]/50">
            Have Coffee.
          </span>
        </h4>

        <div className="space-y-10">
          <div className="flex items-center space-x-5 justify-center">
            <PhoneIcon className="text-[#0086bb] h-7 w-7 animate-pulse" />
            <p className="text-2xl sm:text-lg">+701-609-5198</p>
          </div>
          <div className="flex items-center space-x-5 sm:space-x-0 justify-center">
            <EnvelopeIcon className="text-[#0086bb] h-7 w-7 animate-pulse" />
            <p className="text-2xl sm:text-lg">dailyaddiction@outlook.com</p>
          </div>
          <div className="flex items-center space-x-5 sm:space-x-0 justify-center">
            <MapPinIcon className="text-[#0086bb] h-7 w-7 animate-pulse" />
            <p className="text-2xl sm:text-lg">307 Main St, Williston, ND</p>
          </div>
          {!isFormSubmitted ? (
            <form
              className="flex flex-col space-y-2 mx-auto"
              onSubmit={sendEmail}
              ref={form}
            >
              <div className="flex sm:flex-col space-x-2 sm:space-x-0">
                <input
                  type="text"
                  name="name"
                  className="contactInput"
                  placeholder="Full Name"
                  onChange={handleInputChange}
                  required
                />
                <input
                  type="email"
                  name="email"
                  className="contactInput"
                  placeholder="Email"
                  onChange={handleInputChange}
                  required
                />
              </div>

              <input
                placeholder="Subject"
                name="subject"
                type="text"
                className="contactInput"
                onChange={handleInputChange}
                required
              />
              <textarea
                placeholder="Message"
                name="message"
                className="contactInput"
                onChange={handleInputChange}
                required
              />
              <button
                type="submit"
                className="cursor-pointer bg-[#0086bb] 
                py-5 px-10 sm:py-2 sm:px-5 rounded-md text-white font-bold text-lg"
              >
                Submit
              </button>
            </form>
          ) : (
            <div className="flex flex-col items-center justify-center">
              <h2 className="font-poppins text-2xl minsm:text-lg minsm:p-3 h-screen">
                Thank you for getting in touch with us!<br/>
                Someone will be reaching out to you<br/>as soon as possible from our team<br/>
              </h2>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AppWrap(MotionWrap(Contact, "contact"));
