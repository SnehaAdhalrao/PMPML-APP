import React from 'react';
import Button from './Button';

const Navbar = () => {
  return (
    <div className='  w-3/4 h-16 bg-black mx-auto flex items-center gap-10 justify-between p-4 border-b-[1px] border-zinc-700'>
        <img src="https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/63349803431f1562dccf1802_refokus%20logo.svg" alt="" />
        <div className='flex gap-10 m-12'>
        {["Home","Work","Culture","","News"].map((ele,index)=>{
         return <a key={index} href="#">
            { index===4 ? (<span style={{boxShadow:"0.2em 0.2em 0.5em #00FF19"}} className='inline-block h-2 w-2 rounded-full bg-green-300 text-sm'></span>) : null}
            {ele.length===0 ? (<span className=' inline-block w-[1px] h-5 bg-white'></span>) : null}
            { ele}</a>})}
        
        </div>
        <Button text="Get Started"/>
    </div>
  )
}

export default Navbar
