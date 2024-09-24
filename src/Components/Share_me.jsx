import React, { useState } from 'react'
import PageTitle from './PageTitle';
import { BsQrCode } from "react-icons/bs";
import { IconContext } from 'react-icons';
import Button from './Button';
import { IoIosQrScanner } from "react-icons/io";
import Sharing_app from './Sharing_app';

export default function Share_me() {
  const [pos,setpos]=useState(false);
  const handleshareme=()=>(
        //make apps div absolute 
        setpos(()=>!pos)
)
  return (
    <div className=''>
      <PageTitle text={"Share through QR:"}/>
      
     <div className="onlyqr mt-10 flex flex-col justify-center items-center gap-10 ">
        <IconContext.Provider value={{ size:"25em", className: "global-class-name" }}>
        <div className='relative'>
        {/* <IoIosQrScanner /> */}
        <BsQrCode />
        </div>
        </IconContext.Provider>
              <div onClick={handleshareme} className="btn h-auto  w-[50%] flex justify-center ">
              <Button text={"Share via:"} />
              </div>
<span className={`apps flex justify-center ${pos ? 'absolute':'relative'}`}>
<Sharing_app/>
</span>

     </div>
     
    </div>
  )
}
