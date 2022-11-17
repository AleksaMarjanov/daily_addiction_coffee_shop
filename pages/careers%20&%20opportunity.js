import React, { useRef } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/router";

const Careers = () => {
  const { form } = useRef();
  const router = useRouter();

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
        <section className=" flex flex-row md:pr-5 md:pl-5 items-center justify-center ">
          <h2 className="text-2xl">
            <button
              className="cursor-pointer items-center justify-center bg-[#0086bb] hover:bg-[#0086bb]/80
                py-2 px-5 sm:py-2 sm:px-2 rounded-md text-white font-bold text-sm"
              onClick={() =>
                router.push("https://www.oppfound.org/EmpApplication1")
              }
            >
              Apply
            </button>{" "}
            On Official Opportunity Foundation Website
          </h2>
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
