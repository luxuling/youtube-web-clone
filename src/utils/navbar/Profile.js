import React from "react";
import heroimg from '../../assets/icon/profile/hero.jpg';
import { YoutubeState } from "../../context/YoutubeProvider";
import { getImgRel } from "../../logic/getImg";
const Profile = () => {
  const { profile } = YoutubeState();
  return (
    profile && (
      <div className="absolute w-[300px] h-[645px] bg-secondary top-[10px] right-[86px] z-[100] rounded-xl">
        <div className="h-[82px] w-full border-b border-white/20 flex items-center px-3 gap-3">
          <div className="w-[42px] rounded-full overflow-hidden">
            <img
              src={heroimg}
              alt=""
            />
          </div>
          <div className="flex flex-col gap-1">
            <h1 className="text-white font-semibold">Antoni Saputra</h1>
            <p className="text-sky-400 text-[14px] cursor-pointer">
              Kelola Akun Google Anda
            </p>
          </div>
        </div>
        <div id="profile" className="h-[563px] overflow-y-scroll w-full py-2">
          <div className="border-b-[1px] border-white/10 pb-3">
            <div className="h-[40px] hover:bg-white/10 w-full flex items-center px-4 gap-4 cursor-pointer">
              <img
                src={getImgRel("profile/channel")}
                alt=""
                className="w-[24px] h-[24px]"
              />
              <h1 className="text-white text-[14px]">Channel Anda</h1>
            </div>
            <div className="h-[40px] hover:bg-white/10 w-full flex items-center px-4 gap-4 cursor-pointer">
              <img
                src={getImgRel("profile/ytstudio")}
                alt=""
                className="w-[24px] h-[24px]"
              />
              <h1 className="text-white text-[14px]">Youtube Studio</h1>
            </div>
            <div className="h-[40px] hover:bg-white/10 w-full flex items-center px-4 gap-4 cursor-pointer">
              <img
                src={getImgRel("profile/account")}
                alt=""
                className="w-[24px] h-[24px]"
              />
              <h1 className="text-white text-[14px]">Ganti Akun</h1>
              <img
                src={getImgRel("profile/arrowR")}
                alt=""
                className="w-[24px] h-[24px] ml-auto"
              />
            </div>
            <div className="h-[40px] hover:bg-white/10 w-full flex items-center px-4 gap-4 cursor-pointer">
              <img
                src={getImgRel("profile/logout")}
                alt=""
                className="w-[24px] h-[24px]"
              />
              <h1 className="text-white text-[14px]">Logout</h1>
            </div>
          </div>

          {/* second column */}
          <div className="border-b-[1px] border-white/10 py-3">
            <div className="h-[40px] hover:bg-white/10 w-full flex items-center px-4 gap-4 cursor-pointer">
              <img
                src={getImgRel("profile/langganan")}
                alt=""
                className="w-[24px] h-[24px]"
              />
              <h1 className="text-white text-[14px]">
                Pembelian dan langganan
              </h1>
            </div>
            <div className="h-[40px] hover:bg-white/10 w-full flex items-center px-4 gap-4 cursor-pointer">
              <img
                src={getImgRel("profile/data")}
                alt=""
                className="w-[24px] h-[24px]"
              />
              <h1 className="text-white text-[14px]">Data Anda di YouToube</h1>
            </div>
          </div>
          {/* thied column */}
          <div className="border-b-[1px] border-white/10 py-3">
          <div className="h-[40px] hover:bg-white/10 w-full flex items-center px-4 gap-4 cursor-pointer">
              <img
                src={getImgRel("profile/thema")}
                alt=""
                className="w-[24px] h-[24px]"
              />
              <h1 className="text-white text-[14px]">Tampilan : Tema perangkat</h1>
              <img
                src={getImgRel("profile/arrowR")}
                alt=""
                className="w-[24px] h-[24px] ml-auto"
              />
            </div>
            <div className="h-[40px] hover:bg-white/10 w-full flex items-center px-4 gap-4 cursor-pointer">
              <img
                src={getImgRel("profile/language")}
                alt=""
                className="w-[24px] h-[24px]"
              />
              <h1 className="text-white text-[14px]">Bahasa:Indonesia</h1>
              <img
                src={getImgRel("profile/arrowR")}
                alt=""
                className="w-[24px] h-[24px] ml-auto"
              />
            </div>
            <div className="h-[40px] hover:bg-white/10 w-full flex items-center px-4 gap-4 cursor-pointer">
              <img
                src={getImgRel("profile/terbatas")}
                alt=""
                className="w-[24px] h-[24px]"
              />
              <h1 className="text-white text-[14px]">Mode Terbatas:Noaktif</h1>
              <img
                src={getImgRel("profile/arrowR")}
                alt=""
                className="w-[24px] h-[24px] ml-auto"
              />
            </div>
            <div className="h-[40px] hover:bg-white/10 w-full flex items-center px-4 gap-4 cursor-pointer">
              <img
                src={getImgRel("profile/location")}
                alt=""
                className="w-[24px] h-[24px]"
              />
              <h1 className="text-white text-[14px]">Lokasi:Indonesia</h1>
              <img
                src={getImgRel("profile/arrowR")}
                alt=""
                className="w-[24px] h-[24px] ml-auto"
              />
            </div>
            <div className="h-[40px] hover:bg-white/10 w-full flex items-center px-4 gap-4 cursor-pointer">
              <img
                src={getImgRel("profile/keyboard")}
                alt=""
                className="w-[24px] h-[24px]"
              />
              <h1 className="text-white text-[14px]">Pintasan keyboard</h1>
            </div>
          </div>
          {/* fourt column */}
          <div className="border-b-[1px] border-white/10 py-3">
          <div className="h-[40px] hover:bg-white/10 w-full flex items-center px-4 gap-4 cursor-pointer">
              <img
                src={getImgRel("profile/setting")}
                alt=""
                className="w-[24px] h-[24px]"
              />
              <h1 className="text-white text-[14px]">Setelan</h1>
            </div>
          </div>
          {/* five column */}
          <div className="border-b-[1px] border-white/10 py-3">
          <div className="h-[40px] hover:bg-white/10 w-full flex items-center px-4 gap-4 cursor-pointer">
              <img
                src={getImgRel("profile/help")}
                alt=""
                className="w-[24px] h-[24px]"
              />
              <h1 className="text-white text-[14px]">Bantuan</h1>
            </div>
            <div className="h-[40px] hover:bg-white/10 w-full flex items-center px-4 gap-4 cursor-pointer">
              <img
                src={getImgRel("profile/suggest")}
                alt=""
                className="w-[24px] h-[24px]"
              />
              <h1 className="text-white text-[14px]">Kirim masukan</h1>
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default Profile;
