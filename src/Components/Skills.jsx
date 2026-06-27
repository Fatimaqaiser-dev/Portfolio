import React from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaNodeJs,
  FaJs,
} from "react-icons/fa";

import {
  SiTailwindcss,
  SiMongodb,
  SiExpress,
} from "react-icons/si";

const Skills = () => {
  const skills = [
    { name: "HTML", icon: <FaHtml5 className="text-orange-500" /> },
    { name: "CSS", icon: <FaCss3Alt className="text-blue-500" /> },
    { name: "JavaScript", icon: <FaJs className="text-yellow-400" /> },
    { name: "React", icon: <FaReact className="text-cyan-400" /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="text-sky-400" /> },
    { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
    { name: "Express.js", icon: <SiExpress className="text-gray-300" /> },
    { name: "MongoDB", icon: <SiMongodb className="text-green-600" /> },
  ];

  return (
    <section
      id="skills"
      className="bg-[#05060a] text-white py-14 md:py-20 px-6 relative overflow-hidden"
    >

      {/* Background Glow */}
      <div className="absolute w-80 h-80 md:w-96 md:h-96 bg-cyan-500/10 blur-3xl rounded-full top-10 left-10"></div>

      <div className="max-w-6xl mx-auto relative z-10">

        {/* Heading */}
        <div className="text-center mb-10 md:mb-14">

          <p className="text-cyan-400 tracking-widest uppercase text-xs md:text-sm mb-2">
            Technologies
          </p>

          <h2 className="text-2xl md:text-5xl font-bold">
            My <span className="text-cyan-400">Skills</span>
          </h2>

          <div className="w-16 md:w-24 h-[2px] bg-cyan-400 mx-auto mt-3"></div>

          <p className="text-gray-400 mt-3 text-xs md:text-base">
            Tools I use to build modern web applications
          </p>

        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 gap-3 md:gap-5">

          {skills.map((skill, index) => (
            <div
              key={index}
              className="
                group
                bg-white/5
                backdrop-blur-md
                border border-white/10
                rounded-lg md:rounded-xl
                p-3 md:p-6
                flex flex-col items-center justify-center
                gap-2 md:gap-3
                hover:border-cyan-400/40
                hover:shadow-[0_0_20px_rgba(34,211,238,0.15)]
                hover:-translate-y-1 md:hover:-translate-y-2
                transition-all duration-300
              "
            >

              <div className="text-xl md:text-3xl group-hover:scale-110 transition">
                {skill.icon}
              </div>

              <p className="text-xs md:text-base font-medium text-gray-300 group-hover:text-cyan-300 transition text-center">
                {skill.name}
              </p>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Skills;