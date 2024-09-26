import React from 'react'
import Pass_Container from './Pass_Container'
import PageTitle from './PageTitle';

export default function Bus_Pass() {
  return (
      <div className=''>
    <div className="ticket">
    <div className='gap-[2px] bg-red-200 flex flex-col justify-center items-center'>
      <PageTitle text={"Pass Details"}/>
      <div className="upperhalf w-[25%] h-[400px] pt-5 bg-gradient-to-t from-[#38BA46] via-[#4ABD56] to-[#36BA43] p-6 rounded-lg relative flex flex-col gap-8">
      <div className="timedatdiv w-full text-center h-auto p-2 -translate-x-[24px] rounded-t-lg text-white text-sm absolute -mt-[20px] bg-green-600">27 Aug, 2024 || 12:00 pm</div>
       <div className="container flex mt-[30px] flex-col gap-4">
        <span className=' '>
          <h5>Select pass type</h5>
        </span>
       <Pass_Container text={"Only PMC - 40rs"}/>
        <Pass_Container text={"Only PCMC - 40rs"}/>
        <Pass_Container text={"PMC and PCMC - 40rs"}/>
        <Pass_Container text={"All Routes - 40rs"}/>
       </div>

      </div>
      
      {/* #38BA46 */}
      
      
      
      
      <div className="lowerhalf rounded-lg w-[25%] h-[250px] bg-gradient-to-t from-[#C0D4C2] via-[#C0D4C2] to-[#38BA46] flex flex-col gap-4 pt-4 pl-6">
      <span className='text-sm tracking-tight leading-none'>
        <h6>ENter the last 4 digits of your<br>
        </br> Aadhar card or Pan Card</h6>
      </span>
      
      <span className=' rounded-md w-[250px] bg-zinc-200'>
      <Pass_Container text={""}/>
      </span>
      <span className='text-red-400 whitespace-nowrap tracking-tighter'>
        <Pass_Container text={"You should have a valid ID with above detail"}/>
      </span>
      <span>
        <h6>AMOUNT PAYABLE</h6>
      </span>

      </div>
      
    </div>
    </div>
    <div className="payment"> this i sthe payment</div>
    </div>
  )
}
