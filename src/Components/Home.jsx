import { Github, Linkedin, Mail, Phone } from "lucide-react";
import React from "react";
import { ReactTyped } from "react-typed";
import profile_img from "../assets/profile_img.png"
import useFadeIn from "../hooks/useFadeIn";

export default function Home() {

      const [ref, isVisible] = useFadeIn();
  
  return (
    <section
    ref={ref}
      id="home"
      className={`transition-opacity duration-1000 transform ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      } flex flex-col items-center justify-center text-center px-4 sm:px-6 md:px-12 min-h-screen`}
    >
      <div className="relative group">
        <div className="bg-linear-to-r from-blue-400 via-purple-400 to-pink-400 p-[3px] rounded-full">
          <img
            src={profile_img} 
            alt="Muhammadhassan Gadhawala"
            className="w-28 h-28 sm:w-36 sm:h-36 md:w-44 md:h-44 rounded-full object-cover border-4 border-slate-900 group-hover:scale-105 transition-transform duration-300"
          />
        </div>
      </div>

      {/* Name */}
      <h1 className="mt-6 bg-linear-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent text-3xl sm:text-4xl md:text-6xl font-extrabold">
        MUHAMMADHASSAN GADHAWALA
      </h1>

      {/* Typing Title */}
      <p className="mt-4 text-gray-300 text-sm sm:text-xl md:text-2xl max-w-6xl">
        <ReactTyped
          strings={[
            "Blockchain Developer",
            "Full-Stack Developer",
            "Mobile App Developer",
          ]}
          typeSpeed={60}
          backSpeed={40}
          loop
        />
      </p>

      {/* Description */}
      <p className="mt-3 text-gray-400 text-xs sm:text-lg max-w-2xl px-2">
        Passionate about building decentralized applications, crafting secure
        smart contracts, and creating innovative mobile solutions.
      </p>

      {/* Social Icons */}
      <div className="flex justify-center flex-wrap gap-4 sm:gap-6 mt-8">
        <a
          href="https://github.com/HassanGadhawala"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-slate-800 hover:bg-slate-700 p-3 sm:p-4 rounded-full transition-all hover:scale-110 shadow-lg hover:shadow-blue-500/50"
        >
          <Github size={24} />
        </a>
        <a
          href="https://www.linkedin.com/in/muhammadhassan-gadhawala-2720b4202/"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-600 hover:bg-blue-700 p-3 sm:p-4 rounded-full transition-all hover:scale-110 shadow-lg hover:shadow-blue-500/50"
        >
          <Linkedin size={24} />
        </a>
        <a
          href="mailto:gadhawalahassan@gmail.com"
          className="bg-purple-600 hover:bg-purple-700 p-3 sm:p-4 rounded-full transition-all hover:scale-110 shadow-lg hover:shadow-purple-500/50"
        >
          <Mail size={24} />
        </a>
        <a
          href="tel:+919978660163"
          className="bg-green-600 hover:bg-green-700 p-3 sm:p-4 rounded-full transition-all hover:scale-110 shadow-lg hover:shadow-green-500/50"
        >
          <Phone size={24} />
        </a>
      </div>
    </section>
  );
}
