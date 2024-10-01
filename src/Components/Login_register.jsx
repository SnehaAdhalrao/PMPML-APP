import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Registration_bg from '../assets/Registration_bg.png';
import axios from 'axios';

export default function Login_register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://localhost:5000/api/login', {
        email,
        password,
      });
      console.log(response.data);

      if (response.data.success) {
        // Redirect to the home page after a successful login
        navigate('/');
      } else {
        alert('Login failed: ' + response.data.message);
      }
    } catch (error) {
      console.error('Error during login:', error);
      alert('Login failed. Please try again.');
    }
  };

  const handleRegister = () => {
    navigate('/register'); // Redirect to Registration component
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
          onClick={handleLogin}
          className="w-full bg-green-500 text-white py-3 rounded-lg hover:bg-green-600 mb-4"
        >
          Login
        </button>

        <button
          onClick={handleRegister}
          className="w-full bg-transparent border border-green-500 text-green-500 py-3 rounded-lg hover:bg-green-500 hover:text-white"
        >
          Register now
        </button>
      </div>
    </div>
  );
}
