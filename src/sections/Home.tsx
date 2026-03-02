import { Badge } from "@/components/ui/badge"
import { useEffect, useRef, useState } from "react"

export default function Home() {
  const texts = [
    "Building modern web experiences with clean code and thoughtful design.",
    "Pag meron akung mood gumawa ng mga Systems!",
    "Huwag susuko sa Syntax Error. Parte 'yan ng pag-build ng Success.",
  ]

  const [textIndex, setTextIndex] = useState(0)
  const [displayedText, setDisplayedText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)

  const cardRef = useRef<HTMLDivElement>(null)

  // Typing Effect
  useEffect(() => {
    const currentText = texts[textIndex]
    const typingSpeed = isDeleting ? 20 : 40

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        const newText = currentText.substring(0, displayedText.length + 1)
        setDisplayedText(newText)

        if (newText === currentText) {
          setTimeout(() => setIsDeleting(true), 1200)
        }
      } else {
        const newText = currentText.substring(0, displayedText.length - 1)
        setDisplayedText(newText)

        if (newText === "") {
          setIsDeleting(false)
          setTextIndex((prev) => (prev + 1) % texts.length)
        }
      }
    }, typingSpeed)

    return () => clearTimeout(timeout)
  }, [displayedText, isDeleting, textIndex])

  // Floating Animation (Desktop Only)
  useEffect(() => {
    if (window.innerWidth < 1024) return

    const card = cardRef.current
    if (!card) return

    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window
      const x = (e.clientX / innerWidth - 0.5) * 20
      const y = (e.clientY / innerHeight - 0.5) * 20

      card.style.transform = `rotateX(${-y}deg) rotateY(${x}deg)`
    }

    window.addEventListener("mousemove", handleMouseMove)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  const formatText = (text: string) => {
    return text
      .replace(
        /\bmood\b/g,
        `<span class="px-2 py-1 bg-purple-500/20 text-purple-400 rounded-md border border-purple-500">mood</span>`
      )
      .replace(
        /\bSystems\b/g,
        `<span class="px-2 py-1 bg-cyan-500/20 text-cyan-300 rounded-md border border-cyan-500">Systems</span>`
      )
      .replace(
        /\bSyntax Error\b/g,
        `<span class="px-2 py-1 bg-red-500/20 text-red-400 rounded-md border border-red-500">Syntax Error</span>`
      )
      .replace(
        /\bSuccess\b/g,
        `<span class="px-2 py-1 bg-green-500/20 text-green-400 rounded-md border border-green-500">Success</span>`
      )
  }

  return (
    <section
      id="home"
      className="min-h-screen flex items-center px-6 md:px-12 lg:px-20"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center w-full">

        {/* LEFT SIDE */}
        <div>

          <p className="text-sm md:text-base font-mono mb-10">
            <span className="text-pink-400">&lt;!</span>
            <span className="text-green-400">DOCTYPE</span>
            <span className="text-white"> </span>
            <span className="text-yellow-300">html</span>
            <span className="text-pink-400">&gt;</span>
          </p>

          <Badge className="mb-6 bg-purple-500/20 text-purple-300 border-purple-500 font-mono text-sm md:text-base">
            FULL-STACK WEB & APP DEVELOPER
          </Badge>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-tight tracking-tight">
            GUMAGAWA NG CAPSTONE PROJECTS.
          </h1>

          <div className="mt-6 text-base sm:text-lg md:text-xl min-h-[60px] max-w-full">
            <p
              className="text-cyan-400 inline"
              dangerouslySetInnerHTML={{
                __html: formatText(displayedText),
              }}
            />
            <span className="animate-pulse text-white ml-1">|</span>
          </div>

        </div>

        {/* RIGHT SIDE */}
        <div className="flex justify-center lg:justify-end perspective-[1200px]">

          <div
            ref={cardRef}
            className="w-full max-w-[380px] md:max-w-[420px] bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl shadow-2xl p-6 transition-transform duration-200 ease-out"
            style={{ transformStyle: "preserve-3d" }}
          >

            <div className="flex gap-2 mb-4">
              <span className="w-3 h-3 bg-red-500 rounded-full"></span>
              <span className="w-3 h-3 bg-yellow-400 rounded-full"></span>
              <span className="w-3 h-3 bg-green-500 rounded-full"></span>
            </div>

            <pre className="text-xs sm:text-sm font-mono leading-6 text-gray-200 overflow-x-auto">
              <span className="text-purple-400">const</span>{" "}
              <span className="text-cyan-400">dev</span> = {"{"}
              {"\n  "}
              <span className="text-green-400">name</span>:{" "}
              <span className="text-yellow-300">"James Gasang"</span>,
              {"\n  "}
              <span className="text-green-400">role</span>:{" "}
              <span className="text-yellow-300">"Full-Stack"</span>,
              {"\n  "}
              <span className="text-green-400">passionate</span>:{" "}
              <span className="text-purple-300">true</span>,
              {"\n  "}
              <span className="text-green-400">MilkTeaLover</span>:{" "}
              <span className="text-purple-300">true</span>,
              {"\n  "}
              <span className="text-green-400">IcedCoffeeLover</span>:{" "}
              <span className="text-purple-300">true</span>,
              {"\n  "}
              <span className="text-green-400">learning</span>:{" "}
              <span className="text-yellow-300">"Depende"</span>
              {"\n"}{"};"}
            </pre>

          </div>

        </div>

      </div>
    </section>
  )
}