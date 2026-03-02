import {
  MapPin,
  Briefcase,
  Code2,
  Github,
  Facebook,
  Instagram,
  Mail,
  Download,
} from "lucide-react"

import aboutImg from "@/assets/aboutme.jpg"

export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen px-6 md:px-12 lg:px-20 py-20 text-white"
    >

      {/* Code Style Heading */}
      <p className="text-base md:text-lg font-mono">
        <span className="text-pink-400">&lt;</span>
        <span className="text-purple-400">section</span>{" "}
        <span className="text-green-400">id</span>
        <span className="text-white">=</span>
        <span className="text-yellow-300">"about"</span>
        <span className="text-pink-400">&gt;</span>
      </p>

      <div className="relative mb-12 mt-4">
        <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold">
          ABOUT ME
        </h2>
        <p className="text-gray-400 font-mono mt-2 text-base md:text-lg">
          // Who I am?
        </p>

        <span className="absolute right-0 top-4 w-3 h-3 bg-purple-500 rounded-full animate-pulse"></span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">

        {/* LEFT SIDE */}
        <div className="flex flex-col items-center lg:items-start">

          {/* Profile Image */}
          <div className="rounded-3xl overflow-hidden shadow-2xl w-full max-w-[400px] hover:scale-105 transition duration-500">
            <img
              src={aboutImg}
              alt="James Gasang"
              className="w-full object-cover"
            />
          </div>

          {/* Social + Resume */}
          <div className="flex flex-col sm:flex-row items-center gap-6 mt-8">

            {/* Social Icons */}
            <div className="flex gap-6 bg-white/10 backdrop-blur-md rounded-full px-6 py-3 border border-white/20 flex-wrap justify-center">
              <a
                href="https://github.com/jims062702"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="hover:text-purple-400 transition" />
              </a>

              <a
                href="https://www.facebook.com/james.gasangii.3"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Facebook className="hover:text-purple-400 transition" />
              </a>

              <a
                href="https://www.instagram.com/itsme.jamesss_/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram className="hover:text-purple-400 transition" />
              </a>

              <a href="mailto:gasang143x@gmail.com">
                <Mail className="hover:text-purple-400 transition" />
              </a>
            </div>

            {/* Resume Button */}
            <button className="font-mono bg-black border border-white/20 px-6 py-3 rounded-full hover:bg-purple-600 transition duration-300 flex items-center gap-2">
              <Download size={18} />
              Download Resume
            </button>

          </div>
        </div>

        {/* RIGHT SIDE */}
        <div>

          {/* Description Card */}
          <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-6 md:p-8 shadow-xl hover:shadow-purple-500/20 transition duration-500">
            <p className="text-gray-300 leading-7 md:leading-8 text-sm md:text-base">
              I'm currently a BSIT student at Tagoloan Community College, 3rd year,
              with a passion for building web and app systems to improve my skills.
              I'm looking forward to enhancing my knowledge about coding. I'm from
              Balingasag, Misamis Oriental and 23 years old. When I'm not coding,
              you can catch me playing basketball, watching movies or documentaries,
              gaming (Dota 2, Valorant, Mobile Legends), or singing – even if the
              notes don't always cooperate.
            </p>

            <div className="flex items-center gap-2 mt-8 text-purple-400 text-sm md:text-base">
              <MapPin size={18} />
              <span className="text-gray-300">
                Based in Balingasag, Philippines 9005
              </span>
            </div>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">

            <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-6 shadow-lg flex items-center gap-4 hover:-translate-y-1 transition duration-300">
              <div className="bg-purple-500/20 p-4 rounded-xl">
                <Briefcase className="text-purple-400" />
              </div>
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-purple-400">
                  3+
                </h3>
                <p className="text-gray-400 text-xs md:text-sm tracking-wider">
                  YEARS EXPERIENCE
                </p>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-6 shadow-lg flex items-center gap-4 hover:-translate-y-1 transition duration-300">
              <div className="bg-purple-500/20 p-4 rounded-xl">
                <Code2 className="text-purple-400" />
              </div>
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-purple-400">
                  6+
                </h3>
                <p className="text-gray-400 text-xs md:text-sm tracking-wider">
                  PROJECTS BUILT
                </p>
              </div>
            </div>

          </div>

        </div>
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