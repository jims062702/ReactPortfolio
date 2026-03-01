import { useState } from "react"
import DotPattern from "@/components/ui/dot-pattern"

import Home from "@/sections/Home"
import About from "@/sections/About"
import Expertise from "@/sections/Expertise"
import Work from "@/sections/Work"
import Projects from "@/sections/Projects"
import Contact from "@/sections/Contact"

export default function App() {
  const [active, setActive] = useState("home")

  const navItems = [
    { id: "home", label: "01 // home.tsx" },
    { id: "about", label: "02 // about.tsx" },
    { id: "expertise", label: "03 // expertise.tsx" },
    { id: "work", label: "04 // work.tsx" },
    { id: "projects", label: "05 // projects.tsx" },
    { id: "contact", label: "06 // contact.tsx" },
  ]

  const scrollToSection = (id: string) => {
    setActive(id)
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <div className="relative min-h-screen bg-black text-white">

      {/* Animated Background */}
      <DotPattern
        className="fixed inset-0 z-0 opacity-50 text-cyan-400 pointer-events-none"
        width={32}
        height={32}
        cx={1}
        cy={1}
        cr={1}
      />

      {/* Header */}
      <header className="fixed top-0 left-0 w-full backdrop-blur-md bg-black/40 border-b border-gray-800 z-50">
        <div className="flex items-center justify-between px-10 py-4">

          <div className="text-purple-400 font-semibold text-lg">
            &lt;james.dev /&gt;
          </div>

          <nav className="hidden lg:flex gap-8 text-sm text-gray-400">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`relative transition ${
                  active === item.id
                    ? "text-white font-medium"
                    : "hover:text-white"
                }`}
              >
                {item.label}
                {active === item.id && (
                  <span className="absolute left-0 -bottom-2 w-full h-[2px] bg-purple-500" />
                )}
              </button>
            ))}
          </nav>

          <button className="text-yellow-400">☀️</button>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative z-10 pt-24 space-y-40">
        <Home />
        <About />
        <Expertise />
        <Work />
        <Projects />
        <Contact />
      </main>

      <footer className="relative z-10 py-10 text-center text-gray-500 border-t border-gray-800">
        © {new Date().getFullYear()} James Gasang
      </footer>

    </div>
  )
}