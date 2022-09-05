import React from 'react'
import AppWrap from '../src/wrapper/AppWrap'
import MotionWrap from '../src/wrapper/MotionWrap'


const Contact = () => {
  return (
    <div>contact</div>
  )
}

export default AppWrap(MotionWrap(Contact, "contact"))