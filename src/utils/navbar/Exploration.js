import React from 'react'
import { getImgRel } from '../../logic/getImg'

const Exploration = () => {
  return (
    <div className='absolute z-40 hidden md:flex top-[50%] left-0 w-[70px] h-[300px] md:flex-col md:items-center py-2'>
      <div className='w-[62px] h-[74px] hover:bg-white/10 rounded-xl flex items-center justify-center flex-col gap-1'>
          <img src={getImgRel('sidebar/ythome')} alt="" className='h-[25px]'/>
          <p className='text-white text-[10px]'>Beranda</p>
      </div>
      <div className='w-[62px] h-[74px] hover:bg-white/10 rounded-xl flex items-center justify-center flex-col gap-1'>
          <img src={getImgRel('sidebar/short')} alt="" className='h-[25px]'/>
          <p className='text-white text-[10px]'>Short</p>
      </div>
      <div className='w-[62px] h-[74px] hover:bg-white/10 rounded-xl flex items-center justify-center flex-col gap-1'>
          <img src={getImgRel('sidebar/subs')} alt="" className='h-[25px]'/>
          <p className='text-white text-[10px]'>Subscription</p>
      </div>
      <div className='w-[62px] h-[74px] hover:bg-white/10 rounded-xl flex items-center justify-center flex-col gap-1'>
          <img src={getImgRel('sidebar/colection')} alt="" className='h-[25px]'/>
          <p className='text-white text-[10px]'>Koleksi</p>
      </div>
    </div>
  )
}

export default Exploration