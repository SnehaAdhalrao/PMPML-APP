import React from 'react'
import Navbar from './Components/Navbar';
import News from './Components/News';
import Strips from './Components/Strips';
import Products from './Components/Products';
import Marquees from './Components/Marquees';
import Cards from './Components/Cards';
import Footer from './Components/Footer';
import LocomotiveScroll from 'locomotive-scroll';//this is for smoothness in website


const App = () => {
  const locomotiveScroll = new LocomotiveScroll();
  return (
    <div className='w-full h-auto bg-zinc-900'>
      <Navbar/>
      <News/>
      <Strips />
      <Products/>
      
      <Marquees/>
      
      <Cards/>
      <Footer/>
    </div>
  )
}

export default App
