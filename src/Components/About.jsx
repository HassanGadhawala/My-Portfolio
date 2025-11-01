import React from "react";
import useFadeIn from "../hooks/useFadeIn";

export default function About() {

    const [ref, isVisible] = useFadeIn();
  
  return (
    <section
    ref={ref}
      id="about"
      className={`transition-opacity duration-1000 transform ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      } flex flex-col items-center justify-center text-center px-4 sm:px-6 md:px-12 min-h-screen  pt-10 mt-10`}
    >
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 sm:mb-10 bg-linear-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
        About Me
      </h2>

      <div className="text-white text-justify text-base sm:text-lg md:text-xl leading-relaxed space-y-4 sm:space-y-5 max-w-3xl sm:max-w-4xl md:max-w-5xl lg:max-w-6xl bg-slate-800/50 backdrop-blur-md rounded-2xl p-5 sm:p-8 md:p-10 shadow-2xl border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300">
        <p>
          I'm <span className="font-semibold text-purple-400">MUHAMMADHASSAN GADHAWALA</span>, currently pursuing my Bachelor of
          Engineering in IT from <span className="font-medium">Government Engineering College, Modasa</span>. I
          completed my diploma from <span className="font-medium">Government Polytechnic, Himatnagar</span> with an
          impressive <span className="text-blue-400 font-semibold">9.85 CGPA</span>.
        </p>

        <p>
          As a versatile developer, I specialize in <span className="text-purple-400 font-semibold">blockchain development</span>,
          <span className="text-blue-400 font-semibold"> full-stack development</span>, and
          <span className="text-pink-400 font-semibold"> mobile app development</span>. My expertise spans across
          Web3 technologies, smart contracts, and cross-platform mobile applications.
        </p>

        <p>
          I'm passionate about leveraging cutting-edge technologies like
          <span className="text-blue-400 font-semibold"> Ethereum</span>,
          <span className="text-purple-400 font-semibold"> Solidity</span>,
          <span className="text-pink-400 font-semibold"> Flutter</span>,
          <span className="text-blue-400 font-semibold"> React</span>, and
          <span className="text-purple-400 font-semibold"> Django</span> to build innovative
          solutions. Currently working at <span className="font-medium text-purple-400">Junkies Coder</span>, I’m focused on
          developing decentralized applications, NFTs, and DeFi solutions
          while also creating intuitive mobile experiences.
        </p>
      </div>
    </section>
  );
}
