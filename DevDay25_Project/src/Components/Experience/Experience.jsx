import React from "react";
import { Briefcase, Building2, Globe, Rocket } from "lucide-react";

const companies = [
  {
    name: "Acme Corp",
    icon: <Briefcase size={28} />, // Business icon
  },
  {
    name: "Globex Corporation",
    icon: <Globe size={28} />, // Global icon
  },
  {
    name: "Vertex Dynamics",
    icon: <Rocket size={28} />, // Startup feel
  },
  {
    name: "Innova Solutions",
    icon: <Building2 size={28} />, // Corporate
  },
];

export default function Experience() {
  return (
    <div className="p-6 bg-white text-blue-950 rounded-xl shadow-sm">
      <h2 className="text-2xl font-bold mb-4">I have worked</h2>
      <div className="flex gap-6 overflow-x-auto">
        {companies.map((company, index) => (
          <div
            key={index}
            className="flex flex-col items-center bg-blue-50 hover:bg-blue-950 hover:text-white transition-all duration-300 rounded-full w-24 h-24 justify-center shadow-md"
          >
            {company.icon}
            <span className="text-sm mt-2 font-medium text-center">
              {company.name.split(" ")[0]}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
