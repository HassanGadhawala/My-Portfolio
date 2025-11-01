import React from "react";
import { Rocket } from "lucide-react";
import useFadeIn from "../hooks/useFadeIn";

export default function Projects() {


      const [ref, isVisible] = useFadeIn();
  

  const projects = [
    {
      name: "Giviz - Gift Management App",
      description:
        "A Flutter app to manage and recall gifts exchanged on occasions like weddings and birthdays. Includes charts, history, reminders, profile management, and friend invites.",
      technologies: ["Flutter", "Firebase", "Dart", "Charts"],
    },
    {
      name: "TeacherHelper - Question Paper Generator",
      description:
        "A Flutter app that allows teachers to generate question papers from a Firestore database containing standards, subjects, chapters, and questions.",
      technologies: ["Flutter", "Firebase", "Dart"],
    },
    {
      name: "Smart Attendance System",
      description:
        "An AI-powered attendance system developed using Python that automates attendance marking through face detection and recognition.",
      technologies: ["Python", "OpenCV", "AI", "Face Recognition"],
    },
    {
      name: "SoftKart LLC - Antivirus E-commerce Website",
      description:
        "An antivirus software e-commerce website for purchasing and managing licenses online with secure payment integration.",
      technologies: ["React", "Django", "Stripe", "E-commerce"],
      link: "https://www.softkartllc.com",
    },
    {
      name: "Sensors App",
      description:
        "An Android app built in Java that utilizes multiple device sensors like proximity, accelerometer, step detector, and light sensor for various interactive use cases.",
      technologies: ["Java", "Android", "Sensors", "IoT"],
    },
    {
      name: "Smart Camera for Measurements",
      description:
        "A computer vision-based app that measures object dimensions using a smartphone camera by selecting start and end points on-screen.",
      technologies: ["Python", "OpenCV", "AI", "Computer Vision"],
    },
    {
      name: "NFT Marketplace",
      description:
        "A decentralized NFT marketplace for minting, buying, and selling digital assets securely using Ethereum and IPFS.",
      technologies: ["Solidity", "Ethereum", "IPFS", "Web3"],
    },
    {
      name: "Crowdfunding DApp",
      description:
        "A blockchain-based decentralized crowdfunding platform that allows users to raise and contribute funds transparently.",
      technologies: ["Solidity", "Ethereum", "Smart Contracts", "Sepolia"],
    },
    {
      name: "Custom Cryptocurrency",
      description:
        "A custom ERC-20 token created using Solidity and deployed on the Sepolia testnet with smart contract integration and wallet support.",
      technologies: ["Solidity", "Ethereum", "Ethers.js", "Blockchain"],
    },
  ];

  return (
    <section
    ref={ref}
      id="projects"
      className={`transition-opacity duration-1000 transform ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      } flex flex-col items-center justify-center text-center px-4 sm:px-6 md:px-12 min-h-screen pt-16 mt-16`}
    >
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-10 bg-linear-to-r from-green-400 via-lime-400 to-emerald-400 bg-clip-text text-transparent">
        Projects
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-7xl">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-slate-800/50 backdrop-blur-md rounded-2xl p-6 sm:p-8 shadow-2xl border border-green-500/20 hover:border-green-500/40 transition-all hover:scale-[1.02]"
          >
            <div className="flex flex-col gap-4">
              <div className="bg-linear-to-br from-green-500 to-green-600 p-3 rounded-lg shadow-lg w-fit mx-auto sm:mx-0">
                <Rocket size={24} className="text-white" />
              </div>
              <div className="flex-1 text-center sm:text-left">
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-green-400 mb-2">
                  {project.name}
                </h3>
                <p className="text-sm sm:text-base text-gray-300 mb-3 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap justify-center sm:justify-start gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="bg-green-500/20 px-3 py-1 rounded-full text-xs sm:text-sm border border-green-500/30 font-semibold text-white" 
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-4 text-green-400 hover:text-green-300 text-sm sm:text-base underline"
                  >
                    Visit Project ↗
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
