import React from "react";
import Timeline from './Timeline'
import Certifications from './Certifications'
import aboutimg from '../../images/aboutimg.jpg'

export default function Experience() {
  return (
   <div>
    <div>
    <section id="About" className="py-16 px-4 sm:px-10 md:px-24 bg-white">
      <div className="flex flex-col md:flex-row items-center gap-10">
        
        {/* Image */}
        <div className="w-full md:w-1/2">
          <img 
            src={aboutimg} 
            alt="About" 
            className="w-full h-auto object-cover rounded-xl shadow-md"
          />
        </div>

        {/* Text Content */}
        <div id="About" className="w-full md:w-1/2 text-center md:text-left">
          <h2 className="text-3xl sm:text-4xl font-bold text-blue-950 mb-4">
            About Us
          </h2>
          <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
            At Globex, we’re driven by innovation and passion for tech. Our team collaborates to create impactful solutions tailored to each client's needs. We blend creativity with strategy to help businesses grow and scale.
          </p>
        </div>
      </div>
    </section>
    </div>
    <Timeline/>
    <Certifications/>
   </div>
  );
}
