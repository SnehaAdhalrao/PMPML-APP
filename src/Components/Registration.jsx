import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import BusBackground from '../assets/Registration_bg.png';

export default function Registration() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    gender: '',
    password: '',
    confirmPassword: ''
  });
  const navigate = useNavigate(); // Initialize useNavigate

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form submission logic here
    console.log("Form data submitted:", formData);

    // Reset the form data
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      gender: '',
      password: '',
      confirmPassword: ''
    });

    // Redirect to home page after submission
    navigate('/'); 
  };

  const handleLoginClick = () => {
    // Redirect to login page when Login button is clicked
    navigate('/'); // Adjust the path as necessary
  };

  return (
    <div className="relative h-screen w-full bg-cover" style={{ backgroundImage: `url(${BusBackground})` }}>
      {/* Registration Card */}
      <div className="absolute inset-0 flex justify-center items-center">
        <form 
          onSubmit={handleSubmit}
          className="bg-white w-[500px] h-[500px] rounded-lg p-8 shadow-lg overflow-y-auto"
        >
          <h2 className="text-xl font-semibold mb-4 text-center">Enter your details</h2>
          
          {/* Registration Fields without Labels */}
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

          {/* Buttons */}
          <div className="flex justify-between mt-6">
            <button 
              type="submit"
              className="bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600"
            >
              Submit
            </button>
            <button 
              type="button"
              className="bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600"
              onClick={handleLoginClick} // Use the new function for navigation
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
