import React from 'react';
import Header from './Components/Header-Footer/Header';
import Footer from './Components/Header-Footer/Footer';
import HeroSection from './Components/HeroSection/HeroSection';
 import Projects from './Components/Projects/Projects';
import Certifications from './Components/Experience/Certifications';
import Timeline from './Components/Experience/Timeline';

function App() {
  return (
    <>
      <Header />
      <HeroSection />
      <Certifications />
      <Timeline/>
       <Projects />
      <Footer />
    </>
  );
}

export default App;
