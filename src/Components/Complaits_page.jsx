import React from 'react'
import PageTitle from './PageTitle'
import { MdOutlineCameraAlt } from "react-icons/md";
import { IconContext } from 'react-icons';
import { AiFillAudio } from "react-icons/ai";

function Complaits_page() {
  return (
    <div className='bg-zinc-100'>
      <PageTitle text={"Complaints"}/>
      <div className="complaint-divs m-3 flex gap-10">
        <div className="img-upload mt-[80px] h-[300px] bg-green-500 hover:bg-green-200 w-[40%] rounded-[60px] flex items-center justify-center shadow-2xl shadow-black"> 
          {/* //cameraicon */}
          <span >
          
          <IconContext.Provider value={{ className: "global-class-name" ,size:"5em"}}>
  <div>
  <MdOutlineCameraAlt />
  <p className='font-semibold text-lg '>
    Upload photos or <br/>
    Video</p>
  </div>
</IconContext.Provider>
          </span>
           </div>
        <div className="description h-[500px]  w-[50%]">
            <div className="text hover:bg-green-100 hover:cursor-text p-5 border-2 h-[250px]  border-black rounded-lg"><i><u>Write Your Problem</u></i></div>
            <div className="location h-[40px] w-full mt-[40px]  border-b-2 border-black " ><p><i>Enter your Location</i></p></div>
            <div className="mobile h-[40px] w-full mt-[40px]  border-b-2 border-black" ><p><i>Enter your mobile number (optional)</i></p></div>
            <div className="location  flex gap-3 h-[40px] w-full mt-[40px]  border-b-2 border-black" >
            
            <IconContext.Provider value={{ className: "global-class-name" ,size:"2em"}}>
  <div>
  <AiFillAudio />
  </div>
</IconContext.Provider>
              <p><i>Tap to Record</i></p></div>
        </div>
        
      </div >
      <div className="submitdata flex flex-col items-center justify-center">
          <div className="submit h-auto rounded-md w-[240px] text-center tracking:wide text-white shadow-md shadow-black font-bold hover:cursor-pointer hover:bg-green-300 p-4 bg-green-500 ">Submit</div>
          <div className="both flex">
            <div className="complaint text-center shadow-lg shadow-2xl shadow-black rounded-md hover:cursor-pointer hover:bg-green-400 h-auto w-[120px] m-2 p-4 bg-[#44e350] border-[1px] border-black ">Complaint</div>
            <div className="vote text-center shadow-2xl shadow-black h-auto rounded-md hover:cursor-pointer hover:bg-green-400 w-[120px] p-4 m-2 bg-[#44e350] border-[1px] border-black">Vote</div>
          </div>
      </div>
    </div>
  )
}

export default Complaits_page
