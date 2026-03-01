import { MapPin, Briefcase, Code2, Github, Facebook, Instagram, Mail } from "lucide-react"
import aboutImg from "@/assets/aboutme.jpg"
import { Download } from "lucide-react"

export default function About() {
  return (
    <section id="about" className="min-h-screen px-20 py-20 text-white">

      {/* Code Style Heading */}
      <p className="text-xl font-mono">
  <span className="text-pink-400">&lt;</span>
  <span className="text-purple-400">section</span>{" "}
  <span className="text-green-400">id</span>
  <span className="text-white">=</span>
  <span className="text-yellow-300">"about"</span>
  <span className="text-pink-400">&gt;</span>
</p>

      <div className="relative mb-12 mt-4">
        <h2 className="text-7xl font-bold">ABOUT ME</h2>
        <p className="text-gray-400 font-mono mt-2 text-xl">
          // Who I am?
        </p>

        {/* Decorative Dot */}
        <span className="absolute right-0 top-4 w-3 h-3 bg-purple-500 rounded-full animate-pulse"></span>
      </div>

      <div className="grid grid-cols-2 gap-16 items-start">

        {/* LEFT SIDE */}
        <div>

          {/* Profile Image */}
          <div className="rounded-3xl overflow-hidden shadow-2xl w-[500px] hover:scale-105 transition duration-500">
            <img
              src={aboutImg}
              alt="me"
              className="w-full object-cover"
            />
          </div>
          <div className="flex gap-5">
          {/* Social Icons */}
          <div className="flex gap-10 mt-6 bg-white/10 backdrop-blur-md rounded-full px-6 py-3 w-fit border border-white/20">
            <a href="https://github.com/jims062702" target="_blank" rel="noopener noreferrer">
            <Github className="cursor-pointer hover:text-purple-400 transition" /></a>
            <a href="https://www.facebook.com/james.gasangii.3" target="_blank" rel="noopener noreferrer">
            <Facebook className="cursor-pointer hover:text-purple-400 transition" /></a>
            <a href="https://www.instagram.com/itsme.jamesss_/" target="_blank" rel="noopener noreferrer">
            <Instagram className="cursor-pointer hover:text-purple-400 transition" /></a>
            <a href="gasang143x@gmail.com" target="_blank" rel="noopener noreferrer"><Mail className="cursor-pointer hover:text-purple-400 transition" /></a>
          </div>

          {/* Download Resume Button */}
          <button className="mt-6 font-mono bg-black border border-white/20 px-6 py-3 rounded-full hover:bg-purple-600 transition duration-300 flex items-center gap-2">
  <Download size={18} />
  Download Resume
</button>
</div>

        </div>

        {/* RIGHT SIDE */}
        <div>

          {/* Description Card */}
          <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-8 shadow-xl hover:shadow-purple-500/20 transition duration-500">
            <p className="text-gray-300 leading-8">
              I'm currently a BSIT student at Tagoloan Community College, 3rd year,
              with a passion for building web and app systems to improve my skills.
              I'm looking forward to enhancing my knowledge about coding. I'm from
              Balingasag, Misamis Oriental and 23 years old. When I'm not coding,
              you can catch me playing basketball, watching movies or documentaries,
              gaming (Dota 2, Valorant, Mobile Legends), or singing – even if the
              notes don't always cooperate.
            </p>

            <div className="flex items-center gap-2 mt-12 text-purple-400">
              <MapPin size={18} />
              <span className="text-gray-300">
                Based in Balingasag, Philippines 9005
              </span>
            </div>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-2 gap-6 mt-8">

            <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-6 shadow-lg flex items-center gap-4 hover:-translate-y-1 transition duration-300">
              <div className="bg-purple-500/20 p-4 rounded-xl">
                <Briefcase className="text-purple-400" />
              </div>
              <div>
                <h3 className="text-3xl font-bold text-purple-400">3+</h3>
                <p className="text-gray-400 text-sm tracking-wider">
                  YEARS EXPERIENCE
                </p>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-6 shadow-lg flex items-center gap-4 hover:-translate-y-1 transition duration-300">
              <div className="bg-purple-500/20 p-4 rounded-xl">
                <Code2 className="text-purple-400" />
              </div>
              <div>
                <h3 className="text-3xl font-bold text-purple-400">6+</h3>
                <p className="text-gray-400 text-sm tracking-wider">
                  PROJECTS BUILT
                </p>
              </div>
            </div>

          </div>

        </div>
      </div>

      {/* Closing Tag */}
      
        <p className="text-xl font-mono mt-5">
  <span className="text-pink-400">&lt;</span>
  <span className="text-pink-400">/</span>
  <span className="text-purple-400">section</span>
  <span className="text-pink-400">&gt;</span>
</p>
      

    </section>
  )
}