import React from 'react'
import AppWrap from '../src/wrapper/AppWrap'
import MotionWrap from '../src/wrapper/MotionWrap'


const Events = () => {
  return (
    <div>events</div>
  )
}

export default AppWrap(MotionWrap(Events, "events"))