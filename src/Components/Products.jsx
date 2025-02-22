import React, { useState } from 'react'
import Product from './Product'
import { motion } from 'framer-motion';
import ReactPlayer from 'react-player';
import Vid1 from '../Video/Vid1.mp4';
import Vid2 from '../Video/Vid2.mp4';
import Vid3 from '../Video/Vid3.mp4';
import Vid4 from '../Video/Vid4.mp4';
import Vid5 from '../Video/Vid5.mp4';
import Vid6 from '../Video/Vid6.mp4';

function Products() {
    const video=[
      {src:Vid1,isplay:false},
      {src:Vid2,isplay:false},
      {src:Vid3,isplay:false},
      {src:Vid4,isplay:false},
      {src:Vid5,isplay:false},
      {src:Vid6,isplay:false}
    ]
    const data=[
        {title:"Arquitel",color:"sky",description:"With a continuous 3D animation, we showcase Arqitel approach and show how migration data translates into real estate.",live:true,case:false},
        {title:"Cula",color:"pink",description:"With a continuous 3D animation, we showcase Arqitel approach and show how migration data translates into real estate.",live:true,case:false},
        {title:"LayoutLand",color:"yellow",description:"With a continuous 3D animation, we showcase Arqitel approach and show how migration data translates into real estate.",live:true,case:false},
        {title:"Yahoo!",color:"orange",description:"With a continuous 3D animation, we showcase Arqitel approach and show how migration data translates into real estate.",live:true,case:true},
        {title:"YIR 200",color:"black",description:"With a continuous 3D animation, we showcase Arqitel approach and show how migration data translates into real estate.",live:true,case:true},
        {title:"TTR",color:"white",description:"With a continuous 3D animation, we showcase Arqitel approach and show how migration data translates into real estate.",live:true,case:false}
    ]
    const [currentvid,setcurrentvid]=useState(video[0].src);
const [pos,setpos]=useState(0);

  function mover(val){
    // jb product ki indepr cursor jayega vid suru
    setpos(val*200);
    setcurrentvid(video[val].src);
  }
  return (
    <div className='relative mt-28 '>
      
      <div className='absolute top-0 h-full w-full pointer-events-none'> 
        <motion.div inital={{y:pos}} 
        animate={{y:pos}} 
        transition={{ease:[0.76, 0, 0.24, 1], duration:0.2}}
         //int this the updated value is get passed
        className="absolute window w-[300px] left-[37%] h-[270px]  ">
 <motion.div  className="actualvid rounded-lg bg-zinc-200 h-full w-full ">

  <ReactPlayer className="rounded-lg bg-cover h-[100%] w-[100%]" height="full" width="100%" url={currentvid} playing={true} loop={true} muted={true}/>

 
  {/* <ReactPlayer width="100%" height="100%" className="overflow-hidden" url={Vid1} playing={true} muted={true} loop={true}/> */}
 </motion.div>
        </motion.div> 
       </div>
        {/* <Product/> */}
        {data.map((ele,index)=>
      <Product mover={mover} pos={index}  key={index} data={ele} />
      
    )} 
    </div>
  )
}

export default Products
