import { ExternalLink, Github } from "lucide-react"
import { useState } from "react"

const projects = [
  {
    title: "Inventory Tracker",
    description:
      "Inventory Tracker is a simple web-based inventory management system built using HTML, CSS, and JavaScript. The system uses LocalStorage to save and manage product data directly in the browser, meaning no backend or database is required. As the user, you act as the administrator who can add, update, delete, and monitor product stock levels in real-time. The system includes a Light and Dark Theme toggle for better user experience and accessibility. It helps prevent stock shortages and overstocking while improving organization and inventory tracking efficiency through a clean and responsive interface.",
    image: "src/assets/inventorymock.png",
    tech: ["HTML", "CSS", "JAVASCRIPT"],
    github: "https://github.com/jims062702/Inventory-Tracker",
    live: "https://jims062702.github.io/Inventory-Tracker/",
  },
  {
    title: "Calculator",
    description:
      "Calculator is a web-based application built using HTML, CSS, and JavaScript that performs basic arithmetic operations such as addition, subtraction, multiplication, and division. The system uses LocalStorage to automatically save the last calculated result or user preferences, ensuring data persistence even after refreshing the page. It features a Light and Dark Theme toggle, allowing users to switch between themes for better visual comfort and improved user experience. The application provides a clean, responsive, and modern interface for efficient and convenient calculations.",
    image: "src/assets/600x600.png",
    tech: ["HTML", "CSS", "JAVASCRIPT"],
    github: "https://github.com/jims062702/JamesGasangCalculator",
    live: "https://jims062702.github.io/JamesGasangCalculator/",
  },
  {
    title: "EBOTO-MO TCC",
    description:
      "The Voting System for Tagoloan Community College (TCC) is a secure and user-friendly web-based election platform designed to digitize and streamline the student voting process. The system allows students to securely log in, view candidates by category, and cast their votes in an organized and transparent environment. It eliminates manual ballot counting, reduces human error, and ensures faster and more accurate election results. The Voting System for Tagoloan Community College (TCC) is a secure and user-friendly web-based election platform designed to digitize and streamline the student voting process. The system allows students to securely log in, view candidates by category, and cast their votes in an organized and transparent environment. It eliminates manual ballot counting, reduces human error, and ensures faster and more accurate election results.",
    image: "src/assets/vote.png",
    tech: ["REACT", "VITE", "TAILWIND CSS", "LARAVEL", "MYSQL"],
    github: "https://github.com/jims062702/v0-voting-system-with-gmail",
    live: "https://v0-tccvotingsystem.vercel.app/login",
  },
]

export default function Projects() {
  const [expanded, setExpanded] = useState<number | null>(null)
  const [expandedTech, setExpandedTech] = useState<number | null>(null)

  const MAX_DESCRIPTION_LENGTH = 140
  const MAX_TECH_VISIBLE = 4

  return (
    <section
      id="projects"
      className="min-h-screen px-6 md:px-12 lg:px-20 py-20 text-white"
    >

      {/* Code Style Heading */}
      <p className="text-base md:text-lg font-mono">
        <span className="text-pink-400">&lt;</span>
        <span className="text-purple-400">section</span>{" "}
        <span className="text-green-400">id</span>
        <span className="text-white">=</span>
        <span className="text-yellow-300">"projects"</span>
        <span className="text-pink-400">&gt;</span>
      </p>

      <div className="mt-4 mb-12">
        <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold">
          Projects
        </h2>
        <p className="text-gray-400 font-mono mt-2 text-sm md:text-base">
          // a selection of my recent work
        </p>
      </div>

      <div className="flex items-center gap-2 text-xs md:text-sm text-gray-400 mb-10">
        <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
        Showing {projects.length} featured projects
      </div>

      {/* Responsive Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10 items-stretch">

        {projects.map((project, index) => {
          const isExpanded = expanded === index
          const isLong =
            project.description.length > MAX_DESCRIPTION_LENGTH

          return (
            <div
              key={index}
              className="flex flex-col bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl overflow-hidden shadow-xl hover:shadow-purple-500/20 transition duration-500 h-full"
            >

              {/* Image */}
              <div className="relative group">
                <img
                  src={project.image}
                  alt="project"
                  className="w-full h-[200px] sm:h-[230px] md:h-[260px] object-cover"
                />

                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition"></div>

                <span className="absolute top-4 right-4 bg-purple-600 text-xs px-3 py-1 rounded-full font-mono">
                  FEATURED
                </span>
              </div>

              {/* Content */}
              <div className="flex flex-col flex-grow p-6 md:p-8">

                {/* Title + Icons */}
                <div className="flex justify-between items-start gap-4">
                  <h3 className="text-lg md:text-xl font-semibold">
                    {project.title}
                  </h3>

                  <div className="flex gap-3 shrink-0">

  {project.github && (
    <a
      href={project.github}
      target="_blank"
      rel="noopener noreferrer"
      className="hover:text-purple-400 transition"
    >
      <Github size={18} />
    </a>
  )}

  {project.live && (
    <a
      href={project.live}
      target="_blank"
      rel="noopener noreferrer"
      className="hover:text-purple-400 transition"
    >
      <ExternalLink size={18} />
    </a>
  )}

</div>
                </div>

                {/* Description */}
                <p className="text-gray-400 mt-4 leading-6 md:leading-7 text-sm md:text-base">
                  {isExpanded || !isLong
                    ? project.description
                    : project.description.slice(
                        0,
                        MAX_DESCRIPTION_LENGTH
                      ) + "..."}
                </p>

                {/* Read More */}
                {isLong && (
                  <button
                    onClick={() =>
                      setExpanded(isExpanded ? null : index)
                    }
                    className="text-purple-400 mt-3 hover:underline text-sm w-fit"
                  >
                    {isExpanded ? "Show less" : "Read more"}
                  </button>
                )}

                <div className="flex-grow"></div>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 md:gap-3 mt-6">
                  {(expandedTech === index
                    ? project.tech
                    : project.tech.slice(0, MAX_TECH_VISIBLE)
                  ).map((tech, i) => (
                    <span
                      key={i}
                      className="bg-white/10 px-3 py-1 rounded-full text-xs"
                    >
                      {tech}
                    </span>
                  ))}

                  {project.tech.length > MAX_TECH_VISIBLE && (
                    <button
                      onClick={() =>
                        setExpandedTech(
                          expandedTech === index ? null : index
                        )
                      }
                      className="bg-purple-600/20 text-purple-300 px-3 py-1 rounded-full text-xs hover:bg-purple-600/40 transition"
                    >
                      {expandedTech === index
                        ? "Show less"
                        : `+${
                            project.tech.length - MAX_TECH_VISIBLE
                          } more`}
                    </button>
                  )}
                </div>

              </div>
            </div>
          )
        })}
      </div>

      {/* Closing Tag */}
      <p className="text-base md:text-lg font-mono mt-10">
        <span className="text-pink-400">&lt;</span>
        <span className="text-pink-400">/</span>
        <span className="text-purple-400">section</span>
        <span className="text-pink-400">&gt;</span>
      </p>

    </section>
  )
}