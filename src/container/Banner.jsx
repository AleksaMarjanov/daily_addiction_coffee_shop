import Image from "next/image";
import { images } from "../constants";
import { motion } from "framer-motion";
import Link from "next/link";
import MotionWrap from "../wrapper/MotionWrap";

const Banner = () => {
  return (
    <>
      <div className="relative xs:mt-[5.1rem] sm:mt-[5rem] minsm:mt-[6.2rem] md:mt-[6.1rem] minmd:mt-[5.80rem] lg:mt-[5.65rem] xl:mt-[5.7rem] z-0 w-full flex items-center overflow-hidden justify-center">
        <p className="font-poppins text-4xl sm:text-sm sm:mb-3 
        shadow-xl absolute left-96 md:left-4 md:text-2xl minmd:left-16 minlg:left-39 lg:left-64 z-20 text-white flex items-start justify-start">
          Daily Addiction<br/>
          Coffeehouse
        </p>
        <Image
          className="relative"
          src={images.hero}
          objectFit="contain"
          width={1200}
          height={400}
          alt="hero"
        />
        <Link href="https://www.doordash.com/en-CA/store/daily-addiction-coffee-house-williston-1312569/">
          <motion.button
            className="box absolute text-md py-4 px-8 font-poppins font-semibold text-white text-xs sm:pt-2 sm:mb-5 rounded-full 
            md:bottom-5 md:text-sm lg:bottom-10 sm:bottom-0 
            button-gradient sm:text-xs sm:py-2 sm:px-2 minlg:text-lg xl:mt-56 xl:text-xl
             minlg:px-8 sm:mt-5 "
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            Order Now
          </motion.button>
        </Link>
      </div>
    </>
  );
};

export default MotionWrap(Banner, "banner");