import React from 'react'
import AppWrap from '../wrapper/AppWrap'
import MotionWrap from '../wrapper/MotionWrap'

const Gallery = () => {
  return (
    <div id="gallery">Gallery</div>
  )
}

export default AppWrap(MotionWrap(Gallery, "gallery"))