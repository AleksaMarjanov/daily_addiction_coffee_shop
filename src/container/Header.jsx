import React from 'react'
import AppWrap from '../wrapper/AppWrap'
import MotionWrap from '../wrapper/MotionWrap'
import  Image  from 'next/image';
import { images} from '../constants'
import { motion } from 'framer-motion'

const Header = () => {
  return (
    <div id="home" className='mt-56'>
      <Image src={images.hero} alt="hero"  objectFit="cover" />
      <motion.button>

      </motion.button>
    </div>
  )
}

export default AppWrap(MotionWrap(Header, "home"))