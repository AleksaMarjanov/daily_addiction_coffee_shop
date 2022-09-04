import React from 'react'
import AppWrap from '../src/wrapper/AppWrap'
import MotionWrap from '../src/wrapper/MotionWrap'

const about = () => {
  return (
    <div className='flex justify-center items-center text-3xl font-poppins font-bold'>
      <div className='animate-extend2 overflow-x-hidden whitespace-nowrap duration-700'>About</div>
    </div>
  )
}

export default AppWrap(MotionWrap(about, "about"))