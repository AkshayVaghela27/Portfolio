import React from 'react';

function Navbar() {
  return (
    <nav className="bg-gray-900 text-white p-6 fixed w-full top-0 left-0 shadow-lg z-10">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">Akshay Vaghela</h1>
        <ul className="flex space-x-6">
          <li><a href="#about" className="hover:underline">About</a></li>
          <li><a href="#projects" className="hover:underline">Projects</a></li>
          <li><a href="#contact" className="hover:underline">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
