import { AnimatePresence, motion } from "framer-motion";
import React from "react";
import { YoutubeState } from "../context/YoutubeProvider";
import Hamburger from "../utils/navbar/Hamburger";
import ytsvg from "../assets/svg/yt.svg";
import Other from "../utils/sidebar/Other";
import Setting from "../utils/sidebar/Setting";
import Footer from "../utils/sidebar/Footer";
import ExplorationSide from "../utils/sidebar/ExplorationSide";
import Second from "../utils/sidebar/Second";
import Subs from "../utils/sidebar/Subs";
import Other2 from "../utils/sidebar/Other2";

const Sidebar = () => {
  const { sidebar } = YoutubeState()
  
  const scrollbar = () => {
    document.getElementById("sidebar").classList.remove("sidebar")
  }
  const leave = () => {
    document.getElementById("sidebar").classList.add("sidebar")
  }
  return (
    <AnimatePresence>
      {sidebar && (
        <div className="bg-primary/70 absolute z-50 w-full h-full">
          <motion.div
            animate={{
              x: [-236, 0],
              transition: {
                duration: 0.2,
              },
            }}
            exit={{
              x: [0, -236],
              transition: {
                duration: 0.2,
              },
            }}
            className="w-[240px] h-full bg-primary">
            <div className="h-[55px] flex items-center px-3">
              <Hamburger />
              <div className="cursor-pointer">
                <img src={ytsvg} alt="" className="w-[118px]" />
              </div>
            </div>

            <div id="sidebar" className="sidebar h-[593px] overflow-y-scroll py-3 px-3" onMouseEnter={scrollbar} onMouseLeave={leave}>
              {/* eksploration */}
              <ExplorationSide />
              {/* second */}
              <Second />
              {/* subscribtion */}
              <Subs/>
              {/* other2 */}
              <Other2/>
              {/* other */}
              <Other />
              {/* setting */}
              <Setting />
              {/* footer */}
              <Footer/>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default Sidebar;
