
import React from "react";

const Hero = () => {
  return (
    <section className="min-h-screen md:h-screen flex items-center bg-[#05060a] text-white px-6 pt-16 md:pt-24 relative overflow-hidden">

      <div className="max-w-6xl mx-auto w-full flex flex-col md:flex-row items-center justify-between gap-6 md:gap-10 z-10">

       
{/* IMAGE */}
<div className="order-1 md:order-2 md:w-1/2 flex justify-center relative">

  {/* Simple Dark Outline */}
  <div className="absolute w-60 h-60 sm:w-72 sm:h-72 md:w-[450px] md:h-[450px] rounded-full border border-cyan-700/60"></div>

  {/* Profile Image */}
  <div className="relative z-10 p-2 md:p-3 rounded-full bg-white/5 backdrop-blur-md border border-white/10">
    <img
      src="/blue.png.png"
      alt="Profile"
      className="w-56 h-56 sm:w-64 sm:h-64 md:w-[420px] md:h-[420px] object-cover rounded-full border border-cyan-700/60 hover:scale-105 transition duration-500"
    />
  </div>

</div>



        {/* TEXT */}
        <div className="order-2 md:order-1 text-center md:text-left md:w-1/2">

          <h1 className="text-2xl sm:text-3xl md:text-6xl font-bold leading-tight mb-2">
            Hi, I'm <span className="text-cyan-400">Fatima</span>
          </h1>

          <h2 className="text-lg sm:text-xl md:text-3xl font-semibold text-cyan-400 mb-4">
            MERN Stack Developer
          </h2>

          <p className="text-gray-300 text-xs sm:text-sm md:text-xl mb-4 md:mb-6 leading-relaxed">
            I design and develop modern web applications with clean UI and smooth UX.
          </p>

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

