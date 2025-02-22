import React from 'react'
import { BsArrowRight } from "react-icons/bs";

function Card({width,start,para,hover}) {
  return (
    <div className={`bg-zinc-800 rounded-xl p-4 h-[400px] m-3 ${width} hover:bg-violet-600 flex flex-col justify-between`}>
      <div className="">
        <div className="upper flex justify-between w-[1/3] m-2 py-3 px-2">
        <h1>this is Text</h1>
        <BsArrowRight />
        </div>
        <div className="uppertext text-[20px] font-bold w-[150px]">Insights and behind the scene</div>    
        </div>
      <div className={` down`}>
        {start===true ? (
            <><h1 className='text-[70px] font-bold'>Start a Project</h1>
        <button className='w-[120px] h-15 p-2 whitespace-nowrap rounded-full border-2 border-white'>Contact us</button>
        </>) : null}
        {para===true ? (<p className='text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, nam?</p>) : null}
      </div>
    </div>
  )
}

export default Card
