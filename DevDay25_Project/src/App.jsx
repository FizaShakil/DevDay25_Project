import { useState } from 'react'
import Header from './Components/Header-Footer/Header'
import Footer from './Components/Header-Footer/Footer'
import HeroSection from './Components/HeroSection/HeroSection.jsx'
import Experience from './Components/Experience/Experience.jsx'
import Projects from './Components/Projects/Projects.jsx'

function App() {

  return (
    <>
    <Header/>
    <HeroSection/>
    <Experience/>
    <Projects/>
    <BookConsultation/>
    <Footer/>
    </>
  );
}

export default App;
