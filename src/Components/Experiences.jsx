import { Briefcase } from "lucide-react";
import React from "react";
import useFadeIn from "../hooks/useFadeIn";

export default function Experiences() {

      const [ref, isVisible] = useFadeIn();
  
  const experiences = [
    {
      title: "Blockchain Developer",
      company: "Junkies Coder - Enterprise Mobile App Development Company",
      duration: "Jan 2025 - Present",
      location: "Ahmedabad, Gujarat, India",
      description:
        "Blockchain Developer | Smart Contract Engineer | Web3 Innovator. Passionate about building decentralized applications, crafting secure smart contracts, and driving innovation in blockchain technology. Skilled in Solidity, Ethereum, and Web3 tools like ethers.js. Experienced in DeFi, NFTs, and deploying scalable solutions on testnets and mainnets.",
      type: "On-site",
    },
    {
      title: "Full-Stack Developer (React + Django)",
      company: "Junkies Coder - Enterprise Mobile App Development Company",
      duration: "Oct 2024 - Present",
      location: "Ahmedabad, Gujarat, India",
      description:
        "Developing full-stack web applications using React (frontend) and Django (backend). Integrating REST APIs, handling authentication, and managing database operations with PostgreSQL. Focused on performance optimization, clean UI/UX design, and secure backend integration.",
      type: "On-site",
    },
    {
      title: "Mobile Application Developer (Flutter)",
      company: "Junkies Coder - Enterprise Mobile App Development Company",
      duration: "May 2024 - Present",
      location: "Ahmedabad, Gujarat, India",
      description:
        "Developing and enhancing mobile applications for iOS and Android platforms using Flutter. Implementing new features, optimizing performance, designing intuitive UIs, and collaborating in testing and code reviews to ensure high-quality releases.",
      type: "Internship",
    },
  ];

  return (
    <section
    ref={ref}
      id="experience"
      className={`transition-opacity duration-1000 transform ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      } flex flex-col items-center justify-center text-center px-4 sm:px-6 md:px-12 min-h-screen pt-16 mt-16`}
    >
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-10 bg-linear-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
        Experiences
      </h2>

      <div className="max-w-6xl space-y-8">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="text-white text-left text-base sm:text-lg leading-relaxed space-y-4 bg-slate-800/50 backdrop-blur-md rounded-2xl p-5 sm:p-8 md:p-10 shadow-2xl border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 hover:scale-[1.02]"
          >
            <div className="flex flex-col sm:flex-row sm:items-start gap-4 sm:gap-6">
              <div className="p-3 bg-linear-to-r from-blue-500 to-blue-600 h-12 w-12 flex items-center justify-center rounded-md shrink-0">
                <Briefcase />
              </div>

              <div className="flex-1">
                <h3 className="text-xl sm:text-2xl font-bold text-blue-400 mb-1">
                  {exp.title}
                </h3>
                <p className="text-gray-300 text-sm sm:text-base mb-2">
                  {exp.company}
                </p>
                <div className="flex flex-wrap gap-2 text-xs sm:text-sm text-gray-400 mb-3">
                  <span>{exp.duration}</span>
                  <span className="hidden sm:inline">•</span>
                  <span>{exp.location}</span>
                  <span className="hidden sm:inline">•</span>
                  <span className="bg-blue-500/20 px-3 py-1 rounded-full border border-blue-500/30">
                    {exp.type}
                  </span>
                </div>
                <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                  {exp.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
