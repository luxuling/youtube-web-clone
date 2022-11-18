import React from 'react'
import { YoutubeState } from '../context/YoutubeProvider'
import { motion } from "framer-motion"
const LoadingBar = () => {
  const {loadingBar} = YoutubeState();
  return (
    <div className='fixed top-0 left-0 w-full h-[3px] bg-primary flex'>
      <motion.div
        animate={{
          width:`${loadingBar}%`
        }}
        className={`h-full w-0 bg-red-500`}></motion.div>
    </div>
  )
}

export default LoadingBar