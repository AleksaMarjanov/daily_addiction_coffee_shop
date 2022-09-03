import Image from "next/image";
import { images } from "../constants";
import { motion } from "framer-motion";
import Link from "next/link";
import AppWrap from "../wrapper/AppWrap";
import MotionWrap from "../wrapper/MotionWrap";

const Banner = () => {
  return (
    <>
      <div className="relative z-0 w-full flex items-center overflow-hidden justify-center">
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
            className="box absolute xs:mb-32 xs:text-xs sm:pt-2 sm:mb-5 rounded-full md:bottom-3 sm:bottom-0 lg:bottom-3 coffee-gradient sm:text-xs minlg:text-lg py-4 px-8 text-md minlg:px-8 sm:mt-5 font-poppins font-semibold text-white "
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

export default AppWrap(MotionWrap(Banner, "banner"));
