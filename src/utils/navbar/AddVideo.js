import React from 'react'
import { YoutubeState } from '../../context/YoutubeProvider'
import { getImgRel } from '../../logic/getImg'
const AddVideo = () => {
  const { addVideo } = YoutubeState()
  
  return (
    addVideo && (
      <div className='absolute w-[189px] h-[135px] bg-[#212121] right-[122px] top-[49px] rounded-xl flex flex-col justify-center'>
        <div className="h-[40px] hover:bg-white/10 w-full flex items-center px-4 gap-4 cursor-pointer">
            <img
                src={getImgRel("addvideo/upload")}
                alt=""
                className="w-[24px] h-[24px]"/>
            <h1 className="text-white text-[14px]">Upload video</h1>
        </div>
        <div className="h-[40px] hover:bg-white/10 w-full flex items-center px-4 gap-4 cursor-pointer">
            <img
                src={getImgRel("addvideo/live")}
                alt=""
                className="w-[24px] h-[24px]"/>
            <h1 className="text-white text-[14px]">Live streaming</h1>
        </div>
        <div className="h-[40px] hover:bg-white/10 w-full flex items-center px-4 gap-4 cursor-pointer">
            <img
                src={getImgRel("addvideo/postingan")}
                alt=""
                className="w-[24px] h-[24px]"/>
            <h1 className="text-white text-[14px]">Buat postingan</h1>
        </div>
      </div>
    )
  )
}

export default AddVideo