import React from 'react'
import AppWrap from '../../wrapper/AppWrap'
import MotionWrap from '../../wrapper/MotionWrap'

const About = () => {
  return (
    <div id="about">About</div>
  )
}

export default AppWrap(MotionWrap(About, "about"))