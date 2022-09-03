import React from 'react'
import AppWrap from '../wrapper/AppWrap'
import MotionWrap from '../wrapper/MotionWrap'

const Contact = () => {
  return (
    <div id="contact">Contact</div>
  )
}

export default AppWrap(MotionWrap(Contact, "contact"))