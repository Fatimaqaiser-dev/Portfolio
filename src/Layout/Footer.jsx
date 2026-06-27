import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#05060a] text-white border-t border-white/10 py-12 px-6">

      <div className="max-w-6xl mx-auto">

        {/* TOP SECTION */}
        <div className="grid md:grid-cols-3 gap-10 items-center">

          {/* BRAND */}
          <div>
            <h1 className="text-2xl font-bold tracking-wide">
              My<span className="text-cyan-400">Portfolio</span>
            </h1>

            <p className="text-gray-400 text-sm mt-3 leading-relaxed">
              Full Stack Developer passionate about building modern,
              responsive and scalable web applications.
            </p>
          </div>

          {/* LINKS */}
          <div className="flex flex-col gap-2 text-center">

            {["Home", "Skills", "Projects", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-gray-400 hover:text-cyan-400 transition"
              >
                {item}
              </a>
            ))}

          </div>

          {/* SOCIAL */}
          <div className="flex gap-4 md:justify-end justify-center">

            <a
              href="https://github.com/Fatimaqaiser-dev"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-white/5 border border-white/10 text-gray-300 hover:text-white hover:border-cyan-400 transition"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/fatima-chauhan-71ab64400/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-white/5 border border-white/10 text-gray-300 hover:text-cyan-400 transition"
            >
              <FaLinkedin />
            </a>

            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=chohanfatima1231@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-white/5 border border-white/10 text-gray-300 hover:text-red-400 transition"
            >
              <FaEnvelope />
            </a>

          </div>

        </div>

        {/* BOTTOM */}
        <div className="mt-10 border-t border-white/10 pt-6 text-center">

          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} MyPortfolio. Built with React & Tailwind CSS
          </p>

        </div>

      </div>
    </footer>
  );
};

export default Footer;