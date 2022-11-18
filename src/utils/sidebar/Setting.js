import React from 'react'
import { getImg } from '../../logic/getImg'

const Setting = () => {
  return (
    <div className="w-full py-3 border-b border-white/10">
      <div className="h-[40px] rounded-lg hover:bg-white/10 w-full flex items-center px-3 gap-5 cursor-pointer">
        <img src={getImg("setting")} alt="" className="w-[24px] h-[24px]" />
        <h1 className="text-white text-[15px]">Setelan</h1>
      </div>
      <div className="h-[40px] rounded-lg hover:bg-white/10 w-full flex items-center px-3 gap-5 cursor-pointer">
        <img src={getImg("report")} alt="" className="w-[24px] h-[24px]" />
        <h1 className="text-white text-[15px]">Histori laporan</h1>
      </div>
      <div className="h-[40px] rounded-lg hover:bg-white/10 w-full flex items-center px-3 gap-5 cursor-pointer">
        <img src={getImg("help")} alt="" className="w-[24px] h-[24px]" />
        <h1 className="text-white text-[15px]">Bantuan</h1>
      </div>
      <div className="h-[40px] rounded-lg hover:bg-white/10 w-full flex items-center px-3 gap-5 cursor-pointer">
        <img src={getImg("sugest")} alt="" className="w-[24px] h-[24px]" />
        <h1 className="text-white text-[15px]">Kirim masukan</h1>
      </div>
    </div>
  )
}

export default Setting