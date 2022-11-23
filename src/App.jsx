// * import style
import './App.css';
import './style/style.css'
import 'rsuite/dist/rsuite.min.css'

// ? import component
import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import NotificationUnderDevelopement from './components/Notification';
import Path from './components/Path';


function App() {
  return (<>
    <div className="body bg-[#161616] mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 font-Inter">
      <NotificationUnderDevelopement />
      <Navbar />
      <HeroSection />
      <Path />
    </div>
  </>
  );
}

export default App;
