import { useEffect, useState } from "react"
import { Menu, X} from "lucide-react"

import DotPattern from "@/components/ui/dot-pattern"

import Home from "@/sections/Home"
import About from "@/sections/About"
import Expertise from "@/sections/Expertise"
import Work from "@/sections/Work"
import Projects from "@/sections/Projects"
import Contact from "@/sections/Contact"

export default function App() {
  const [scrollProgress, setScrollProgress] = useState(0)
const [showScrollTop, setShowScrollTop] = useState(false)
  const [active, setActive] = useState("home")
  const [menuOpen, setMenuOpen] = useState(false)
  const [dark, setDark] = useState(true)

  const navItems = [
    { id: "home", label: "01 // home.tsx" },
    { id: "about", label: "02 // about.tsx" },
    { id: "expertise", label: "03 // expertise.tsx" },
    { id: "work", label: "04 // work.tsx" },
    { id: "projects", label: "05 // projects.tsx" },
    { id: "contact", label: "06 // contact.tsx" },
  ]
  useEffect(() => {
  const handleScroll = () => {
    const scrollTop = window.scrollY
    const docHeight =
      document.documentElement.scrollHeight - window.innerHeight

    const progress = (scrollTop / docHeight) * 100
    setScrollProgress(progress)

    const aboutSection = document.getElementById("about")
    if (aboutSection) {
      const aboutTop = aboutSection.offsetTop
      setShowScrollTop(scrollTop >= aboutTop - 100)
    }
  }

  window.addEventListener("scroll", handleScroll)
  return () => window.removeEventListener("scroll", handleScroll)
}, [])

  // 🔥 ACCURATE SCROLL SPY
  useEffect(() => {
    const sections = document.querySelectorAll("section")

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id)
            window.history.replaceState(null, "", `#${entry.target.id}`)
          }
        })
      },
      {
        rootMargin: "-40% 0px -40% 0px",
        threshold: 0,
      }
    )

    sections.forEach((section) => observer.observe(section))

    return () => {
      sections.forEach((section) => observer.unobserve(section))
    }
  }, [])

  // 🔥 HANDLE REFRESH WITH HASH
  useEffect(() => {
    const hash = window.location.hash.replace("#", "")
    if (hash) {
      setActive(hash)
      document.getElementById(hash)?.scrollIntoView()
    }
  }, [])

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
    setMenuOpen(false)
  }

  const toggleTheme = () => {
    setDark(!dark)
    document.documentElement.classList.toggle("dark")
  }

  return (
    <div className={`relative min-h-screen ${dark ? "bg-black text-white" : "bg-white text-black"}`}>

      {/* Animated Background */}
      <DotPattern
        className="fixed inset-0 z-0 opacity-40 pointer-events-none"
      />

      {/* HEADER */}
      <header className="fixed top-0 left-0 w-full backdrop-blur-md bg-black/40 border-b border-gray-800 z-50">
        <div className="flex items-center justify-between px-6 md:px-10 py-4">

          <div className="text-purple-400 font-semibold text-lg">
            &lt;james.dev /&gt;
          </div>

          {/* DESKTOP NAV */}
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

          {/* RIGHT SIDE */}
          <div className="flex items-center gap-4">

            

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>

          </div>
        </div>

        {/* MOBILE MENU */}
        {menuOpen && (
          <div className="lg:hidden flex flex-col gap-6 px-6 pb-6 bg-black/90 backdrop-blur-md">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`text-left ${
                  active === item.id ? "text-purple-400" : "text-gray-400"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        )}
      </header>

      {/* MAIN CONTENT */}
      <main className="relative z-10 pt-24 space-y-32 md:space-y-40 px-4 md:px-0">
        <Home />
        <About />
        <Expertise />
        <Work />
        <Projects />
        <Contact />
      </main>
      {/* Scroll To Top Button */}
<div
  className={`fixed bottom-8 right-8 z-50 transition-all duration-500 ${
    showScrollTop
      ? "opacity-100 scale-100"
      : "opacity-0 scale-75 pointer-events-none"
  }`}
>
  <button
    onClick={() =>
      window.scrollTo({ top: 0, behavior: "smooth" })
    }
    className="relative w-14 h-14 rounded-full bg-black border border-white/20 flex items-center justify-center hover:scale-110 transition"
  >
    {/* SVG Progress Ring */}
    <svg
      className="absolute inset-0 rotate-[-90deg]"
      width="56"
      height="56"
    >
      <circle
        cx="28"
        cy="28"
        r="24"
        stroke="rgba(255,255,255,0.1)"
        strokeWidth="4"
        fill="transparent"
      />
      <circle
        cx="28"
        cy="28"
        r="24"
        stroke="rgb(168,85,247)"
        strokeWidth="4"
        fill="transparent"
        strokeDasharray={2 * Math.PI * 24}
        strokeDashoffset={
          2 * Math.PI * 24 -
          (scrollProgress / 100) * (2 * Math.PI * 24)
        }
        strokeLinecap="round"
        className="transition-all duration-300"
      />
    </svg>

    {/* Arrow */}
    <span className="text-purple-400 text-lg z-10">
      ↑
    </span>
  </button>
</div>

      {/* FOOTER */}
      <footer className="relative z-10 py-10 text-center text-gray-500 border-t border-gray-800 mt-20">
        © {new Date().getFullYear()} James Gasang
      </footer>
    </div>
    
  )
}