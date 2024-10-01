import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import BusBackground from '../assets/Registration_bg.png';
import axios from 'axios';

export default function Registration() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    gender: '',
    password: '',
    confirmPassword: ''
  });
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match!');
      return;
    }

    try {
      const response = await axios.post('http://localhost:5000/api/register', formData);
      console.log(response.data);

      if (response.data.success) {
        alert('Registration successful!');
        // Delay redirect by 2 seconds after successful registration
        setTimeout(() => {
          navigate('/');
        }, 2000);
      } else {
        alert('Registration failed: ' + response.data.message);
      }
    } catch (error) {
      console.error('Error during registration:', error);
      alert('Registration failed. Please try again.');
    }
  };

  return (
    <div className="relative h-screen w-full bg-cover" style={{ backgroundImage: `url(${BusBackground})` }}>
      <div className="absolute inset-0 flex justify-center items-center">
        <form 
          onSubmit={handleSubmit}
          className="bg-white w-[500px] h-[500px] rounded-lg p-8 shadow-lg overflow-y-auto"
        >
          <h2 className="text-xl font-semibold mb-4 text-center">Enter your details</h2>
          
          <input 
            type="text"
            placeholder="First name"
            name="firstName"
            value={formData.firstName}
            onChange={handleInputChange}
            className="w-full mb-3 p-2 border rounded"
          />
          <input 
            type="text"
            placeholder="Last name"
            name="lastName"
            value={formData.lastName}
            onChange={handleInputChange}
            className="w-full mb-3 p-2 border rounded"
          />
          <input 
            type="email"
            placeholder="Email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            className="w-full mb-3 p-2 border rounded"
          />
          <input 
            type="text"
            placeholder="Gender"
            name="gender"
            value={formData.gender}
            onChange={handleInputChange}
            className="w-full mb-3 p-2 border rounded"
          />
          <input 
            type="password"
            placeholder="Enter password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            className="w-full mb-3 p-2 border rounded"
          />
          <input 
            type="password"
            placeholder="Confirm password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleInputChange}
            className="w-full mb-3 p-2 border rounded"
          />

          <div className="flex justify-center mt-6">
            <button 
              type="submit"
              className="bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600"
            >
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
