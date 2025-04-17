
import React from 'react';

const BookConsultation = () => {
  return (
    <section className="bg-white py-12 px-4 sm:px-6 lg:px-24 text-gray-800">
      <div className="max-w-4xl mx-auto px-6 sm:px-10 py-10 text-center shadow-md rounded-[30px]">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
          Book a Consultation
        </h2>
        <p className="text-base sm:text-lg text-gray-600 mb-8 sm:mb-10">
          Leverage expert insights in marketing strategy, performance optimization, and brand positioning. Let’s grow your business efficiently and effectively.
        </p>

        {/* Form */}
        <form className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 text-left">
          <input
            type="text"
            placeholder="Your Name"
            className="p-3 sm:p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-950 w-full"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="p-3 sm:p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-950 w-full"
          />
          <input
            type="tel"
            placeholder="Phone Number"
            className="p-3 sm:p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-950 w-full"
          />
          <textarea
            placeholder="Brief Message"
            className="p-3 sm:p-4 border border-gray-300 rounded-md col-span-1 sm:col-span-2 h-28 sm:h-32 resize-none focus:outline-none focus:ring-2 focus:ring-blue-950 w-full"
          ></textarea>
        </form>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
          <a
            href="https://calendly.com/your-calendar-link"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-950 text-white px-6 py-3 rounded-full text-center hover:bg-white hover:text-blue-950 hover:border hover:border-blue-950 transition"
          >
            Schedule via Calendar
          </a>
          <button
            type="submit"
            className="border border-blue-950 text-blue-950 px-6 py-3 rounded-full hover:bg-blue-950 hover:text-white transition"
          >
            Submit Message
          </button>
        </div>

        {/* Trust-building line */}
        <p className="text-xs sm:text-sm text-gray-500 mt-6">
          With years of experience and a proven track record, my consultation sessions are designed to create real, measurable impact — tailored to your brand.
        </p>
      </div>
    </section>
  );
};

export default BookConsultation;
