// src/Components/BookConsultation/BookConsultation.jsx
import React from 'react';

const BookConsultation = () => {
  return (
    <section className="bg-white py-16 px-6 md:px-24 text-gray-800 ">
      <div className="max-w-4xl mx-auto px-10 py-10 text-center shadow-md rounded-[40px]">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Book a Consultation
        </h2>
        <p className="text-lg text-gray-600 mb-10">
          Leverage expert insights in marketing strategy, performance optimization, and brand positioning. Let’s grow your business — efficiently and effectively.
        </p>

        {/* Simple Form */}
        <form className="grid gap-6 md:grid-cols-2 text-left">
          <input
            type="text"
            placeholder="Your Name"
            className="p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
          />
          <input
            type="tel"
            placeholder="Phone Number"
            className="p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
          />
          <textarea
            placeholder="Brief Message"
            className="p-4 border border-gray-300 rounded-md col-span-2 h-32 focus:outline-none focus:ring-2 focus:ring-purple-600"
          ></textarea>
        </form>

        {/* Calendar Button + Submit */}
        <div className="flex flex-col md:flex-row gap-4 justify-center mt-8">
          <a
            href="https://calendly.com/your-calendar-link" // Replace with your actual link
            target="_blank"
            rel="noopener noreferrer"
            className="bg-purple-600 text-white px-6 py-3 rounded-full hover:bg-purple-700 transition"
          >
            Schedule via Calendar
          </a>
          <button
            type="submit"
            className="border border-purple-600 text-purple-600 px-6 py-3 rounded-full hover:bg-purple-600 hover:text-white transition"
          >
            Submit Message
          </button>
        </div>

        {/* Trust-building Statement */}
        <p className="text-sm text-gray-500 mt-6">
          With years of experience and a proven track record, my consultation sessions are designed to create real, measurable impact — tailored to your brand.
        </p>
      </div>
    </section>
  );
};


export default BookConsultation

