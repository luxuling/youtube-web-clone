import axios from 'axios'
import React, { createContext, useContext, useEffect, useState } from 'react'

const YoutubeContext = createContext()
const YoutubeProvider = ({ children }) => {
  const [sidebar, setSidebar] = useState(false)
  const [notification, setNotification] = useState(false)
  const [profile, setProfile] = useState(false)
  const [addVideo, setAddVideo] = useState(false)
  const [search, setSearch] = useState(false)
  const [sidebarXl, setSidebarXl] = useState(false)
  const [channel, setChannel] = useState([])
  const [searchElement, setSearchElement] = useState(false)
  const [searchResult, setSearchResult] = useState(false)
  const [loadingBar, setLoadingBar] = useState(0);
  useEffect(() => {
    const getChannel = async () => {
      const data = await axios.get("https://www.googleapis.com/youtube/v3/search?key=yourkey&q=holoid&type=channel&part=snippet&maxResults=7") //sebenernya bisa pake yang di rapid api
      setChannel(data.data.items)
    }
    getChannel()
  }, [])
  return (
    <YoutubeContext.Provider value={{sidebar,setSidebar,notification,setNotification,profile, setProfile,addVideo,setAddVideo,search, setSearch,sidebarXl, setSidebarXl,channel,searchElement,setSearchElement,searchResult, setSearchResult,loadingBar, setLoadingBar}}>{children}</YoutubeContext.Provider>
  )
}
export const YoutubeState = () => {
  return useContext(YoutubeContext)
}
export default YoutubeProvider