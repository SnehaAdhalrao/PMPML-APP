import React from 'react'
// import PageTitle from './Components/PageTitle';
import Complaits_page from './Components/Complaits_page';
import Share_me from './Components/Share_me';


export default function App() {//   REMEMBER************just components bnane ke baad brach open krni hain
  return (
    <>
    <div className="bg-zinc-100">
      {/* <PageTitle text={"Complaints"}/> */}
      <Complaits_page/>
      <Share_me/>
    
    </div>
    </>
  )
}
