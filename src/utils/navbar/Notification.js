import React from "react";
import { YoutubeState } from "../../context/YoutubeProvider";
import { getImg, getImgRel } from "../../logic/getImg";
const Notification = () => {
  const { notification } = YoutubeState();
  return (
    notification && (
      <div className="absolute w-[414px] h-[605px] bg-secondary z-[100] top-[50px] rounded-xl right-[90px] md:top-2 md:right-[120px]">
        <div className="h-[50px] w-full border-b border-white/20 flex justify-between items-center px-3">
          <h1 className="text-white">Notifikasi</h1>
          <img src={getImg("setting")} alt="" className="w-[26px] h-[26px]"/>
        </div>
        <div className="w-full h-[555px] flex flex-col justify-center">
          <div className="w-full flex justify-center">
            <img src={getImgRel("notif/notif")} alt="" className="w-[110px]"/>
          </div>
          <h1 className="text-white/50 font-semibold text-center">Notifikasi Anda ada di sini</h1>
          <div className="flex justify-center w-full">
            <p className="text-white/50 text-center w-[350px]">Subscribe ke channel favorit untuk mendapat notifikasi video terbaru dari channel tersebut.</p>
          </div>
          
        </div>
      </div>
    )
  );
};

export default Notification;
