import React from 'react'
import { FaWhatsapp } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { IoMdMailUnread } from "react-icons/io";
import { FaBluetoothB } from "react-icons/fa";
import { FaShareFromSquare } from "react-icons/fa6";
import { SiGooglehangouts } from "react-icons/si";
import { FaCreativeCommonsShare } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { IconContext } from 'react-icons';

export default function Sharing_app() {
    const data=[<FaWhatsapp />,<FaTwitter />,<IoMdMailUnread />,<FaBluetoothB />,<FaShareFromSquare />,<SiGooglehangouts />,<FaCreativeCommonsShare />,<FaFacebookSquare />]
  return (
    <div className=' w-[60%] bg-[#49db7f] h-56 p-4  flex justify-between gap-5 flex-wrap'>
      {data.map((ele,index)=>(
        <div className="appimg h-16 w-16  flex justify-center items-center bg-zinc-300 rounded-md border-[0.2px] border-black">
       <IconContext.Provider value={{ color:"", className: "global-class-name " ,size:"2.5em"}}>
  {ele}
</IconContext.Provider>
         </div>
      ))}
    </div>
  )
}
