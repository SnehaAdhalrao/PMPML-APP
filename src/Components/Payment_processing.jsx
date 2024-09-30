import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Payment_processing = () => {
  const [isProcessing, setIsProcessing] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const timer1 = setTimeout(() => {
      setIsProcessing(false);
      const timer2 = setTimeout(() => {
        navigate('/'); // Redirect to home page after displaying "Recharge Successful"
      }, 3000); // 3 seconds after showing success message
      return () => clearTimeout(timer2);
    }, 5000); // 5 seconds for processing

    return () => clearTimeout(timer1);
  }, [navigate]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white text-black">
      {isProcessing ? (
        <>
          <h1 className="text-3xl font-bold mb-2">Hold On Tight</h1>
          <p className="text-lg mb-6">We are processing payment</p>
          <div className="flex items-center justify-center mb-4">
            <div className="animate-spin rounded-full h-24 w-24 border-t-4 border-green-500 border-opacity-75"></div>
          </div>
          <p className="text-lg">Processing</p>
          <p className="mt-8 text-gray-600">Do not press back button</p>
        </>
      ) : (
        <>
          <h1 className="text-3xl font-bold mb-4">Recharge Successful</h1>
          <div className="flex items-center justify-center mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-24 w-24 text-green-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
          <p className="text-lg">Payment Done</p>
          <p>Check your Ticket in Profile</p>
        </>
      )}
    </div>
  );
};

export default Payment_processing;
