import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom' // Import useNavigate
import PageTitle from './PageTitle'

export default function Bus_Pass() {
  const [selectedPass, setSelectedPass] = useState('') // Track selected pass type
  const [idNumber, setIdNumber] = useState('') // Track Aadhaar/PAN card input
  const [paymentMethod, setPaymentMethod] = useState('') // Track selected payment method

  const navigate = useNavigate() // Initialize navigate

  const passAmounts = {
    'Only PMC - 50rs': 50,
    'Only PCMC - 40rs': 40,
    'PMC and PCMC - 50rs': 50,
    'All Routes - 100rs': 100,
  }

  const handlePassSelect = (passType) => {
    setSelectedPass(passType) // Update selected pass type
  }

  const handleIdChange = (e) => {
    setIdNumber(e.target.value) // Update ID input
  }

  const handlePaymentMethodChange = (e) => {
    setPaymentMethod(e.target.value) // Update payment method
  }

  const handleProceed = () => {
    if (selectedPass && idNumber.length === 4 && paymentMethod) {
      navigate('/Enter_pin') // Navigate to the payment page
    } else {
      alert('Please complete all fields before proceeding.')
    }
  }

  return (
    <div className="p-6">
      <PageTitle text={'Pass Details'} />
      <div className="ticket">
        <div className="gap-[2px] flex flex-col justify-center items-center">
          <div className="upperhalf w-[25%] h-[400px] pt-5 bg-gradient-to-t from-[#38BA46] via-[#4ABD56] to-[#36BA43] p-6 rounded-lg relative flex flex-col gap-8">
            <div className="timedatdiv w-full text-center h-auto p-2 -translate-x-[24px] rounded-t-lg text-white text-sm absolute -mt-[20px] bg-green-600">
              27 Aug, 2024 || 12:00 pm
            </div>
            <div className="container flex mt-[30px] flex-col gap-4">
              <h5>Select pass type</h5>
              {Object.keys(passAmounts).map((pass) => (
                <div
                  key={pass}
                  onClick={() => handlePassSelect(pass)}
                  className={`p-2 cursor-pointer rounded-md ${
                    selectedPass === pass
                      ? 'bg-green-400 text-white'
                      : 'bg-white border border-gray-300'
                  }`}
                >
                  {pass}
                </div>
              ))}
            </div>
          </div>

          {/* Lower half for ID input and payable amount */}
          <div className="lowerhalf rounded-lg w-[25%] h-[250px] bg-gradient-to-t from-[#C0D4C2] via-[#C0D4C2] to-[#38BA46] flex flex-col gap-4 pt-4 pl-6">
            <h6 className="text-xs leading-none">
              Enter the last 4 digits of your Aadhaar card or PAN Card
            </h6>
            <input
              type="text"
              maxLength="4"
              value={idNumber}
              onChange={handleIdChange}
              className="rounded-md w-[250px] bg-zinc-200 p-2"
              placeholder="Enter 4 digits"
            />
            <span className="text-red-400 text-xs">
              You should have a valid ID with the above detail
            </span>
            <span>
              <h6>AMOUNT PAYABLE</h6>
              <p>₹{selectedPass ? passAmounts[selectedPass] : '0'}</p>
            </span>
          </div>
        </div>
      </div>

      {/* Payment Method */}
      <div className="mb-4 w-[25%] mx-auto">
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

      {/* Proceed Button */}
      <div className="w-[25%] mx-auto">
        <button
          onClick={handleProceed}
          className={`w-full py-3 rounded-lg mt-4 text-white ${
            selectedPass && idNumber.length === 4 && paymentMethod
              ? 'bg-green-500 hover:bg-green-600'
              : 'bg-gray-300 cursor-not-allowed'
          }`}
          disabled={!selectedPass || idNumber.length !== 4 || !paymentMethod}
        >
          Proceed
        </button>
      </div>
    </div>
  )
}
