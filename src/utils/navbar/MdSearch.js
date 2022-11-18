import axios from "axios";
import React, { useState } from "react";
import { TfiSearch } from "react-icons/tfi";
import { YoutubeState } from "../../context/YoutubeProvider";
const MdSearch = () => {
  const { setSearchElement, setSearchResult, setLoadingBar } = YoutubeState();
  const [query, setQuery] = useState('')
  const unhideIcon = () => {
    const icon = document.getElementById("searchIcon");
    icon.classList.remove("hidden");
    icon.classList.add("flex");
  };
  document.onclick = (e) => {
    if (e.target !== document.querySelector("input")) {
      const icon = document.getElementById("searchIcon");
      icon.classList.remove("flex");
      icon.classList.add("hidden");
    }
  };

  const searchHandler = async () => {
    if (query.length === 0) { 
      return alert("kosong")
    }
    const options = {
      method: "GET",
      url: "https://youtube138.p.rapidapi.com/search/",
      params: { q: query, hl: "en", gl: "ID" },
      headers: {
        "X-RapidAPI-Key": "your key",
        "X-RapidAPI-Host": "youtube138.p.rapidapi.com",
      },
    };
    try {
      setLoadingBar(50)
      const data = await axios.request(options);
      setSearchResult(data.data.contents);
      setLoadingBar(100);
      setSearchElement(true)
      setTimeout(() => {
        setLoadingBar(0)
      },500)
    }catch (err) {
      console.log(err);
    }
    
  };
  return (
    <div className="h-[40px] hidden md:flex w-[50%] lg:w-[60%] items-center border-secondary border rounded-3xl overflow-hidden ml-auto lg:ml-0 group">
      <div className="flex h-full">
        <div
          id="searchIcon"
          className="w-[45px] items-center justify-center hidden">
          <TfiSearch className="text-white text-lg" />
        </div>
        <input
          type="text"
          className="h-full w-[70%] xl:w-[450px] bg-transparent text-white placeholder:text-white/50 pointer-events-auto outline-none ml-4"
          placeholder="Telusuri" autoFocus
          onChange={(e)=>setQuery(e.target.value)}
          onFocus={unhideIcon}
        />
      </div>
      <button
        className="w-[85px] bg-secondary h-full flex justify-center items-center ml-auto"
        onClick={() => searchHandler()}>
        <TfiSearch className="text-white cursor-pointer text-lg" />
      </button>
    </div>
  );
};

export default MdSearch;
