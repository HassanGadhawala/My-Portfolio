import React, { useState, useEffect } from "react";
import {
  Github,
  Linkedin,
  Mail,
  Phone,
  Menu,
  X,
  Code,
  Briefcase,
  GraduationCap,
  Rocket,
  User,
} from "lucide-react";
import Navbar from "../Components/Navbar";
import Home from "../Components/Home";
import About from "../Components/About";
import Experiences from "../Components/Experiences";
import Education from "../Components/Education";
import Footer from "../Components/Footer";
import Skills from "../Components/Skills";
import Projects from "../Components/Projects";
import Contact from "../Components/Contact";

export default function PortfolioPage() {
  const projects = [
    {
      name: "SENSORS",
      description:
        "Advanced sensor integration system leveraging IoT technologies to collect, process, and analyze real-time data from multiple sensor sources for intelligent decision-making.",
      technologies: ["Python", "IoT", "Machine Learning", "Data Analytics"],
    },
    {
      name: "SMART CAMERA FOR MEASUREMENTS",
      description:
        "Intelligent camera application using advanced computer vision and AI technologies to perform precise measurements and object detection in real-time environments.",
      technologies: [
        "Python",
        "OpenCV",
        "AI",
        "Computer Vision",
        "Machine Learning",
      ],
    },
  ];

  return (
    <div className="min-h-full bg-linear-to-r from-slate-900 via-purple-900 to-slate-900">
      <Navbar />
      <Home />
      <About />
      <Experiences />
      <Education />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>

   
  );
}
