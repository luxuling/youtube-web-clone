import React from "react";
import { getImg } from "../../logic/getImg";

const Other = () => {
  return (
    <div className="w-full py-3 border-b border-white/10">
      <h1 className="text-white/90 text-[17px] font-[450] px-3 pb-2">
        Lainnya Dari YouTube
      </h1>
      <div className="h-[40px] rounded-lg hover:bg-white/10 w-full flex items-center px-3 gap-5 cursor-pointer">
        <img src={getImg("yticon")} alt="" className="w-[24px] h-[24px]" />
        <h1 className="text-white text-[15px]">Youtube Premium</h1>
      </div>

      <div className="h-[40px] rounded-lg hover:bg-white/10 w-full flex items-center px-3 gap-5 cursor-pointer">
        <img src={getImg("studio")} alt="" className="w-[24px] h-[24px]" />
        <h1 className="text-white text-[15px]">Creator Studio</h1>
      </div>

      <div className="h-[40px] rounded-lg hover:bg-white/10 w-full flex items-center px-3 gap-5 cursor-pointer">
        <img src={getImg("music")} alt="" className="w-[24px] h-[24px]" />
        <h1 className="text-white text-[15px]">YouTube Music</h1>
      </div>

      <div className="h-[40px] rounded-lg hover:bg-white/10 w-full flex items-center px-3 gap-5 cursor-pointer">
        <img src={getImg("kids")} alt="" className="w-[24px] h-[24px]" />
        <h1 className="text-white text-[15px]">YouTube Kids</h1>
      </div>

      <div className="h-[40px] rounded-lg hover:bg-white/10 w-full flex items-center px-3 gap-5 cursor-pointer">
        <img src={getImg("yttv")} alt="" className="w-[24px] h-[24px]" />
        <h1 className="text-white text-[15px]">YouTube TV</h1>
      </div>
    </div>
  );
};

export default Other;
