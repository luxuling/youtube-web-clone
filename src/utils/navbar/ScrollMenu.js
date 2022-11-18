import React, { useEffect, useRef } from 'react'
import navbarJson from "../../data/navabarMenu.json";
import { motion } from "framer-motion";
import { YoutubeState } from '../../context/YoutubeProvider';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
const ScrollMenu = () => {
  const {sidebarXl,searchResult} = YoutubeState()
  const ref = useRef(null);
  useEffect(() => {
    const slider = ref.current;
    hideIcon(slider);
  }, [ref]);
  const scrollLeft = () => {
    const slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft - 200;
  };
  const scrollRight = () => {
    const slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft + 200;
  };


  const hideIcon = (slider) => {
    if (slider.scrollLeft === 0) {
      document.getElementById("arrRight").classList.remove("visible");
      document.getElementById("arrRight").classList.add("invisible");
    } else {
      document.getElementById("arrRight").classList.add("visible");
      document.getElementById("arrRight").classList.remove("invisible");
    }
  };
  return (
    !searchResult && (
      <motion.div
        animate={{
          width: sidebarXl ? ["96%", "85%"] : ["85%", "96%"],
          transition: {
                duration: 0.2,
          }
        }}
        
        className="w-full h-1/2 flex px-3 overflow-clip bg-primary md:w-[96%] md:ml-auto">
        <div
          id="arrRight"
          className="w-[70px] h-full bg-primary flex shadow-[0px_5px_40px_20px_#0F0F0F] z-20 items-center justify-center">
          <IoIosArrowBack
            className="text-white text-lg cursor-pointer"
            onClick={scrollLeft}
          />
        </div>
        <div
          id="slider"
          ref={ref}
          className="w-full overflow-x-scroll overflow-y-hidden flex items-center gap-2 scrollbar-hide scroll-smooth bg-primary"
          onScroll={(e) => hideIcon(e.target)}>
          {navbarJson.map((item) => {
            return (
              <button
                key={item.name}
                className={`h-[30px] ${
                  item.selected
                    ? "bg-white text-black"
                    : "bg-white/20 text-white"
                } items-center rounded-md px-3 text-center flex flex-shrink-0 group`}>
                <h1 className="capitalize">{item.name}</h1>
              </button>
            );
          })}
        </div>
        <div className="w-[70px] h-full bg-primary flex shadow-[0px_5px_40px_20px_#0F0F0F] z-20 items-center justify-center">
          <IoIosArrowForward
            className="text-white text-lg cursor-pointer"
            onClick={scrollRight}
          />
        </div>
      </motion.div>
    )
  )
}

export default ScrollMenu