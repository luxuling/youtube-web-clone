import Hamburger from "../utils/navbar/Hamburger";
import ytsvg from "../assets/svg/yt.svg";
import { TfiSearch } from "react-icons/tfi";
import heroimg from "../assets/icon/profile/hero.jpg";
import {
  IoMdMic,
  IoMdNotificationsOutline,
  IoIosNotifications,
} from "react-icons/io";

import { getImg } from "../logic/getImg";
import { YoutubeState } from "../context/YoutubeProvider";
import Notification from "../utils/navbar/Notification";
import Profile from "../utils/navbar/Profile";
import AddVideo from "../utils/navbar/AddVideo";
import Seacrh from "../utils/navbar/Seacrh";
import Exploration from "../utils/navbar/Exploration";
import ScrollMenu from "../utils/navbar/ScrollMenu";
import MdSearch from "../utils/navbar/MdSearch";
const Navbar = () => {
  const {
    setNotification,
    notification,
    profile,
    setProfile,
    addVideo,
    setAddVideo,
    search,
    setSearch,
    setLoadingBar,
    setSearchElement,
    searchResult
  } = YoutubeState();
  const homeRefresh = () => {
    setLoadingBar(50)
    setTimeout(() => {
      setLoadingBar(100)
    }, 1000)
    setTimeout(() => {
      setLoadingBar(0)
      setSearchElement(false)
    },1500)

  }
  return (
    <div
      width={searchResult ? "58px": "109px"}
      className="w-full bg-primary relative">
      <Notification />
      <Profile />
      <AddVideo />
      <Seacrh />
      <Exploration />
      <div
        width={searchResult ? "100%":"50%"}
        className="w-full flex">
        <div className="flex items-center w-1/2 pl-2 gap-2 md:w-1/3 md:pl-5">
          <Hamburger />
          <div
            className="cursor-pointer"
            onClick={homeRefresh}>
            <img src={ytsvg} alt="" className="w-[118px]" />
          </div>
        </div>

        <div className="flex items-center w-1/2 gap-1 pr-9 md:w-full">
          <div
            className="w-[37px] h-[37px] rounded-full flex justify-center items-center hover:bg-white/10 md:hidden"
            onClick={() => setSearch(!search)}>
            <TfiSearch className="text-white cursor-pointer text-lg" />
          </div>
          {/* search bar when medium screen */}
          <MdSearch />
          <div className="w-[40px] h-[40px] bg-secondary/60 md:bg-secondary/40 md:rounded-full md:ml-1 flex items-center justify-center cursor-pointer">
            <IoMdMic className="text-white text-3xl hover:bg-white/20 p-1 rounded-full" />
          </div>
          <div
            className="w-[37px] h-[37px] rounded-full flex justify-center items-center hover:bg-white/10 md:ml-auto"
            onClick={() => setAddVideo(!addVideo)}>
            <img
              src={getImg(addVideo ? "addvideo-active" : "addvideo")}
              alt=""
              className="w-[25px]"
            />
          </div>
          <div
            className="w-[37px] h-[37px] rounded-full flex justify-center items-center md:ml-3 hover:bg-white/10 cursor-pointer group"
            onClick={() => setNotification(!notification)}>
            {notification ? (
              <IoIosNotifications className="text-white text-2xl" />
            ) : (
              <IoMdNotificationsOutline className="text-white text-2xl" />
            )}
          </div>
          <div
            className="w-[33px] h-[33px] rounded-full overflow-hidden ml-auto cursor-pointer md:ml-3"
            onClick={() => setProfile(!profile)}>
            <img src={heroimg} alt="" />
          </div>
        </div>
      </div>

      {/* scroll x menu */}
      <ScrollMenu />
    </div>
  );
};

export default Navbar;
