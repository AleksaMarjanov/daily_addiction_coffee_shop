import React, { useState, useRef } from "react";
import AppWrap from "../src/wrapper/AppWrap";
import MotionWrap from "../src/wrapper/MotionWrap";

const Contact = () => {
  const { form } = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="font-poppins flex flex-col justify-center items-center">
      <h2 className="text-4xl md:font-2xl sm:font-xl font-semibold">Contact Us</h2>
      <div className="w-full mt-5">
        <form onSubmit={handleSubmit}>
          <ul className="p-0 m-0 list-none mb-5 overflow-hidden block clear-both relative animate ease-in duration-500 transition-all">
            <li className="w-[100%] float-left clear-none mb-2">
              <input className="w-full border-0 bg-coffee-blue h-[50px] text-xl
                   text-white pt-0 pr-2 box-border"  placeholder="Full Name" type="text" name="name" required />
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
              <input type="submit" className="text-white bg-coffee-blue hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800" value="SEND" />
            </li>
          </ul>
        </form>
      </div>
    </div>
  );
};

export default AppWrap(MotionWrap(Contact, "contact"));
