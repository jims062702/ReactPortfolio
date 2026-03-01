export default function Projects() {
  return (
    <section id="projects" className="min-h-screen flex items-center px-20">
      <div>
        <h2 className="text-5xl font-bold mb-12 text-white">Projects</h2>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white/10 backdrop-blur-md border border-gray-700 rounded-xl p-8 hover:scale-105 transition">
            <h3 className="text-xl font-semibold mb-3 text-white">
              SmartEvent
            </h3>
            <p className="text-gray-400">
              LGU gymnasium reservation system.
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-md border border-gray-700 rounded-xl p-8 hover:scale-105 transition">
            <h3 className="text-xl font-semibold mb-3 text-white">
              ReklaBOT
            </h3>
            <p className="text-gray-400">
              AI-driven complaint reporting platform.
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-md border border-gray-700 rounded-xl p-8 hover:scale-105 transition">
            <h3 className="text-xl font-semibold mb-3 text-white">
              Barangay System
            </h3>
            <p className="text-gray-400">
              Web-based barangay management system.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}