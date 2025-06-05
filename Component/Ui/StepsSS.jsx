import React from "react";
import { FaSearch, FaCog, FaGlobe, FaRocket } from "react-icons/fa";
import "./Hero.css";

const steps = [
  {
    id: 1,
    title: "Making Idea",
    icon: <FaSearch size={40} />,
    color: "#22c55e", // green-500
  },
  {
    id: 2,
    title: "Working Plan",
    icon: <FaCog size={40} />,
    color: "#f97316", // orange-500
  },
  {
    id: 3,
    title: "SEO Research",
    icon: <FaGlobe size={40} />,
    color: "#06b6d4", // cyan-500
  },
  {
    id: 4,
    title: "Launch Project",
    icon: <FaRocket size={40} />,
    color: "#3b82f6", // blue-500
  },
];

const StepSection = () => {
  return (
    <div className="relative py-16 bg-white px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
        {steps.map((step) => (
          <div
            key={step.id}
            className="relative group w-full aspect-square flex flex-col justify-center items-center text-center p-6 bg-gray-50 rounded-2xl shadow hover:shadow-lg transition-all duration-300"
            style={{ "--step-color": step.color }}
          >
            {/* Step Number */}
            <div className="absolute top-4 left-4 text-3xl font-bold text-gray-300 group-hover:text-[color:var(--step-color)]">
              <span>{step.id < 10 ? `0${step.id}` : step.id}</span>
            </div>

            {/* Icon and Title */}
            <div className="relative z-20 text-center">
              <div
                className="mb-4 transition-colors duration-300"
                style={{ color: step.color }}
              >
                {step.icon}
              </div>
              <div className="font-semibold text-gray-800 group-hover:text-gray-900 text-lg">
                {step.title}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StepSection;
