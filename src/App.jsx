// * import style
import './App.css';
import './style/style.css'
import 'rsuite/dist/rsuite.min.css'

// ? import component
import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import NotificationUnderDevelopement from './components/Notification';

function App() {
  return (<>
    <div className="body bg-[#161616] mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
      <NotificationUnderDevelopement />
      <Navbar />
      <HeroSection />
    </div>
  </>
  );
}

export default App;
