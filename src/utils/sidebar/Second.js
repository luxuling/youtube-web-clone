import React from 'react'
import { SlArrowDown } from 'react-icons/sl'
import { getImg } from '../../logic/getImg'

const Second = () => {
  return (
    <div className="py-3 w-full border-b border-white/10">
                <div className="h-[40px] rounded-lg hover:bg-white/10 w-full flex items-center px-3 gap-5 cursor-pointer">
                  <img src={getImg("colection")} alt="" className="w-[24px] h-[24px]" />
                  <h1 className="text-white text-[15px]">Koleksi</h1>
                </div>
                <div className="h-[40px] rounded-lg hover:bg-white/10 w-full flex items-center px-3 gap-5 cursor-pointer">
                  <img src={getImg("history")} alt="" className="w-[24px] h-[24px]" />
                  <h1 className="text-white text-[15px]">Histori</h1>
                </div>
                <div className="h-[40px] rounded-lg hover:bg-white/10 w-full flex items-center px-3 gap-5 cursor-pointer">
                  <img src={getImg("yourvidio")} alt="" className="w-[24px] h-[24px]" />
                  <h1 className="text-white text-[15px]">Video Anda</h1>
                </div>
                <div className="h-[40px] rounded-lg hover:bg-white/10 w-full flex items-center px-3 gap-5 cursor-pointer">
                  <img src={getImg("watch")} alt="" className="w-[24px] h-[24px]" />
                  <h1 className="text-white text-[15px]">Video Anda</h1>
                </div>
                <div className="h-[40px] rounded-lg hover:bg-white/10 w-full flex items-center px-3 gap-5 cursor-pointer">
                  <img src={getImg("liked")} alt="" className="w-[24px] h-[24px]" />
                  <h1 className="text-white text-[15px]">Video Anda</h1>
                </div>
                <div className="h-[40px] rounded-lg hover:bg-white/10 w-full flex items-center px-3 gap-5 cursor-pointer">
                  <SlArrowDown className="text-white text-[15px] ml-1 mr-1"/>
                  <h1 className="text-white text-[15px]">Lebih Banyak</h1>
                </div>
              </div>
  )
}

export default Second