import React from 'react'
import { YoutubeState } from "../../context/YoutubeProvider"

const Hamburger = () => {
  const {setSidebar,sidebar,sidebarXl, setSidebarXl} = YoutubeState()
  return (
    <>
      <div className='justify-center items-center w-[37px] h-[37px] flex flex-col gap-[5px] cursor-pointer hover:bg-white/10 rounded-full xl:hidden' onClick={()=>setSidebar(!sidebar)}>
      <span className='bg-white h-[1px] w-[18px] block'></span>
      <span className='bg-white h-[1px] w-[18px] block'></span>
      <span className='bg-white h-[1px] w-[18px] block'></span>
      </div>
      <div className='justify-center items-center w-[37px] h-[37px] hidden flex-col gap-[5px] cursor-pointer hover:bg-white/10 rounded-full xl:flex' onClick={()=>setSidebarXl(!sidebarXl)}>
      <span className='bg-white h-[1px] w-[18px] block'></span>
      <span className='bg-white h-[1px] w-[18px] block'></span>
      <span className='bg-white h-[1px] w-[18px] block'></span>
    </div>
    </>
  )
}

export default Hamburger