import React from 'react'

function Footer() {
  return (
    <div className='max-w-screen-xl mt-20 px-9 mx-auto flex justify-between p-4 '>
        <div className="left  w-[1/2] text-center">
            <h1 className='text-[80px] font-bold'>ReFokus.</h1>
        </div>
        <div className="right flex gap-4 ">
           <div className="social flex flex-col w-1/3">
           <h1 className='text-[20px] font-bold mb-4'>Social's:</h1>
           {["Facebook", "Twitter", "Google","Instagram"].map((ele,index)=><a key={index} className='inline-block mt-1'>{ele}</a>)}
           </div>
           <div className="social flex flex-col w-1/3">
           <h1 className='text-[20px] font-bold mb-4'>Social's:</h1>
           {["Facebook", "Twitter", "Google","Instagram"].map((ele,index)=><a  key={index} className='inline-block mt-1'>{ele}</a>)}
           </div>
           <div className='w-1/3 flex flex-col gap-4'>
            <p className=''>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, repellendus!</p>
            <img src="https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/6637ba0d8481b4339b1cda4f_Frame%2048097733.svg" alt="" />
           </div>
          
        </div>
    </div>
  )
}

export default Footer
