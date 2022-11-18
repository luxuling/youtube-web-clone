import React from 'react'
import Body from '../components/Body'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import SidebarXl from '../components/SidebarXl'
import SearchResult from './SearchResult'
import { YoutubeState } from '../context/YoutubeProvider'
import LoadingBar from '../components/LoadingBar'
const Home = () => {
  const {searchElement} = YoutubeState()
  return (
    <div className='relative h-screen w-full overflow-hidden'>
      <Sidebar />
      <SidebarXl/>
      <Navbar />
      {searchElement ? (
        <SearchResult/>
      ) : (
          <Body/>
      )}
      <LoadingBar/>
    </div>
  )
}

export default Home