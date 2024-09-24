import React from 'react'
import Routing from '../Utils/Routing';
import { Link, Route, Routes } from 'react-router-dom';
import Complaits_page from './Complaits_page';
import Share_me from './Share_me';
import Bus_Pass from './Bus_Pass';


export default function Home() {
  return (
    <div>
      <nav>
        <Link to="/">HOME</Link>
        <Link to="/Complaint">Complaints</Link>
        <Link to="/Share">Share</Link>
        <Link to="/Pass">Bus_Pass</Link>
      </nav>
      {/* <Routes>
           
            <Route path="/Complaint" element={<Complaits_page/>}/>
            <Route path="/Share" element={<Share_me/>}/>
            <Route path="/Pass" element={<Bus_Pass/>}/>
            
        </Routes> */}
    <Routing/>
    </div>
  )
}
