import React, { useState } from 'react'; // Import useState
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import Pass_Container from './Pass_Container';
import PageTitle from './PageTitle';

export default function Bus_Pass() {
  const [paymentMethod, setPaymentMethod] = useState(''); // Declare paymentMethod state
  const navigate = useNavigate(); // Initialize useNavigate

  const handlePaymentMethodChange = (e) => {
    setPaymentMethod(e.target.value);
  };

  const handleProceedClick = () => {
    navigate('/Enter_pin'); // Navigate to the EnterPin component
  };

  return (
    <div className=''>
      <PageTitle text={"Pass Details"} />
      <div className="ticket">
        <div className='gap-[2px] flex flex-col justify-center items-center'>
          <div className="upperhalf w-[25%] h-[400px] pt-5 bg-gradient-to-t from-[#38BA46] via-[#4ABD56] to-[#36BA43] p-6 rounded-lg relative flex flex-col gap-8">
            <div className="timedatdiv w-full text-center h-auto p-2 -translate-x-[24px] rounded-t-lg text-white text-sm absolute -mt-[20px] bg-green-600">27 Aug, 2024 || 12:00 pm</div>
            <div className="container flex mt-[30px] flex-col gap-4">
              <span className='font-xs'>
                <h5>Select pass type</h5>
              </span>
              <Pass_Container text={"Only PMC - 40rs"} />
              <Pass_Container text={"Only PCMC - 40rs"} />
              <Pass_Container text={"PMC and PCMC - 40rs"} />
              <Pass_Container text={"All Routes - 40rs"} />
            </div>
          </div>

          <div className="lowerhalf rounded-lg w-[25%] h-[250px] bg-gradient-to-t from-[#C0D4C2] via-[#C0D4C2] to-[#38BA46] flex flex-col gap-4 pt-4 pl-6">
            <span className='text-xs leading-none'>
              <h6>Enter the last 4 digits of your<br />
                Aadhar card or Pan Card</h6>
            </span>

            <span className='rounded-md w-[250px] bg-zinc-200'>
              <Pass_Container text={""} />
            </span>
            <span className='text-red-400 whitespace-nowrap tracking-tighter'>
              <Pass_Container text={"You should have a valid ID with above detail"} />
            </span>
            <span>
              <h6>AMOUNT PAYABLE</h6>
            </span>
          </div>
        </div>
      </div>
      <div className="paymentdiv flex flex-col justify-center items-center mt-5">
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Payment Method</label>
          <select
            value={paymentMethod}
            onChange={handlePaymentMethodChange}
            className="w-full p-3 rounded-lg border bg-white"
          >
            <option value="">Select your payment option</option>
            <option value="card">Credit/Debit Card</option>
            <option value="upi">UPI</option>
            <option value="netbanking">Net Banking</option>
          </select>
        </div>
        <div 
          className="proceed w-auto h-auto mt-5 bg-green-400 rounded-md px-20 py-2 tracking-tight text-sm leading-none cursor-pointer" 
          onClick={handleProceedClick} // Add onClick handler
        >
          <span className='inline-block text-white text-sm'>
            Proceed
          </span>
        </div>
      </div>
    </div>
  );
}
