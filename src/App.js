// src/App.js
import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Experience from './components/Experience';

function App() {
  return (
    <div className="font-sans antialiased">
      <Navbar />
      <HeroSection />
      <About />
      <Projects />
      <Experience />
      <Contact />
    </div>
  );
}

export default App;
