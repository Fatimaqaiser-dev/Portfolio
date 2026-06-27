import React from "react";

const Hero = () => {
  return (
    <section className="min-h-screen md:h-screen flex items-center bg-[#05060a] text-white px-6 pt-16 md:pt-24 relative overflow-hidden">

      {/* Neon Background Orbs */}
      <div className="absolute w-72 h-72 md:w-96 md:h-96 bg-cyan-500/20 rounded-full blur-3xl top-10 left-10 animate-pulse"></div>
      <div className="absolute w-72 h-72 md:w-96 md:h-96 bg-amber-500/10 rounded-full blur-3xl bottom-10 right-10 animate-pulse"></div>

      <div className="max-w-6xl mx-auto w-full flex flex-col md:flex-row items-center justify-between gap-6 md:gap-10 z-10">

        {/* IMAGE */}
        <div className="order-1 md:order-2 md:w-1/2 flex justify-center relative">

          <div className="absolute w-60 h-60 md:w-80 md:h-80 bg-cyan-500/10 rounded-full blur-3xl"></div>

          <div className="p-2 md:p-3 rounded-full bg-white/5 backdrop-blur-md border border-white/10">

            <img
              src="/blue.png.png"
              alt="Profile"
              className="w-40 h-40 sm:w-52 sm:h-52 md:w-96 md:h-96 object-cover rounded-full border border-cyan-400/30 shadow-2xl hover:scale-105 transition duration-500"
            />

          </div>
        </div>

        {/* TEXT */}
        <div className="order-2 md:order-1 text-center md:text-left md:w-1/2">

          <p className="text-[10px] sm:text-xs md:text-sm tracking-widest text-cyan-400 uppercase mb-2 md:mb-3">
            Full Stack Developer
          </p>

          <h1 className="text-2xl sm:text-3xl md:text-6xl font-bold leading-tight mb-3 md:mb-4">
            Hi, I'm <span className="text-cyan-400">Fatima</span>
          </h1>

          <p className="text-gray-300 text-xs sm:text-sm md:text-xl mb-4 md:mb-6 leading-relaxed">
            I design and develop modern web applications with clean UI and smooth UX.
          </p>

          {/* BUTTONS */}
          <div className="flex flex-row gap-2 sm:gap-3 justify-center md:justify-start">

            <a
              href="#projects"
              className="px-4 sm:px-5 py-2.5 md:py-3 bg-cyan-500 text-black font-semibold rounded-full hover:bg-cyan-400 transition whitespace-nowrap text-xs sm:text-sm md:text-base"
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="px-4 sm:px-5 py-2.5 md:py-3 border border-cyan-400 text-cyan-300 hover:bg-cyan-500 hover:text-black rounded-full transition whitespace-nowrap text-xs sm:text-sm md:text-base"
            >
              Contact Me
            </a>

          </div>

        </div>

      </div>
    </section>
  );
};

export default Hero;