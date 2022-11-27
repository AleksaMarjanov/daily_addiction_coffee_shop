import React, { useRef } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/router";
import emailjs from "@emailjs/browser";

const Careers = () => {
  const { form } = useRef();
  const router = useRouter();

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
    <main className="flex flex-col justify-center items-center">
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
        <h2 className="text-4xl md:text-2xl sm:text-xl font-semibold tracking-[2px]">
          Careers
        </h2>
      </motion.div>
      <div className="flex flex-col justify-center items-center space-y-10 mt-0">
        <h4 className="text-4xl md:text-2xl sm:text-xl font-semibold text-center">
          Always looking to hire{" "}
          <span className="underline decoration-[#0086bb]/50">
            Great People.
          </span>
        </h4>
        <section className="flex gap-2 items-center justify-center">
            <button
              className="cursor-pointer flex items-center justify-center bg-[#0086bb] hover:bg-[#0086bb]/80
                py-2 px-5 sm:py-2 sm:px-2 rounded-md text-white font-bold text-sm"
              onClick={() =>
                router.push("https://www.oppfound.org/EmpApplication1")
              }
            >
              Apply
            </button>{" "} 
            <h2 className="sm:text-xl text-2xl xl:p-3 minsm:p-1 sm:p-0">On Official Opportunity<br/> Foundation Website</h2> 
        </section>
        {/* Submit should go to https:// See Text Msg from Kendra */}
        <form
          className="flex flex-col space-y-2 mx-auto"
          onSubmit={() => sendEmail()}
          ref={form}
        >
          <div className="flex sm:flex-col space-x-2 sm:space-x-0">
            <input
              type="text"
              className="contactInput"
              placeholder="Full Name"
              required
            />
            <input
              type="email"
              className="contactInput"
              placeholder="Email"
              required
            />
          </div>

          <input
            placeholder="Desired Position"
            type="text"
            className="contactInput"
            required
          />

          <textarea
            placeholder="Cover Letter"
            name=""
            className="contactInput"
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
      </div>
    </main>
  );
};

export default Careers;
