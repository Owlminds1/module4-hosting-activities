"use client"
import React, { useState } from 'react'
import Video from './video'
import ImageScreen from './image'
import Questions from './questions'

const LayoutC27L2A1 = () => {
    const [isFirstScreen,setIsFirstScreen] =useState("video")
  return (
    <div >
      {isFirstScreen == "video" && <Video setIsFirstScreen={setIsFirstScreen} />}
      {isFirstScreen == "Questions" && <Questions setIsFirstScreen={setIsFirstScreen}  />}
      {isFirstScreen == "ImageScreen" && <ImageScreen setIsFirstScreen={setIsFirstScreen}/>}
    </div>
  )
}

export default LayoutC27L2A1
