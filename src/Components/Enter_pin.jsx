import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function ENter_pin() {
  const [pin, setPin] = useState(['', '', '', '', '', '']);
  const navigate = useNavigate();

  const handleInput = (value, index) => {
    if (value.length === 1 && /^\d$/.test(value)) {
      const newPin = [...pin];
      newPin[index] = value;
      setPin(newPin);
    }
  };

  const handleDelete = (index) => {
    const newPin = [...pin];
    if (newPin[index] === '' && index > 0) {
      newPin[index - 1] = '';
    } else {
      newPin[index] = '';
    }
    setPin(newPin);
  };

  const handleGo = () => {
    // Redirect to the payment processing page
    navigate('/Payment_processing');
  };

  return (
    <div className="h-screen w-full flex flex-col items-center justify-between bg-gray-100 p-4">
      {/* Bank and Account Information */}
      <div className="w-full max-w-md text-center mb-4">
        <h2 className="text-sm font-semibold">Bank Of Maharashtra</h2>
        <div className="bg-green-500 text-white mt-2 rounded-lg py-2 px-4 flex justify-between items-center">
          <span>XXXX6251</span>
          <span className="text-2xl">▼</span>
        </div>
      </div>

      {/* Enter PIN Section */}
      <div className="w-full max-w-md text-center">
        <h3 className="text-lg font-semibold mb-4">Enter 6-Digit UPI PIN</h3>
        
        {/* PIN Input */}
        <div className="flex justify-center mb-4 space-x-2">
          {pin.map((value, index) => (
            <input
              key={index}
              type="text"
              maxLength="1"
              value={value}
              onChange={(e) => handleInput(e.target.value, index)}
              className="w-10 h-10 text-center border-b-2 border-gray-500 focus:outline-none"
            />
          ))}
        </div>

        <p className="text-sm text-gray-500 mb-6">
          UPI PIN will keep your account secure from unauthorized access. Do not share this PIN with anyone.
        </p>
      </div>

      {/* Keypad */}
      <div className="w-full max-w-md bg-gray-200 rounded-lg grid grid-cols-3 gap-4 p-4">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, '', 0, 'del'].map((key, index) =>
          key === '' ? (
            <div key={index} />
          ) : key === 'del' ? (
            <button
              key={index}
              onClick={() => handleDelete(pin.findIndex((p) => p === ''))}
              className="flex items-center justify-center h-16 bg-green-100 rounded-lg"
            >
              <span className="text-xl">⌫</span>
            </button>
          ) : (
            <button
              key={index}
              onClick={() => {
                const emptyIndex = pin.findIndex((p) => p === '');
                if (emptyIndex !== -1) handleInput(`${key}`, emptyIndex);
              }}
              className="flex items-center justify-center h-16 bg-green-100 rounded-lg text-xl"
            >
              {key}
            </button>
          )
        )}
      </div>

      {/* Bottom "Go" Button */}
      <div className="w-full max-w-md mt-4">
        <button
          className="w-full bg-green-500 text-white py-3 rounded-lg mt-4 hover:bg-green-600 focus:outline-none"
          onClick={handleGo}
        >
          Go
        </button>
      </div>
    </div>
  );
}
