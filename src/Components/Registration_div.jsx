import React from 'react';

export default function Registration_div({ label, placeholder, type = "text", name }) {
  return (
    <div className="mb-4 w-full">
      <label htmlFor={name} className="block text-gray-700 font-medium mb-1">{label}</label>
      <input 
        type={type}
        name={name}
        id={name}
        placeholder={placeholder}
        className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-green-300"
      />
    </div>
  );
}
