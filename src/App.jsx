import React from 'react'
// import PageTitle from './Components/PageTitle';
// import Complaits_page from './Components/Complaits_page';
import Complaits_page from './Components/Complaits_Page';
import Share_me from './Components/Share_me';
import Home from './Components/Home';
import Bus_Pass from './Components/Bus_Pass';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import List from './Components/List';
import Registration from './Components/Registration';
import Ticket_page from './Components/Ticket_page';
import Enter_pin from './Components/Enter_pin';
import Payment_processing from './Components/Payment_processing';
import Login_register from './Components/Login_register';



export default function App() {//   REMEMBER************just components bnane ke baad brach open krni hain
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pass" element={<Bus_Pass />} />
        <Route path="/complaint" element={<Complaits_page />} />
        <Route path="/map" element={<div className="text-center mt-20">Map Page Coming Soon...</div>} />
        <Route path="/share" element={<Share_me />} />
        <Route path="/register" element={<Registration />} />
        <Route path="/ticket" element={<Ticket_page />} />
        <Route path="/Enter_pin" element={<Enter_pin />} />
        <Route path="/Payment_processing" element={<Payment_processing />} />
        <Route path="/register_or_login" element={<Login_register />} />
      </Routes>
    </Router>

    </>
  )
}
