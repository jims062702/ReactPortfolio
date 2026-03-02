import { useEffect, useRef, useState } from "react"

export default function Work() {
  const cardRefs = useRef<HTMLDivElement[]>([])
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const triggerPoint = window.innerHeight / 2

      cardRefs.current.forEach((card, index) => {
        if (!card) return

        const rect = card.getBoundingClientRect()

        if (rect.top <= triggerPoint && rect.bottom >= triggerPoint) {
          setActiveIndex(index)
        }
      })
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const experiences = [
    {
      title: "Software Engineer",
      date: "Jul 2024 – Present",
      description:
        "Developed full-stack web systems including inventory, payroll and service management platforms.",
    },
    {
      title: "Freelance Developer",
      date: "2022 – 2024",
      description:
        "Built modern full-stack applications for startups and small businesses.",
    },
  ]

  return (
    <section
      id="work"
      className="min-h-screen px-6 md:px-12 lg:px-20 py-20 text-white"
    >

      <p className="text-base md:text-lg font-mono text-purple-400">
        {"<section id=\"work\">"}
      </p>

      <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mt-4">
        Work
      </h2>

      <p className="text-gray-400 font-mono mt-2 text-sm md:text-base">
        // my professional journey
      </p>

      {/* Timeline Container */}
      <div className="relative mt-20">

  {/* MOBILE LINE (perfectly aligned) */}
  <div className="absolute left-6 top-0 bottom-0 w-[2px] bg-white/10 lg:hidden" />

  {/* DESKTOP CENTER LINE */}
  <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 -translate-x-1/2 w-[2px] bg-white/10" />

  {/* Moving Circle */}
  {cardRefs.current[activeIndex] && (
    <div
      className="absolute w-5 h-5 rounded-full bg-purple-500 shadow-[0_0_15px_rgba(168,85,247,0.9)] transition-all duration-500"
      style={{
        top:
          cardRefs.current[activeIndex].offsetTop +
          cardRefs.current[activeIndex].offsetHeight / 2 -
          10,
        left:
          window.innerWidth >= 1024
            ? "50%"
            : "24px",
        transform:
          window.innerWidth >= 1024
            ? "translateX(-50%)"
            : "translateX(-50%)",
      }}
    />
  )}

  <div className="space-y-16 lg:space-y-40">

    {experiences.map((exp, index) => (
      <div
        key={index}
        ref={(el) => {
          if (el) cardRefs.current[index] = el
        }}
        className={`
          relative
          pl-16
          lg:pl-0
          lg:w-1/2
          ${
            index % 2 === 0
              ? "lg:pr-12"
              : "lg:ml-auto lg:pl-12"
          }
        `}
      >
        <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-6 md:p-8 hover:shadow-purple-500/20 transition duration-500">
          <h3 className="text-lg md:text-xl font-semibold mb-2">
            {exp.title}
          </h3>

          <p className="text-gray-400 mb-4 text-sm md:text-base">
            {exp.date}
          </p>

          <p className="text-gray-300 leading-6 md:leading-7 text-sm md:text-base">
            {exp.description}
          </p>
        </div>
      </div>
    ))}

  </div>
</div>

      <p className="text-base md:text-lg font-mono text-purple-400 mt-20">
        {"</section>"}
      </p>

    </section>
  )
}