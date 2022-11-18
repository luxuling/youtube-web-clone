import React, { useRef, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { YoutubeState } from "../context/YoutubeProvider";
import { shortNum } from "../logic/shortNum";
import { useEffect } from "react";
const SearchResult = () => {
  const { sidebarXl, searchResult } = YoutubeState();
  const divAnimate = useAnimation();
  const [windowWidth, setWindowWidth] = useState(0);
  window.addEventListener("resize", () => {
    setWindowWidth(window.innerWidth);
  });
  useEffect(() => {
    if (windowWidth >= 768) {
      if (sidebarXl) {
        divAnimate.start({
          width: ["91%", "82%"],
          transition: {
            duration: 0.2,
          },
        });
      } else {
        divAnimate.start({
          width: ["82%", "91%"],
          transition: {
            duration: 0.2,
          },
        });
      }
    }
  }, [sidebarXl]);

  useEffect(() => {
    const container = document.getElementById("container");
    if (window.innerWidth < 768) {
      container.style.width = "100%";
    } else {
      container.style.width = "95%";
    }
  });
  const hoverHandler = (e, id, gif) => {
    const element = document.getElementById(id);
    if (element !== null) {
      element.src = gif;
    }
  };
  const unhoverHandler = (e, id, thum) => {
    const element = document.getElementById(id);
    if (element !== null) {
      element.src = thum;
    }
  };
  return (
    <div className="h-[585px] flex w-full bg-primary px-0">
      <motion.div
        id="container"
        animate={divAnimate}
        className="w-full h-full md:w-[91%] md:ml-auto lg:w-[95%] overflow-y-scroll flex flex-col gap-3 pt-5 px-6 overflow-x-hidden">
        <div className="w-full flex items-center h-[40px] border-b border-white/10">
          <button className="flex gap-2">
            <span className="material-symbols-outlined text-white font-extralight">tune</span>
            <h1 className="text-white">Filter</h1>
          </button>
        </div>
        {searchResult.map((content) => {
          return (
            <div
              key={content.video?.videoId}
              className="w-full flex flex-shrink-0 h-[199px] text-white cursor-pointer"
              onMouseOver={(e) =>
                hoverHandler(
                  e,
                  content.video?.videoId,
                  content.video?.movingThumbnails[0]?.url
                )
              }
              onMouseOut={(e) =>
                unhoverHandler(
                  e,
                  content.video?.videoId,
                  content.video?.thumbnails[1]?.url
                )
              }>
              <div className="w-[50%] md:w-[360px] h-full">
                <div className="w-full h-full">
                  <img
                    id={content.video?.videoId}
                    src={content.video?.thumbnails[1]?.url}
                    alt=""
                    className="max-w-full max-h-full md:w-full md:h-full overflow-hidden rounded-xl"
                  />
                </div>
              </div>
              <div className="w-[50%] lg:w-[60%] pl-3">
                <h1 className="truncate text-xl">{content.video?.title}</h1>
                <div className="w-full flex gap-3">
                  <p className="text-white/70 text-xs">
                    {shortNum(content.video?.stats.views)}
                  </p>
                  <p className="text-white/70 text-xs">
                    {content.video?.publishedTimeText}
                  </p>
                </div>
                <div className="flex gap-2 mt-3">
                  <img
                    src={content.video?.author.avatar[0].url}
                    alt=""
                    className="w-[25px] h-[25px] rounded-full"
                  />
                  <p>{content.video?.author.title}</p>
                </div>
                <p className="text-xs text-white/70 mt-3">
                  {content.video?.descriptionSnippet}
                </p>
              </div>
            </div>
          );
        })}
      </motion.div>
    </div>
  );
};

export default SearchResult;
