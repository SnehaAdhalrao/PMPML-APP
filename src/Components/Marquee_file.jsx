import React from 'react'
import Marquee from 'react-fast-marquee'
// import Marquee from "react-fast-marquee";

function Marquee_file({imgdata}) {
  console.log(imgdata);
    
  return (
    <>
     <Marquee play={true} speed={90} loop={0} >
    <div className='flex gap-5 m-20 whitespace-nowrap'>
      {/* I have an  array ...so to get the each src lets map that array */}
     
      {imgdata[0].map((ele,index)=>(
        <img className='h-15 w-auto'  key={index} src={ele}/>
         ))} 
     
    </div>
    </Marquee>
    <Marquee play={true} speed={90} direction='right' loop={0}>
    <div className='flex gap-5 m-20 whitespace-nowrap'>
      {/* I have an  array ...so to get the each src lets map that array */}
     
      {imgdata[1].map((ele,index)=>(
        <img className='h-15 w-auto'  key={index} src={ele}/>
        ))} 
     
    </div>
    </Marquee>
    </>
  )
}

export default Marquee_file
