import { Mail, Github, Linkedin, Send } from "lucide-react"

export default function Contact() {
  return (
    <section
      id="contact"
      className="min-h-screen px-6 md:px-12 lg:px-20 py-20 text-white"
    >

      {/* Code Style Heading */}
      <p className="text-base md:text-lg font-mono">
        <span className="text-pink-400">&lt;</span>
        <span className="text-purple-400">section</span>{" "}
        <span className="text-green-400">id</span>
        <span className="text-white">=</span>
        <span className="text-yellow-300">"contact"</span>
        <span className="text-pink-400">&gt;</span>
      </p>

      <div className="mt-4 mb-12 md:mb-16">
        <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold">
          Get in touch
        </h2>
        <p className="text-gray-400 font-mono mt-2 text-sm md:text-base">
          // have a project in mind? let's talk.
        </p>
      </div>

      {/* Responsive Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16">

        {/* LEFT SIDE - FORM */}
        <form className="space-y-6">

          {/* Name + Email */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
            <input
              type="text"
              placeholder="Name"
              className="bg-white/10 border border-white/20 rounded-xl px-4 py-3 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/30 transition text-sm md:text-base"
            />

            <input
              type="email"
              placeholder="Email"
              className="bg-white/10 border border-white/20 rounded-xl px-4 py-3 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/30 transition text-sm md:text-base"
            />
          </div>

          <input
            type="text"
            placeholder="Subject (optional)"
            className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/30 transition text-sm md:text-base"
          />

          <textarea
            placeholder="Message"
            rows={6}
            className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/30 transition resize-none text-sm md:text-base"
          />

          <button
            type="submit"
            className="flex items-center justify-center gap-2 bg-black border border-white/20 px-6 py-3 rounded-xl hover:bg-purple-600 transition duration-300 text-sm md:text-base"
          >
            <Send size={16} />
            Send message
          </button>

        </form>

        {/* RIGHT SIDE - CONTACT INFO */}
        <div className="space-y-6">

          <p className="text-gray-500 font-mono text-sm mb-4">
            // OR REACH ME DIRECTLY
          </p>

          <a
            href="mailto:your@email.com"
            className="flex items-center gap-4 bg-white/10 border border-white/20 rounded-xl px-4 md:px-6 py-4 hover:bg-purple-600/20 transition"
          >
            <Mail className="text-purple-400 shrink-0" />
            <div>
              <p className="text-xs text-gray-400">EMAIL</p>
              <p className="text-gray-200 text-sm md:text-base break-all">
                your@email.com
              </p>
            </div>
          </a>

          <a
            href="https://github.com/jims062702"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 bg-white/10 border border-white/20 rounded-xl px-4 md:px-6 py-4 hover:bg-purple-600/20 transition"
          >
            <Github className="text-purple-400 shrink-0" />
            <div>
              <p className="text-xs text-gray-400">GITHUB</p>
              <p className="text-gray-200 text-sm md:text-base break-all">
                github.com/jims062702
              </p>
            </div>
          </a>

          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 bg-white/10 border border-white/20 rounded-xl px-4 md:px-6 py-4 hover:bg-purple-600/20 transition"
          >
            <Linkedin className="text-purple-400 shrink-0" />
            <div>
              <p className="text-xs text-gray-400">LINKEDIN</p>
              <p className="text-gray-200 text-sm md:text-base break-all">
                linkedin.com/in/yourprofile
              </p>
            </div>
          </a>

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