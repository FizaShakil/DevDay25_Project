import React, { useState } from 'react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className=" text-gray-200 px-4 py-4 bg-gray-900 absolute top-0 left-0 w-full z-50">

      <div className="flex items-center justify-between">
        {/* Left Section */}
        <div className="flex items-center gap-3">
          <button
            className="text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            <i className={`fas ${isOpen ? 'fa-times' : 'fa-bars'} text-lg md:hidden`}></i>
          </button>
          <div className="flex flex-col text-xs text-gray-400">
        <h2 className="text-3xl font-bold">
            <span className="text-white">G</span>lobex
          </h2>
          <p className='text-gray-400'>Where technology meets innovation</p>
          </div>
        </div>

        {/* DESKTOP Header Icons */}
        <div className="hidden md:flex items-center gap-6 text-sm">
          <div className="flex flex-col justify-end items-center gap-2">
            <i className=" text-gray-400 text-base"></i>
            <span><a href="#Home">Home</a></span>
          </div>
          <div className="flex flex-col justify-end items-center gap-2">
            <i className=" text-gray-400 text-base"></i>
            <span><a href="#About">About</a></span>
          </div>
          <div className="flex flex-col justify-end items-center gap-2">
            <i className=" text-gray-400 text-base"></i>
            <span><a href="#ExperienceTimeline">Experience</a></span>
          </div>
          <div className="flex flex-col justify-end items-center gap-2">
            <i className="text-gray-400 text-base"></i>
            <span><a href="#BookConsultation">Book Consultation</a></span>
          </div>
        </div>
      </div>

      {/* MOBILE + SIDEPANEL MENU */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-[#1f1b2e] z-50 p-5 overflow-y-auto transform transition-transform duration-300 ${
          isOpen ? 'translate-x-0' : '-translate-x-full '
        }`}
      >

        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold">
            <span className="text-gray-400">G</span>lobex
          </h2>
          <button onClick={() => setIsOpen(false)}>
            <i className="fas fa-times text-white text-lg"></i>
          </button>
        </div>

        {/* MOBILE VIEW (all header icons) */}

        {/* SHARED VIEW: Menu Items */}
        <div className="space-y-2 text-sm">
          <ul className="space-y-2">
            <li> 
              <i className="fa-solid fa-house text-gray-400 text-base -mb-3 mr-2"></i>
                <a href="#Home">Home</a>
            </li>
            <li>
              <i className="fa-solid fa-user text-gray-400 text-base -mb-3 mr-2"></i>
                <a href="#About">About</a>
            </li>
            <li>
              <i className="fa-solid fa-briefcase text-gray-400 text-base -mb-3 mr-2"></i>
                <a href="#ExperienceTimeline">Experience</a>
            </li>
            <li>
            <i className="fa-solid fa-address-card text-gray-400 text-base -mb-3 mr-2"></i>
            <a href="#BookConsultation">Book Consultation</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
