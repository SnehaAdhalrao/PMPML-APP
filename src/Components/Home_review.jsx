import React from 'react'
import { IconContext } from 'react-icons';
import { FcBusinessman } from "react-icons/fc";
import { FcBusinesswoman } from "react-icons/fc";
import { TbUserPlus } from "react-icons/tb";

export default function Home_review() {
    const data=[<FcBusinessman />,<FcBusinesswoman />,<TbUserPlus />]
  return (
    
        <div className='flex gap-4 items-center justify-between'>
    <div className='h-16 w-16  flex justify-center items-center gap-4 '>
      {data.map((ele,index)=>(
        <IconContext.Provider value={{  size:"2em",className: "global-class-name size-5em" }}>
        <div className='bg-zinc-300 rounded-full border-[0.2px] border-black'>
         {ele}
        </div>
        
      </IconContext.Provider>
      ))}
    </div>
    <span className='ml-6 text-sm font-semibold'>28+Registred people</span>
    </div>
  )
}
