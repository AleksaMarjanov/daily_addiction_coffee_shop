import React from 'react'
import AppWrap from '../src/wrapper/AppWrap'
import MotionWrap from '../src/wrapper/MotionWrap'


const Menu = () => {
  return (
    <div id="menu">menu</div>
  )
}

export default AppWrap(MotionWrap(Menu, "menu"))