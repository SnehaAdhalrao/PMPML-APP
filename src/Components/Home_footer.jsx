import React from 'react'
import { IconContext } from 'react-icons';
import { BsBusFront } from "react-icons/bs";
import { FaMapMarkedAlt } from "react-icons/fa";
import { GiNotebook } from "react-icons/gi";
import { FaStar } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";
export default function Home_footer() {
    const totalStars=5;
  const filledStars=4;
    const data=[<BsBusFront />,<FaMapMarkedAlt />,<GiNotebook />]
  return (
    <div className='m-6'>
            <div className="icon flex items-center justify-center gap-16 ">
                {data.map((ele,index)=>(
                    <IconContext.Provider value={{size:"2em",  className: "global-class-name" }}>
                    <div className='flex gap-2 mt-6'>
                        <span className=' h-16 w-16  flex justify-center items-center bg-zinc-300 rounded-md border-[0.2px] border-black'>
                        {ele}
                        
                        </span>
                        <div className="font-bold tracking-tight">
                                Learn more here
                                <div className="startdiv flex gap-1">
        {Array.from({ length: totalStars }, (v, i) => (
          i < filledStars ? <FaStar key={i} className="text-yellow-500" style={{fontSize:"0.3em"}}/> : <FaRegStar key={i} className="text-yellow-500" style={{fontSize:"0.3em"}} />
        ))}
        
            </div>
            <span className='text-sm'>
                4.2 supported
            </span>
                                </div>
                     
                    </div>
                  </IconContext.Provider>
                ))}
                
            </div>
            
    </div>
  )
}
