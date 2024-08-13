import React from 'react';
import profileImage from '../assets/profile.jpg'; // Update with your profile image path

const HeroSection = () => {
  return (
    <div className="w-full h-screen flex items-center justify-center bg-gradient-to-b from-gray-800 to-black text-white">
      <div className="text-center">
        {/* Profile Image */}
        <div className="flex justify-center mb-6">
          <div className="relative">
            <img
              src={profileImage}
              alt="Profile"
              className="w-48 h-48 md:w-78 md:h-78 object-cover rounded-full border-4 border-gray-700 object-position: 0% 20%"
            />
          </div>
        </div>
        {/* Heading */}
        <h1 className="text-3xl md:text-5xl font-bold mb-4">Hello, I'm Akshay Vaghela</h1>
        {/* Subheading */}
        <p className="text-lg md:text-xl">
          Welcome to my portfolio
        </p>
      </div>
    </div>
  );
};

export default HeroSection;