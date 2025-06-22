"use client"
import React, { useState } from 'react'
import Video from './video'
import ImageScreen from './image'

const LayoutC27L2A1 = () => {
    const [isFirstScreen,setIsFirstScreen] =useState("video")
  return (
    <div >
      {isFirstScreen == "video" && <Video setIsFirstScreen={setIsFirstScreen} />}
      {isFirstScreen == "ImageScreen" && <ImageScreen/>}
    </div>
  )
}

export default LayoutC27L2A1
