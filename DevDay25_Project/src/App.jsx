import React from "react"
import Header from '../src/Components/Header-Footer/Header.jsx'
import Footer from '../src/Components/Header-Footer/Footer'
import HeroSection from '../src/Components/HeroSection/HeroSection.jsx'
import Experience from '../src/Components/Experience/Experience.jsx'
import Form from "./Components/BookConsultation/Form.jsx"

function App() {
  return (
    <>
    <HeroSection/>
    <Experience/>
    <Form/>
    <Footer/>
    </>
  );
}

export default App;
