import React from 'react'
import Routing from '../Utils/Routing';
import { Link, Route, Routes } from 'react-router-dom';
import { CgProfile } from "react-icons/cg";
import { IconContext } from 'react-icons';
import { FaStar } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";
import Button from './Button';
import Home_footer from './Home_footer';
import Home_review from './Home_review';
import PMPML_Bus from "../assets/PMPML_Bus.png";


export default function Home() {
  const totalStars=5;
  const filledStars=4;
  return (
      <>
      <div className='w-full h-screen bg-gradient-to-t from-[#8CB6DD] via-[#56C061] to-[#37BA44]'>
       
        <div className='navbar  w-3/4 h-16 bg-zinc-300 mx-auto flex items-center gap-10 justify-between p-4 border-b-[1px] border-black'>
        
        <div className='flex gap-10 m-12'>
        {["Home","Pass Booking","Complaints","Map","Share Me"].map((ele,index)=>{
          // const path=["/","/Pass","/Complaint","/Map","Share"];
         return <a key={index}>
            { index===4 ? (<span  className='inline-block h-2 w-2 rounded-full bg-green-800 text-sm mr-2'></span>) : null}
            
            
            {ele}
           
            </a>})}
           
            
        </div>
        <div className=" btndiv">
        <IconContext.Provider value={{size:"2em",  className: "global-class-name size-5em" }}>
  <div>
    < CgProfile/>
  </div>
</IconContext.Provider>
        </div>
        
        
          </div>
           
        <div className="content flex ">



          <div className="lefthal w-[50%] h-[450px] flex flex-col gap-4 items-center justify-center">
            <h2 className='text-3xl font-bold'>PCCOER's PMPML</h2>
            <h6 className='text-[15px] tracking-tighter'>Explore the City with Ease – PCCOER PMPML at Your Fingertips!</h6>
            <div className="startdiv flex gap-1">
        {Array.from({ length: totalStars }, (v, i) => (
          i < filledStars ? <FaStar key={i} className="text-yellow-500" /> : <FaRegStar key={i} className="text-yellow-500" />
        ))}
        
            </div>
            
            <div><span className='text-pink-800 text-sm'>4.2, </span><span className='text-smtracking-tighest'>23k followers</span></div>
            <p className='pl-16 leading-4 text-sm'>PCCOER offers a seamless way to explore the city's bus routes. With real-time updates, it simplifies pass booking, complaint submissions, and route navigation. The app is designed to enhance commuter convenience, ensuring a smooth public transport experience. It's a user-friendly solution tailored for easy access to essential PMPML services.</p>

            <div className="review">
              <Home_review/>
             </div>
             <span className='drop-shadow-lg shadow-black-500/50'>
             <Button text={"learn more"}/>
             </span>
             
          </div>









          <div className="rigthalf   w-[50%] h-[450px] bg-cover rounded-lg"  style={{
    backgroundImage: `url(${PMPML_Bus})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  }}>
            {/* <img src={PMPML_Bus} alt="" /> */}
          </div>
        </div>


        <div className="footer bg-[#C0D4C2] rounded-md ml-[65px]  h-[100px]">
          <Home_footer/>
           </div>
      </div>
    
    </>
  )
}
