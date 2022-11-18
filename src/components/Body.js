import axios from "axios";
import React, { useEffect, useState } from "react";
import { shortNum } from "../logic/shortNum";
import { YoutubeState } from "../context/YoutubeProvider";
import { motion, useAnimation } from "framer-motion";
const Body = () => {
  const [items, setItems] = useState([]);
  const { sidebarXl } = YoutubeState();
  const divAnimate = useAnimation();
  const [windowWidth, setWindowWidth] = useState(0)

  useEffect(() => {
    const options = {
      method: "GET",
      url: "https://youtube138.p.rapidapi.com/video/related-contents/",
      params: { id: "L5Cb67mqPRY", hl: "en", gl: "id" },
      headers: {
        "X-RapidAPI-Key": "bfb74848f6mshdc21d6375cf711bp1f6424jsn4381f5413c63",
        "X-RapidAPI-Host": "youtube138.p.rapidapi.com",
      },
    };
    const getVideo = async () => {
      try {
        const { data } = await axios.request(options);
        setItems(data.contents);
      } catch (error) {
        console.log(error);
      }
    };
    getVideo();
  }, []);
  

  window.addEventListener('resize', () => {
    setWindowWidth(window.innerWidth)
  })
  useEffect(() => {
    if (windowWidth >= 768) {
      if (sidebarXl) {
        divAnimate.start({
          width: ["95%", "85%"],
          transition: {
            duration: 0.2,
          },
        });
      } else {
        divAnimate.start({
          width: ["85%", "95%"],
          transition: {
            duration: 0.2,
          },
        });
      }
    } 
  }, [sidebarXl]);
  
  useEffect(() => {
    const container = document.getElementById("container");
    if (window.innerWidth < 768 ) {
      container.style.width = "100%"
    } else {
      container.style.width = "91%"
    }
  },[windowWidth])
  return (
    <div className="h-[554px] w-full bg-primary">
      <motion.div id="container"
        animate={divAnimate}
        className="w-full md:w-[91%] lg:w-[95%] md:ml-auto h-full overflow-y-scroll flex flex-wrap gap-3 justify-center pt-5">
        {items.map((content) => {
          return (
            <motion.div
              animate={{
                width: sidebarXl ? ["293px", "241px"] : ["241px", "293px"],
                transition: {
                  duration: 0.1,
                },
              }}
              key={content.video.videoId}
              className="w-[322px] h-[294px] lg:h-[270px] md:w-[241px] xl:w-[293px] flex flex-col gap-3">
              <motion.div
                animate={{
                height: sidebarXl ? ["164px", "140px"] : ["140px", "164px"],
                transition: {
                  duration: 0.1,
                },
              }}
                className="w-full h-[180px] md:h-[140px] xl:h-[164px] flex justify-center items-center overflow-hidden rounded-2xl">
                <img
                  src={content.video.thumbnails[1].url}
                  alt=""
                  className="w-full h-full"
                />
              </motion.div>
              <div className="w-full h-[105px] flex gap-2">
                <div className="w-[51px] h-full flex">
                  <div className="w-[35px] h-[35px] rounded-full overflow-hidden">
                    <img
                      src={content.video.author.avatar[0].url}
                      alt=""
                      className="w-full h-full"
                    />
                  </div>
                </div>
                <div>
                  <p className="text-white text-sm font-medium">
                    {content.video.title}
                  </p>
                  <p className="text-white/70 text-xs">
                    {content.video.author.title}
                  </p>
                  <div className="w-full flex gap-3">
                    <p className="text-white/70 text-xs">
                      {shortNum(content.video.stats.views)}
                    </p>
                    <p className="text-white/70 text-xs">
                      {content.video.publishedTimeText}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
};

export default Body;
