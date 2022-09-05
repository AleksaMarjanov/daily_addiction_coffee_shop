import React from 'react'
import AppWrap from '../src/wrapper/AppWrap'
import MotionWrap from '../src/wrapper/MotionWrap'

const About = () => {
  return (
    <div id="about" className='flex flex-col font-poppins '>
      <div className='animate-extend2 overflow-x-hidden no-scrollbar whitespace-nowrap duration-700 text-6xl font-semibold'>About</div>
      <span className=''>We're not just about coffee</span>
    </div>
  )
}

export default AppWrap(MotionWrap(About, "about"))