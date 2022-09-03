import React from 'react'
import AppWrap from '../../wrapper/AppWrap'
import MotionWrap from '../../wrapper/MotionWrap'

const Header = () => {
  return (
    <div id="home" className='mt-32'>Header</div>
  )
}

export default AppWrap(MotionWrap(Header, "home"))