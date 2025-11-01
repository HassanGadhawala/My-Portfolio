import React from "react";
import { Mail, Phone, Github, Linkedin } from "lucide-react";
import useFadeIn from "../hooks/useFadeIn";

export default function Contact() {
      const [ref, isVisible] = useFadeIn();
  
  return (
    <section
    ref={ref}
      id="contact"
      className={`transition-opacity duration-1000 transform ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      } flex flex-col items-center justify-center text-center px-4 sm:px-6 md:px-12 min-h-screen pt-16 mt-16`}
    >
      {/* Title */}
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-10 bg-linear-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
        Get In Touch
      </h2>

      {/* Card */}
      <div className="bg-slate-800/50 backdrop-blur-md rounded-2xl p-6 sm:p-8 md:p-12 shadow-2xl border border-purple-500/20 hover:border-purple-400/40 transition-all duration-300 hover:scale-[1.02] max-w-6xl">
        <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-10 leading-relaxed">
          I’m always open to discussing new projects, creative ideas, or
          opportunities to collaborate. Let’s connect and build something great
          together!
        </p>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6 mb-10">
          <a
            href="mailto:gadhawalahassan@gmail.com"
            className="flex items-center gap-3 bg-linear-to-r from-purple-500 to-indigo-500 hover:from-purple-600 hover:to-indigo-600 px-6 sm:px-8 py-3 sm:py-4 rounded-full transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-purple-500/50 w-full sm:w-auto justify-center text-white"
          >
            <Mail size={20} />
            <span className="font-semibold text-sm sm:text-base">
              gadhawalahassan@gmail.com
            </span>
          </a>

          {/* Phone */}
          <a
            href="tel:+919978660163"
            className="flex items-center gap-3 bg-linear-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 px-6 sm:px-8 py-3 sm:py-4 rounded-full transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-green-500/50 w-full sm:w-auto justify-center text-white"
          >
            <Phone size={20} />
            <span className="font-semibold text-sm sm:text-base">
              +91 9978660163
            </span>
          </a>
        </div>

        {/* Social Icons */}
        <div className="flex justify-center space-x-6">
          {/* GitHub */}
          <a
            href="https://github.com/HassanGadhawala"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-slate-700 hover:bg-slate-600 p-4 rounded-full transition-all duration-300 hover:scale-110 shadow-lg hover:shadow-white/30"
          >
            <Github size={26} className="text-white" />
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/muhammadhassan-gadhawala-2720b4202/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-600 hover:bg-blue-700 p-4 rounded-full transition-all duration-300 hover:scale-110 shadow-lg hover:shadow-blue-500/40"
          >
            <Linkedin size={26} className="text-white" />
          </a>
        </div>
      </div>
    </section>
  );
}
