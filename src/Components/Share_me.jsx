import React from 'react'
import PageTitle from './PageTitle';
import { BsQrCode } from "react-icons/bs";
import { IconContext } from 'react-icons';
import Button from './Button';
import { IoIosQrScanner } from "react-icons/io";
import Sharing_app from './Sharing_app';

export default function Share_me() {
  const handleshareme=()=>(
        alert("CLicked here")
)
  return (
    <div className=''>
      <PageTitle text={"Share through QR:"}/>
      
     <div className="onlyqr mt-10 flex flex-col justify-center items-center gap-10 ">
     <IconContext.Provider value={{ size:"25em", className: "global-class-name" }}>
  <div>
  {/* <IoIosQrScanner /> */}
  <BsQrCode />
  </div>
</IconContext.Provider>
<div onClick={handleshareme} className="btn">
<Button text={"Share via:"} />
</div>
     </div>
     <Sharing_app/>
     
    </div>
  )
}
