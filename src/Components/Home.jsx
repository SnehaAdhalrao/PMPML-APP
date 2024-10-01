
import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import { CgProfile } from "react-icons/cg";
import { IconContext } from 'react-icons';
import Home_footer from './Home_footer';
// Import additional pages
// import Bus_Pass from './Bus_Pass';
// import Complaits_page from './Complaits_Page';
// import Share_me from './Share_me';
// import Registration from './Registration';
import HomePageContent from './HomePageContent';
// import Routing from '../Utils/Routing';

export default function Home() {


  return (
    <div className="w-full h-screen bg-gradient-to-t from-[#8CB6DD] via-[#56C061] to-[#37BA44]">
      {/* Navbar */}
      {/* <Routing/> */}
      

      {/* Page Content */}
      
        {/* <Route path="/" element={<Home />} />
        <Route path="/pass" element={<Bus_Pass />} />
        <Route path="/complaint" element={<Complaits_page />} />
        <Route path="/map" element={<div className="text-center mt-20">Map Page Coming Soon...</div>} />
        <Route path="/share" element={<Share_me />} />
        <Route path="/register" element={<Registration />} /> */}
      
      <div className="navbar w-3/4 h-16 bg-zinc-300 mx-auto flex items-center gap-10 justify-between p-4 border-b-[1px] border-black">
        <div className="flex gap-10 m-12">
          {["Home", "Pass Booking","Ticket booking", "Complaints", "Map","history","Share Me"].map((ele, index) => {
            const paths = ["/", "/pass","/ticket", "/complaint", "/map","/history", "/share"];
            return (
              <Link key={index} to={paths[index]}>
                {index === 4 ? (
                  <span className="inline-block h-2 w-2 rounded-full bg-green-800 text-sm mr-2"></span>
                ) : null}
                {ele}
              </Link>
            );
          })}
        </div>
        <div className="btndiv">
          <IconContext.Provider value={{ size: "2em", className: "global-class-name size-5em" }}>
            <div>
              <Link to="/register_or_login">
                <CgProfile />
              </Link>
            </div>
          </IconContext.Provider>
        </div>
      </div>
          <HomePageContent/>
      {/* Footer */}
      <div className="footer bg-[#C0D4C2] rounded-md ml-[65px] h-[100px]">
        <Home_footer />
      </div>
    </div>
  );
}

// Home Page Content Component


