import React, { useState } from 'react'
// import { motion } from "framer-motion"
import { useMotionValueEvent, useScroll } from "framer-motion"
function News() {
 const [data,setdata]=useState([
    {url:"https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/634ef09178195ce0073e38f3_Refokus%20Tools-1.png",top:"26%",left:"43%",isactive:false},
    {url:"https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/634ef0accfe1b3e66bc55462_Refokus%20Tools.png",top:"23%",left:"39%",isactive:false},
    {url:"https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/634ef0acbc45cb2f4fc5c6b2_Yahoo.png",top:"23%",left:"47%",isactive:false},
    {url:"https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/634ef092455ce2cf591e52d1_Rainfall.png",top:"30%",left:"45%",isactive:false},
    {url:"https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/634ef0ac7e7179d210dc41f0_Summon.png",top:"33%",left:"37%",isactive:false},
    {url:"https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/634ef0af108a465002975acd_Showcase%20Websites%20(1).png",top:"37%",left:"40%",isactive:false}
]);
  

 
    function imgdisplayfun(arr){//this arr is in the switch case
      {setdata((prev)=>(
        prev.map((ele,index)=>(
          // (arr.length===0) ? ({...ele,isactive:false}) : ({...ele,isactive:true})
          {...ele,isactive:arr.includes(index+1)}
        ))
      ))}
    }
    const { scrollYProgress } = useScroll()

useMotionValueEvent(scrollYProgress, "change", (latest) => {
  // console.log("Page scroll: ", latest*100)
  let arr=[]
  switch(Math.floor(latest*100)){
    case 0:
     
      imgdisplayfun([]);
      console.log("0");
      break;
    case 1:
      arr=[1]
      imgdisplayfun(arr);
      console.log("01");
      break;
    case 3:
      arr=[1,2]
      imgdisplayfun(arr);
      console.log("012");
      break;
    case 5:
      arr=[1,2,3]
      imgdisplayfun(arr);
      console.log("0123");
      break;
    case 6:
        arr=[1,2,3,4]
        imgdisplayfun(arr);
        console.log("012345");
        break;
    case 9:
          arr=[1,2,3,4,5]
          imgdisplayfun(arr);
          break;
    case 10:
            arr=[1,2,3,4,5,6]
            imgdisplayfun(arr);
            break;
  }
})
  return (
      <div className= 'relative select-none leading-none  tracking-tighter  max-w-screen-xl mx-auto h-[750px] text-center text-[500px] mt-4'>
        <h1>News</h1>
       
        {data.map((ele,index)=>(
        ele.isactive && (<img key={index} className="absolute  h-[250px] w-[250px] rounded-md" style={{top:ele.top,left:ele.left}} src={ele.url}  alt="" />)
        ))}
      
      </div>
      
      
    
  )
}

export default News
