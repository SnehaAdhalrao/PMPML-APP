import React from 'react'
import PageTitle from './Components/PageTitle';
import Complaits_page from './Components/Complaits_page';

export default function App() {//   REMEMBER************just components bnane ke baad brach open krni hain
  return (
    <>
    <div className="">
     
      <PageTitle text={"Complaints"}/>
      <Complaits_page/>
    </div>
    </>
  )
}
