import React from 'react'
// import Home from '../Components/Home'
import Complaits_page from '../Components/Complaits_page';
import Share_me from '../Components/Share_me';
import { Routes, Route } from 'react-router-dom';
import Bus_Pass from '../Components/Bus_Pass';

export default function Routing() {
  return (
    <div>
        <Routes>
            {/* <Route path="/" element={<Home/>}/> */}
            <Route path="/Complaint" element={<Complaits_page/>}/>
            <Route path="/Share" element={<Share_me/>}/>
            <Route path="/Pass" element={<Bus_Pass/>}/>
            
        </Routes>
      
    </div>
  )
}
