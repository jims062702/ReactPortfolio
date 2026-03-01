import { useEffect, useRef, useState } from "react"

export default function Work() {
  const timelineRef = useRef<HTMLDivElement>(null)
  const cardRefs = useRef<HTMLDivElement[]>([])
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const triggerPoint = window.innerHeight / 2

      cardRefs.current.forEach((card, index) => {
        const rect = card.getBoundingClientRect()

        if (rect.top <= triggerPoint && rect.bottom >= triggerPoint) {
          setActiveIndex(index)
        }
      })
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <section id="work" className="px-20 py-20 text-white">

      <p className="text-sm font-mono text-purple-400">
        {"<section id=\"work\">"}
      </p>

      <h2 className="text-6xl font-bold mt-4">Work</h2>
      <p className="text-gray-400 font-mono mt-2">
        // my professional journey
      </p>

      {/* Timeline */}
      <div ref={timelineRef} className="relative mt-24">

        {/* Base Line */}
        <div className="absolute left-1/2 top-0 -translate-x-1/2 w-[2px] h-full bg-white/10" />

        {/* Moving Circle */}
        {cardRefs.current[activeIndex] && (
          <div
            className="absolute left-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-purple-500 shadow-[0_0_15px_rgba(168,85,247,0.9)] transition-all duration-500"
            style={{
              top:
                cardRefs.current[activeIndex].offsetTop +
                cardRefs.current[activeIndex].offsetHeight / 2 -
                12,
            }}
          />
        )}

        {/* Cards */}
        <div className="space-y-40">

          {/* Card 1 */}
          <div
            ref={(el) => {
  if (el) cardRefs.current[0] = el
}}
            className="w-1/2 pr-12"
          >
            <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-8">
              <h3 className="text-xl font-semibold mb-2">
                Software Engineer
              </h3>
              <p className="text-gray-400 mb-4">
                Jul 2024 – Present
              </p>
              <p className="text-gray-300 leading-7">
                Developed full-stack web systems including inventory,
                payroll and service management platforms.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div
            ref={(el) => {
  if (el) cardRefs.current[1] = el
}}
            className="w-1/2 ml-auto pl-12"
          >
            <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-8">
              <h3 className="text-xl font-semibold mb-2">
                Freelance Developer
              </h3>
              <p className="text-gray-400 mb-4">
                2022 – 2024
              </p>
              <p className="text-gray-300 leading-7">
                Built modern full-stack applications for startups and small businesses.
              </p>
            </div>
          </div>

        </div>
      </div>

      <p className="text-sm font-mono text-purple-400 mt-20">
        {"</section>"}
      </p>
    </section>
  )
}