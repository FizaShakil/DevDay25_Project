import React from "react";

const Certifications = () => {
  const certifications = [
    {
      name: "Google Digital Marketing & E-commerce Certificate",
      platform: "Coursera (via Google)",
      description: "Master digital marketing and e-commerce skills with Google's professional certificate program.",
    },
    {
      name: "Meta (Facebook) Marketing Professional Certificate",
      platform: "Coursera",
      description: "Learn social media marketing strategies and tools directly from Meta experts.",
    },
    {
      name: "Google Analytics Certification",
      platform: "Skillshop (by Google)",
      description: "Become proficient in Google Analytics to measure and optimize digital performance.",
    },
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">Certifications</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {certifications.map((cert, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md p-6 border border-gray-200 hover:bg-blue-950 hover:text-white transition-colors duration-300 group"
          >
            <h2 className="text-xl font-semibold mb-2 group-hover:text-white">{cert.name}</h2>
            <p className="text-gray-600 mb-3 group-hover:text-gray-200">{cert.platform}</p>
            <p className="text-gray-700 group-hover:text-gray-300">{cert.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Certifications;