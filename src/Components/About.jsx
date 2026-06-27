import React from "react";

const About = () => {
  return (
    <section
      id="about"
      className="bg-[#05060a] text-white py-12 md:py-20 px-6 relative overflow-hidden"
    >

      {/* Background Glow */}
      <div className="absolute w-72 h-72 bg-cyan-500/10 blur-3xl rounded-full top-10 left-10"></div>

      <div className="max-w-4xl mx-auto relative z-10">

        {/* Heading */}
        <div className="text-center mb-8 md:mb-10">

          <p className="text-cyan-400 tracking-widest uppercase text-xs md:text-sm mb-2">
            Introduction
          </p>

          <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold">
            About <span className="text-cyan-400">Me</span>
          </h2>

          <div className="w-16 h-[2px] bg-cyan-400 mx-auto mt-3"></div>

        </div>

        {/* Card */}
        <div
          className="
            bg-white/5
            backdrop-blur-md
            border border-white/10
            rounded-xl
            p-5 sm:p-6 md:p-8
            hover:shadow-cyan-500/10
            transition
          "
        >

          <p className="text-gray-300 text-sm md:text-base leading-6 md:leading-7 text-center md:text-left">

            Hi, I'm <span className="text-cyan-400 font-semibold">Fatima</span>,
            a Full Stack Web Developer and IT student. I build modern,
            responsive web applications with clean UI and smooth UX.

            <br /><br />

            I focus on writing clean code and learning new technologies to
            improve my skills and create better digital experiences.

          </p>

        </div>

      </div>
    </section>
  );
};

export default About;