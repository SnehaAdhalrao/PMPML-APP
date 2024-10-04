import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import Registration_bg from '../assets/Registration_bg.png';

export default function Login_register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const navigate = useNavigate(); // Initialize useNavigate

  const handleLogin = () => {
    // Implement login logic here
    console.log({ email, password, rememberMe });

    // Redirect to home page after successful login
    navigate('/'); 
  };

  const handleRegister = () => {
    // Redirect to Registration component
    navigate('/register'); // Adjust the path as necessary
  };

  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen p-4"
      style={{
        backgroundImage: `url(${Registration_bg})`,
        backgroundSize: 'cover',
      }}
    >
      <div className="w-full max-w-xs bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-center mb-2">Welcome</h1>
        <p className="text-center text-gray-600 mb-6">Please login here</p>

        <input
          type="email"
          placeholder="Email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-3 mb-3 rounded-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-green-500"
        />

        <div className="relative mb-3">
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-3 rounded-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <span className="absolute right-3 top-3 cursor-pointer text-gray-600">
            {/* Icon for password visibility toggle */}
            👁️
          </span>
        </div>

        <div className="flex items-center justify-between mb-6">
          <label className="flex items-center text-sm text-gray-600">
            <input
              type="checkbox"
              checked={rememberMe}
              onChange={() => setRememberMe(!rememberMe)}
              className="mr-2"
            />
            Remember Me
          </label>
          <a href="#" className="text-sm text-green-500 hover:underline">
            Forgot Password?
          </a>
        </div>

        <button
          onClick={handleLogin} // Login button redirects to home
          className="w-full bg-green-500 text-white py-3 rounded-lg hover:bg-green-600 mb-4"
        >
          Login
        </button>

        <button
          onClick={handleRegister} // Register button redirects to registration
          className="w-full bg-transparent border border-green-500 text-green-500 py-3 rounded-lg hover:bg-green-500 hover:text-white"
        >
          Register now
        </button>
      </div>
    </div>
  );
}
