import React from 'react'
import { MdSubdirectoryArrowRight } from "react-icons/md";
const Button = ({text}) => {
  return (
    <div className=' h-7 w-[130px] bg-zinc-400 rounded-full p-2 flex items-center m-2'>
        <span className='m-4 text-xs whitespace-nowrap'>{text}</span>
        <MdSubdirectoryArrowRight />

    </div>
  )
}

export default Button;
