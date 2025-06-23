"use client"
import React, { useState } from 'react'
import Video from './video'
import ScoreTable from './Score-table'

const LayoutC27L2A2 = () => {
    const [isFirstScreen,setIsFirstScreen] =useState("video")
  return (
    <div >
      {isFirstScreen == "video" && <Video setIsFirstScreen={setIsFirstScreen} />}
      {isFirstScreen == "ScoreTable" && <ScoreTable/>}
    </div>
  )
}

export default LayoutC27L2A2
