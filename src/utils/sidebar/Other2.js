import React from 'react'
import { getImg } from '../../logic/getImg'

const Other2 = () => {
  return (
    <div className="w-full py-3 border-b border-white/10">
                <h1 className="text-white/90 text-[17px] font-[450] px-3 pb-2">Eksplorasi</h1>
                <div className="h-[40px] rounded-lg hover:bg-white/10 w-full flex items-center px-3 gap-5 cursor-pointer">
                  <img src={getImg("tren")} alt="" className="w-[24px] h-[24px]" />
                  <h1 className="text-white text-[15px]">Trending</h1>
                </div>

                <div className="h-[40px] rounded-lg hover:bg-white/10 w-full flex items-center px-3 gap-5 cursor-pointer">
                  <img src={getImg("musik")} alt="" className="w-[24px] h-[24px]" />
                  <h1 className="text-white text-[15px]">Musik</h1>
                </div>

                <div className="h-[40px] rounded-lg hover:bg-white/10 w-full flex items-center px-3 gap-5 cursor-pointer">
                  <img src={getImg("film")} alt="" className="w-[24px] h-[24px]" />
                  <h1 className="text-white text-[15px]">Film</h1>
                </div>

                <div className="h-[40px] rounded-lg hover:bg-white/10 w-full flex items-center px-3 gap-5 cursor-pointer">
                  <img src={getImg("game")} alt="" className="w-[24px] h-[24px]" />
                  <h1 className="text-white text-[15px]">Game</h1>
                </div>

                <div className="h-[40px] rounded-lg hover:bg-white/10 w-full flex items-center px-3 gap-5 cursor-pointer">
                  <img src={getImg("news")} alt="" className="w-[24px] h-[24px]" />
                  <h1 className="text-white text-[15px]">Berita</h1>
                </div>

                <div className="h-[40px] rounded-lg hover:bg-white/10 w-full flex items-center px-3 gap-5 cursor-pointer">
                  <img src={getImg("sport")} alt="" className="w-[24px] h-[24px]" />
                  <h1 className="text-white text-[15px]">Olahraga</h1>
                </div>

                <div className="h-[40px] rounded-lg hover:bg-white/10 w-full flex items-center px-3 gap-5 cursor-pointer">
                  <img src={getImg("fashion")} alt="" className="w-[24px] h-[24px]" />
                  <h1 className="text-white text-[15px] truncate">Mode Busana & Keluarga</h1>
                </div>
              </div>
  )
}

export default Other2