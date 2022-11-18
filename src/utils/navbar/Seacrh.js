import axios from 'axios'
import React, { useState } from 'react'
import { IoMdMic } from 'react-icons/io'
import { TfiSearch } from 'react-icons/tfi'
import { YoutubeState } from '../../context/YoutubeProvider'
import { getImgRel } from '../../logic/getImg'
const Seacrh = () => {
  const { search, setSearch, setSearchElement, setSearchResult, setLoadingBar ,searchResult} = YoutubeState()
  const [query,setQuery] = useState('')
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
    search && (
      <div
        style={{
          height:searchResult ? "100%":"50%"
        }}
        className='absolute top-0 w-full bg-primary flex items-center justify-between px-2 md:hidden'>
        <div className="w-[37px] h-[37px] rounded-full flex justify-center items-center hover:bg-white/10" onClick={()=>setSearch(!search)}>
            <img src={getImgRel("search/arrowL")} alt="" className='w-[23px]'/>
        </div>
        <div className='h-[40px] flex w-[365px] items-center border-secondary border rounded-3xl overflow-hidden'>
          <div className='flex h-full'>
            <div className='w-[45px] flex items-center justify-center'>
            <TfiSearch className="text-white cursor-pointer text-lg" />
            </div>
            <input type="text" className='h-full w-[248px] bg-transparent text-white pointer-events-auto outline-none'placeholder="Telusuri" autoFocus onChange={(e)=>setQuery(e.target.value)}/>
          </div>
          <button className='w-[70px] bg-secondary h-full flex justify-center items-center'><TfiSearch className="text-white cursor-pointer text-lg" onClick={searchHandler}/></button>
        </div>
        <div className="w-[40px] h-[40px] bg-white/10 flex items-center justify-center cursor-pointer">
            <IoMdMic className="text-white text-3xl hover:bg-white/20 p-1 rounded-full" />
          </div>
      </div>
    )
  )
}

export default Seacrh
