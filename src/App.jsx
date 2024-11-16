import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import ReactGA from 'react-ga4';
import useDrift from './useDrift';
import './App.css';

import Hotjar from './components/Hotjar';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';

function App() {
  useDrift('9gmskfusizpi');

  // useEffect(() => {
  //   ReactGA.initialize('G-K8G4N5FWZZ'); // Replace with your GA4 Measurement ID
  //   ReactGA.send({ hitType: 'pageview', page: '/' });
  // }, []);
  return (
    <div className="lighter-black flex flex-col min-h-[100vh]">
      <Hotjar />
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
