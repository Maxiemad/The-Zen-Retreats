import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CustomCursor from './components/CustomCursor';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Properties from './components/Properties';
import LocalAttractions from './components/LocalAttractions';
import Contact from './components/Contact';
import Footer from './components/Footer';
import LoadingScreen from './components/LoadingScreen';

// Property Pages
import ZenParadise from './components/ZenParadise';
import ZenSpace from './components/ZenSpace';
import ZenHouse from './components/ZenHouse';

// Attraction Pages
import LakeShastaCaverns from './components/LakeShastaCaverns';
import MountShasta from './components/MountShasta';
import LassenVolcanic from './components/LassenVolcanic';

import './App.css';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const HomePage = () => (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Header />
      <Hero />
      <About />
      <Properties />
      <LocalAttractions />
      <Contact />
      <Footer />
    </motion.div>
  );

  const PropertyPage = ({ children }: { children: React.ReactNode }) => (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Header />
      {children}
      <Footer />
    </motion.div>
  );

  const AttractionPage = ({ children }: { children: React.ReactNode }) => (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Header />
      {children}
      <Footer />
    </motion.div>
  );

  return (
    <Router>
      <div className="App">
        <CustomCursor />
        
        <AnimatePresence mode="wait">
          {isLoading ? (
            <LoadingScreen key="loading" onComplete={() => setIsLoading(false)} />
          ) : (
            <Routes>
              {/* Home Page */}
              <Route path="/" element={<HomePage />} />
              
              {/* Property Pages */}
              <Route path="/zen-paradise" element={<PropertyPage><ZenParadise /></PropertyPage>} />
              <Route path="/zen-space" element={<PropertyPage><ZenSpace /></PropertyPage>} />
              <Route path="/zen-house" element={<PropertyPage><ZenHouse /></PropertyPage>} />
              
              {/* Attraction Pages */}
              <Route path="/lake-shasta-caverns" element={<AttractionPage><LakeShastaCaverns /></AttractionPage>} />
              <Route path="/mount-shasta" element={<AttractionPage><MountShasta /></AttractionPage>} />
              <Route path="/lassen-volcanic" element={<AttractionPage><LassenVolcanic /></AttractionPage>} />
              
              {/* Fallback to home page */}
              <Route path="*" element={<HomePage />} />
            </Routes>
          )}
        </AnimatePresence>
      </div>
    </Router>
  );
}

export default App;