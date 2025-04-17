import React from "react";

const Timeline = () => {
  const experiences = [
    {
      year: "2020 - 2021",
      role: "Senior Corporate Strategy Consultant",
      company: "McKinsey & Company",
      description:
        "Led digital transformation strategies for Fortune 500 clients, resulting in 30% operational efficiency gains.",
      achievements: [
        "Developed AI-powered market analysis frameworks",
        "Facilitated C-level executive workshops",
        "Published industry white papers on digital disruption",
      ],
    },
    {
      year: "2018 - 2020",
      role: "Management Consultant",
      company: "Boston Consulting Group",
      description:
        "Specialized in organizational restructuring and process optimization for financial institutions.",
      achievements: [
        "Implemented cost-saving measures saving $45M annually",
        "Designed leadership development programs",
        "Led post-merger integration for major bank acquisition",
      ],
    },
    {
      year: "2023 - Present",
      role: "Independent Corporate Advisor",
      company: "Global Consulting Partners",
      description:
        "Providing strategic guidance to startups and mid-sized enterprises on scaling operations.",
      achievements: [
        "Developed go-to-market strategies for 12+ tech startups",
        "Created investor pitch frameworks raising $200M+",
        "Advised on international expansion to 3 continents",
      ],
    },
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-center mb-12 text-blue-950">
        Experience Timeline
      </h1>

      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-1/2 top-0 w-1 h-full bg-gray-500 transform -translate-x-1/2 hidden sm:block"></div>

        {experiences.map((exp, index) => (
          <div
            key={index}
            className={`mb-12 flex flex-col sm:flex-row ${
              index % 2 !== 0 ? "sm:flex-row-reverse" : ""
            } items-center sm:items-stretch`}
          >
            {/* Year */}
            <div className="w-full sm:w-1/2 px-4 py-2 text-center sm:text-right">
              <div className="text-lg font-semibold text-blue-950">
                {exp.year}
              </div>
            </div>

            {/* Timeline dot */}
            <div className="relative w-8 h-8 bg-blue-950 rounded-full border-4 border-white z-10 mx-auto my-4 sm:my-0 hover:bg-blue-700 transition-colors duration-300"></div>

            {/* Experience card */}
            <div className="w-full sm:w-1/2 px-4 py-2 group">
              <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200 hover:bg-blue-800 hover:shadow-xl transition-all duration-300">
                <h2 className="text-xl font-bold text-blue-950 mb-1 group-hover:text-white">
                  {exp.role}
                </h2>
                <h3 className="text-lg font-semibold text-blue-800 mb-3 group-hover:text-blue-200">
                  {exp.company}
                </h3>
                <p className="text-gray-700 mb-4 group-hover:text-blue-100">
                  {exp.description}
                </p>
                <ul className="list-disc pl-5 text-gray-700 space-y-1 group-hover:text-blue-100">
                  {exp.achievements.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;
