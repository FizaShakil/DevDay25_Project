import React from 'react';
import heroimage from "../../images/heroimage.jpg";
import Header from '../Header-Footer/Header';
const HeroSection = () => {
  return (
    <>
    <Header/>
    <section id="Home"
      className="w-full h-[500px] relative  md:h-screen bg-cover bg-center pt-[80px] flex items-center justify-start"
      style={{ backgroundImage: `url(${heroimage})` }}
    >
      <div className="bg-black bg-opacity-60 w-full h-full flex items-center px-4 sm:px-10 md:px-24 py-10">
        <div className="text-white max-w-2xl">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
            Drive Business Growth <br />
            <span className="text-gray-300">Strategically.</span>
          </h1>

          <p className="mt-4 text-sm sm:text-base md:text-lg text-gray-300">
            Unlock your brand's potential with tailored strategies focused on marketing, performance,
            and positioning all designed to deliver measurable results.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <a href="#BookConsultation">
            <button className="text-sm sm:text-base px-4 sm:px-6 py-2 sm:py-3 bg-blue-950 text-white rounded-full hover:bg-white hover:text-blue-950 transition">
              Book a Session
            </button>
            </a>
            <a href="../../Resume.docx" download>
            <button className="text-sm sm:text-base px-4 sm:px-6 py-2 sm:py-3 border border-white text-white rounded-full hover:bg-white hover:text-black transition">
              Resume
            </button>
            </a>
          </div>
        </div>
      </div>
    </section>
    </>
  );
};

export default HeroSection;
