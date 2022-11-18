import React from 'react'
import { getImg } from '../../logic/getImg'

const ExplorationSide = () => {
  return (
    <div className="border-b-[1px] border-white/10 pb-3">
                <div className="h-[40px] rounded-lg hover:bg-white/10 w-full flex items-center px-3 gap-5 cursor-pointer">
                  <img
                    src={getImg("ythome")}
                    alt=""
                    className="w-[24px] h-[24px]"
                  />
                  <h1 className="text-white text-[15px]">Beranda</h1>
                </div>
                <div className="h-[40px] rounded-lg hover:bg-white/10 w-full flex items-center px-3 gap-5 cursor-pointer">
                  <img
                    src={getImg("short")}
                    alt=""
                    className="w-[24px] h-[24px]"
                  />
                  <h1 className="text-white text-[15px]">Sorts</h1>
                </div>
                <div className="h-[40px] rounded-lg hover:bg-white/10 w-full flex items-center px-3 gap-5 cursor-pointer">
                  <img
                    src={getImg("subs")}
                    alt=""
                    className="w-[24px] h-[24px]"
                  />
                  <h1 className="text-white text-[15px]">Subscribtion</h1>
                </div>
              </div>
  )
}

export default ExplorationSide