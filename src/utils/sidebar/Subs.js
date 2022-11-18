import React from 'react'
import { SlArrowDown } from 'react-icons/sl'
import { YoutubeState } from '../../context/YoutubeProvider'
const Subs = () => {
  const {channel} = YoutubeState()
  return (
    <div className="w-full py-3">
                <h1 className="text-white/90 text-[17px] font-[450] px-3 pb-2">Subscribtion</h1>

                {channel.map((chan) => {
                  return (
                    <div className="h-[40px] rounded-lg hover:bg-white/10 w-full flex items-center px-3 gap-5 whitespace-nowrap	overflow-hidden cursor-pointer">
                  <img src={chan.snippet.thumbnails.default.url} alt="" className="w-[24px] h-[24px] rounded-full" />
                      <h1 className="text-white text-[15px] truncate">{chan.snippet.channelTitle}</h1>
                </div>
                  )
                })}
                <div className="h-[40px] rounded-lg hover:bg-white/10 w-full flex items-center px-3 gap-5 cursor-pointer">
                  <SlArrowDown className="text-white text-[15px] ml-1 mr-1"/>
                  <h1 className="text-white text-[15px]">Lebih 20 Lagi</h1>
                </div>
              </div>
  )
}

export default Subs