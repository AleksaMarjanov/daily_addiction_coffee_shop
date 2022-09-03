import React from 'react'
import AppWrap from '../wrapper/AppWrap'
import MotionWrap from '../wrapper/MotionWrap'

const Menu = () => {
  return (
    <div>Menu</div>
  )
}

export default AppWrap(MotionWrap(Menu, "menu"))