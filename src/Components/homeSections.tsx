import React,{ useState } from 'react'

import { list } from './homeSectionsList';

const HomeSections:Function = () => {

  return (
    <div className='flex flex-wrap mt-5 '>
      {list.map((obj)=>{
        return(
          <div key={obj.name} className="w-1/3 h-48 flex flex-col justify-evenly items-center shadow-xl mx-10 my-3 hover:bg-neutral-100 hover:cursor-pointer hover:shadow-2xl">
            <div><img height={60} width={60} src={obj.icon}/></div>
            <div className='flex flex-col items-center'>
            <div className='text-3xl font-bold'>{obj.name}</div>
            <div className='text-lg font-semibold'>{obj.tasks} Tasks</div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default HomeSections;