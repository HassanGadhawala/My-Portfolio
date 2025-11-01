import React from "react";
import useFadeIn from "../hooks/useFadeIn";

export default function Skills() {
  const [ref, isVisible] = useFadeIn();

  const skills = [
    "Flutter",
    "React",
    "Django",
    "Python",
    "JavaScript",
    "Java",
    "Blockchain",
    "Ethereum",
    "Solidity",
    "Web3",
    "ethers.js",
    "Machine Learning",
    "AI",
    "OpenCV",
    "Android Development",
    "HTML5",
    "CSS",
    "Bootstrap",
    "Material-UI",
    "Tailwind CSS",
    "Full-Stack Development",
    "Mobile App Development",
  ];

  return (
    <section
    ref={ref}
      id="skills"
      className={`transition-opacity duration-1000 transform ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      } flex flex-col items-center justify-center text-center px-4 sm:px-6 md:px-12 min-h-screen pt-16 mt-16`}
    >
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-10 bg-linear-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
        Skills & Technologies
      </h2>

      <div className="w-full max-w-6xl bg-slate-800/50 backdrop-blur-md rounded-2xl p-5 sm:p-8 md:p-10 shadow-2xl border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300">
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 md:gap-4">
          {skills.map((skill, index) => (
            <span
              key={index}
              className="bg-linear-to-r from-blue-600 to-purple-600 text-white px-3 sm:px-4 md:px-5 py-2 rounded-full text-xs sm:text-sm md:text-base font-semibold hover:scale-110 transition-transform shadow-md hover:shadow-purple-500/50"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
