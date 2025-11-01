import { GraduationCap } from "lucide-react";
import React from "react";
import useFadeIn from "../hooks/useFadeIn";

export default function Education() {


  const [ref, isVisible] = useFadeIn();


  const education = [
    {
      degree: "Bachelor of Engineering - BE",
      field: "Computer and Information Sciences",
      institution: "Government Engineering College, Modasa",
      duration: "Oct 2023 - Oct 2026",
      grade: "",
    },
    {
      degree: "Diploma in Information Technology",
      field: "Information Technology",
      institution: "Government Polytechnic, Himatnagar",
      duration: "Jun 2020 - Jun 2023",
      grade: "9.85 CGPA",
    },
    {
      degree: "SSC",
      field: "Secondary Education",
      institution: "Madresa High School",
      duration: "Mar 2019 - Mar 2020",
      grade: "80%",
    },
  ];

  return (
    <section
    ref={ref}
      id="education"
      className={`transition-opacity duration-1000 transform ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      } flex flex-col items-center justify-center text-center px-4 sm:px-6 md:px-12 min-h-screen pt-16 mt-16`}
    >
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-10 bg-linear-to-r from-purple-500 to-purple-600 bg-clip-text text-transparent">
        Education
      </h2>

      <div className="w-full max-w-6xl space-y-8">
        {education.map((exp, index) => (
          <div
            key={index}
            className="text-white text-left text-base sm:text-lg leading-relaxed space-y-4 bg-slate-800/50 backdrop-blur-md rounded-2xl p-5 sm:p-8 md:p-10 shadow-2xl border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 hover:scale-[1.02]"
          >
            <div className="flex flex-col sm:flex-row sm:items-start gap-4 sm:gap-6">
              <div className="p-3 bg-linear-to-r from-purple-500 to-purple-600 h-12 w-12 flex items-center justify-center rounded-md shrink-0">
                <GraduationCap />
              </div>

              <div className="flex-1">
                <h3 className="text-xl sm:text-2xl font-bold text-purple-400 mb-1">
                  {exp.degree}
                </h3>
                <p className="text-gray-300 text-sm sm:text-base mb-2">
                  {exp.field}
                </p>
                <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                  {exp.institution}
                </p>

                <div className="flex flex-wrap gap-2 text-xs sm:text-sm text-gray-400 mt-2">
                  <span>{exp.duration}</span>
                  {exp.grade && (
                    <>
                      <span className="hidden sm:inline">•</span>
                      <span className="bg-purple-500/20 px-3 py-1 rounded-full border border-purple-500/30">
                        Grade: {exp.grade}
                      </span>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
