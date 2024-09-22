import React from 'react'
import { IconContext } from 'react-icons';
import { FaArrowLeft } from "react-icons/fa";
import { HiMenuAlt2 } from "react-icons/hi";
import { CgProfile } from "react-icons/cg";

export default function PageTitle({text}) {
  return (
    <div className='mx-auto bg-green-500 flex items-center justify-between m-10 p-5  h-[30px]'>
       
<IconContext.Provider value={{  className: "global-class-name size-5em" }}>
  <div>
    <FaArrowLeft />
  </div>
</IconContext.Provider>
      <span className=' font-bold text-2xl'>
      {text}
      </span>
      
             
<IconContext.Provider value={{  className: "global-class-name " ,size:"1.5em"}}>
  <div className='flex gap-4 -translate-x-[60px]'>
  <HiMenuAlt2 />
  <CgProfile />
  </div>
</IconContext.Provider>
      
      </div>
   
  )
}
