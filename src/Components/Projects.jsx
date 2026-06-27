import React from "react";

const Projects = () => {
  const projects = [
    {
      title: "Food Delivery Website",
      desc: "Full stack food delivery app with authentication and cart system.",
      image: "/res.png",
      tech: ["React", "Node.js", "MongoDB"],
      frontend: "https://github.com/Fatimaqaiser-dev/Food-App-Frontend",
      backend: "https://github.com/Fatimaqaiser-dev/Food-App-Backend",
    },
    {
      title: "Portfolio Website",
      desc: "Modern responsive portfolio built with React & Tailwind CSS.",
      image: "/por.png",
      tech: ["React", "Tailwind"],
      frontend: "https://github.com/Fatimaqaiser-dev",
      backend: "#",
    },
    {
      title: "Todo App",
      desc: "Task management app with CRUD functionality and clean UI.",
      image: "/todoo.png",
      tech: ["React", "LocalStorage"],
      frontend: "https://github.com/Fatimaqaiser-dev",
      backend: "#",
    },
  ];

  return (
    <section
      id="projects"
      className="bg-[#05060a] text-white py-20 px-5"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
          My Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 place-items-center">
          {projects.map((project, index) => (
            <div
              key={index}
              className="relative w-full max-w-[320px] h-[260px] rounded-3xl overflow-hidden border border-cyan-400/30 shadow-[0_0_20px_rgba(34,211,238,0.15)] hover:shadow-[0_0_30px_rgba(34,211,238,0.35)] transition-all duration-300 group"
            >
              {/* Background Image */}
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover object-center transition-all duration-500 group-hover:scale-110"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/70"></div>

              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4">
                <h3 className="text-xl font-bold mb-2">
                  {project.title}
                </h3>

                <p className="text-xs text-gray-300 mb-3 line-clamp-2">
                  {project.desc}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap justify-center gap-2 mb-4">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 text-[10px] rounded-full bg-white/10 backdrop-blur-md border border-white/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="flex gap-2">
                  <a
                    href={project.frontend}
                    target="_blank"
                    rel="noreferrer"
                    className="px-3 py-2 text-xs rounded-lg border border-cyan-400 hover:bg-cyan-400 hover:text-black transition"
                  >
                    Frontend
                  </a>

                  {project.backend !== "#" && (
                    <a
                      href={project.backend}
                      target="_blank"
                      rel="noreferrer"
                      className="px-3 py-2 text-xs rounded-lg border border-cyan-400 hover:bg-cyan-400 hover:text-black transition"
                    >
                      Backend
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;