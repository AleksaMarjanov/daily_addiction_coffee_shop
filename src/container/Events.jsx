import React from 'react'
import AppWrap from '../../wrapper/AppWrap'
import MotionWrap from '../../wrapper/MotionWrap'

const Events = () => {
  return (
    <div>Events</div>
  )
}

export default AppWrap(MotionWrap(Events, "events"))