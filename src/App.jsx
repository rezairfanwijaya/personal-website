import './App.css';
import './style/style.css'
import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import NotificationUnderDevelopment from './components/NotificationUnderDevelopment';

function App() {
  return (<>
    <div className="body bg-[#161616] mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
      <NotificationUnderDevelopment/>
      <Navbar />
      <HeroSection />
    </div>
  </>
  );
}

export default App;
