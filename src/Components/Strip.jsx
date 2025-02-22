import React from 'react'

const Strip = ({val}) => {
   
  return (
    <div className='bg-zinc-800 border-t-2 border-r-2 border-b-2 border-zinc-700 w-[16.67%] h-20 flex justify-between items-center p-2'>
      <img src={val.url} alt="" />
      <span className='text-bold'>{val.no}</span>
    </div>
  )
}

export default Strip
