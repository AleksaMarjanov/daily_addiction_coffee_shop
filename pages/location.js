import React from 'react'
import AppWrap from '../src/wrapper/AppWrap'
import MotionWrap from '../src/wrapper/MotionWrap'


const Location = () => {
  return (
    <div id="location">locations</div>
  )
}

export default AppWrap(MotionWrap(Location, "location"))