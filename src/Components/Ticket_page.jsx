import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Ticket_page() {
  const [ticketType, setTicketType] = useState('FULL');
  const [ticketCount, setTicketCount] = useState(1);
  const [paymentMethod, setPaymentMethod] = useState('');
  const navigate = useNavigate();

  const incrementTicketCount = () => {
    setTicketCount(ticketCount + 1);
  };

  const decrementTicketCount = () => {
    if (ticketCount > 1) {
      setTicketCount(ticketCount - 1);
    }
  };

  const handlePaymentMethodChange = (e) => {
    setPaymentMethod(e.target.value);
  };

  const handleProceed = () => {
    // Navigate to the Payment Processing page
    navigate('/Enter_pin');
  };

  return (
    <div className="h-screen w-full flex flex-col items-center bg-gray-100 p-4">
      <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-6">
        <div className="mb-6">
          <h2 className="text-lg font-semibold text-center">Ticket Details</h2>
          <p className="text-sm text-center text-gray-500">Enter your details</p>
        </div>

        <div className="bg-green-200 rounded-lg p-4 mb-4">
          <p className="text-sm text-gray-700 mb-2 text-center">27 Aug, 2024 | 12:00 PM</p>

          {/* Starting and Ending Stop */}
          <div className="mb-4">
            <input
              type="text"
              placeholder="Starting Stop"
              className="w-full mb-3 p-3 rounded-lg bg-green-100 text-gray-800 focus:outline-none"
            />
            <input
              type="text"
              placeholder="Ending Stop"
              className="w-full mb-3 p-3 rounded-lg bg-green-100 text-gray-800 focus:outline-none"
            />
          </div>

          {/* Ticket Type */}
          <div className="flex items-center justify-center mb-4">
            <button
              onClick={() => setTicketType('FULL')}
              className={`px-4 py-2 rounded-l-lg ${
                ticketType === 'FULL'
                  ? 'bg-green-500 text-white'
                  : 'bg-white text-green-500 border border-green-500'
              }`}
            >
              FULL
            </button>
            <button
              onClick={() => setTicketType('HALF')}
              className={`px-4 py-2 rounded-r-lg ${
                ticketType === 'HALF'
                  ? 'bg-green-500 text-white'
                  : 'bg-white text-green-500 border border-green-500'
              }`}
            >
              HALF
            </button>
          </div>

          {/* Ticket Price */}
          <div className="flex items-center mb-4">
            <p className="w-1/2 text-gray-700">TICKET PRICE</p>
            <input
              type="text"
              value="₹"
              readOnly
              className="w-1/2 p-2 rounded-lg bg-green-100 text-gray-800 focus:outline-none text-center"
            />
          </div>

          {/* Ticket Count */}
          <div className="flex items-center mb-4">
            <p className="w-1/2 text-gray-700">TICKET COUNT</p>
            <div className="w-1/2 flex items-center justify-center">
              <button
                onClick={decrementTicketCount}
                className="p-2 bg-green-500 text-white rounded-l-lg focus:outline-none"
              >
                -
              </button>
              <input
                type="text"
                value={ticketCount}
                readOnly
                className="w-12 text-center p-2 border-t border-b"
              />
              <button
                onClick={incrementTicketCount}
                className="p-2 bg-green-500 text-white rounded-r-lg focus:outline-none"
              >
                +
              </button>
            </div>
          </div>
        </div>

        {/* Payment Method */}
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

        {/* Proceed Button */}
        <button
          onClick={handleProceed}
          className="w-full bg-green-500 text-white py-3 rounded-lg mt-4 hover:bg-green-600 focus:outline-none"
        >
          Proceed
        </button>
      </div>
    </div>
  );
}
