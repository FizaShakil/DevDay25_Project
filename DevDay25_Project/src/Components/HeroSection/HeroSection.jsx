import React from 'react';
import heroimage from "../../images/heroimage.jpg";


const HeroSection = () => {
  return (
    <section
      className="w-full h-screen bg-cover bg-center flex items-center justify-start overflow-hidden"
      style={{ backgroundImage: `url(${heroimage})` }}
    >
      <div className="bg-black bg-opacity-50 w-full h-full flex items-center px-8 md:px-24">
        <div className="text-white max-w-xl">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
          Drive Business Growth <br />
            <span className="text-gray-300">Business</span>
          </h1>
          <p className="mt-4 text-gray-300 text-lg">
          Unlock your brand's potential with tailored strategies focused on marketing, performance, and positioning all designed to deliver measurable results.
          </p>
          <div className="mt-6 flex gap-4">
            <button className="bg-blue-950 hover:bg-white hover:text-blue-950 px-6 py-3 rounded-full text-white">
            Book a Session
            </button>
            <button className="border border-white px-6 py-3 rounded-full text-white hover:bg-white hover:text-black transition">
               Resume
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection
