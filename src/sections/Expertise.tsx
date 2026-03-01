import { useState } from "react"
import { motion } from "framer-motion"
import CountUp from "react-countup"

import { Code2, Server, Database, PenTool, Brush, AppWindow } from "lucide-react"

import {
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaFigma,
  
} from "react-icons/fa"

import {
  SiTypescript,
  SiTailwindcss,
  SiJavascript,
  SiNextdotjs,
  SiLaravel,
  SiExpress,
  SiMysql,
  SiMongodb,
  SiFirebase,
  SiDocker,
  
} from "react-icons/si"

export default function Expertise() {
  const [activeTab, setActiveTab] = useState("frontend")

  const skills = {
    frontend: [
      { name: "React", percent: 92, icon: FaReact, color: "text-cyan-400" },
      { name: "Next.js", percent: 88, icon: SiNextdotjs, color: "text-white" },
      { name: "TypeScript", percent: 90, icon: SiTypescript, color: "text-blue-500" },
      { name: "Tailwind CSS", percent: 90, icon: SiTailwindcss, color: "text-sky-400" },
      { name: "JavaScript", percent: 93, icon: SiJavascript, color: "text-yellow-400" },
    ],
    backend: [
      { name: "Node.js", percent: 85, icon: FaNodeJs, color: "text-green-500" },
      { name: "Laravel", percent: 90, icon: SiLaravel, color: "text-red-500" },
      { name: "Express.js", percent: 82, icon: SiExpress, color: "text-gray-300" },
    ],
    database: [
      { name: "MySQL", percent: 90, icon: SiMysql, color: "text-blue-400" },
      { name: "MongoDB", percent: 80, icon: SiMongodb, color: "text-green-400" },
      { name: "Firebase", percent: 85, icon: SiFirebase, color: "text-orange-400" },
    ],
    devops: [
      { name: "Git", percent: 92, icon: FaGitAlt, color: "text-orange-500" },
      { name: "Docker", percent: 75, icon: SiDocker, color: "text-blue-400" },
    ],
    design: [
      { name: "Figma", percent: 92, icon: FaFigma, color: "text-orange-500" },
      { name: "UI/UX Design", percent: 75, icon: AppWindow, color: "text-blue-400" },
    ],
  }

  return (
    <section id="expertise" className="min-h-screen px-20 py-20 text-white">

      {/* Code Style Heading */}
      <p className="text-xl font-mono">
  <span className="text-pink-400">&lt;</span>
  <span className="text-purple-400">section</span>{" "}
  <span className="text-green-400">id</span>
  <span className="text-white">=</span>
  <span className="text-yellow-300">"expertise"</span>
  <span className="text-pink-400">&gt;</span>
</p>

      <h2 className="text-7xl font-bold mt-4">Expertise</h2>
      <p className="text-gray-400 font-mono mt-2">
        // technologies & tools I work with
      </p>

      {/* Glass Container */}
      <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl shadow-2xl mt-12">

        {/* Tabs */}
        <div className="flex gap-10 px-8 py-6 border-b border-white/10 text-sm font-mono">

          {[
            { key: "frontend", label: "Frontend", icon: Code2 },
            { key: "backend", label: "Backend", icon: Server },
            { key: "database", label: "Database", icon: Database },
            { key: "devops", label: "DevOps", icon: PenTool },
            { key: "design", label: "Design", icon: Brush },
          ].map((tab) => {
            const Icon = tab.icon
            const isActive = activeTab === tab.key

            return (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`relative flex items-center gap-2 transition ${
                  isActive
                    ? "text-white"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                <Icon size={16} />
                {tab.label}

                {isActive && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute -bottom-2 left-0 w-full h-[2px] bg-purple-500 shadow-[0_0_10px_rgba(168,85,247,0.8)]"
                  />
                )}
              </button>
            )
          })}
        </div>

        {/* Skills Grid */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
          className="p-10 grid grid-cols-2 gap-8"
        >
          {skills[activeTab as keyof typeof skills].map((skill, index) => {
            const Icon = skill.icon

            return (
              <motion.div
                key={index}
                whileHover={{ scale: 1.03 }}
                className="bg-white/5 border border-white/10 rounded-2xl p-6"
              >
                <div className="flex justify-between items-center mb-4">

                  {/* Icon + Name */}
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 flex items-center justify-center bg-purple-500/20 rounded-lg">
                      <Icon size={20} className={skill.color} />
                    </div>
                    <h3 className="text-gray-300 font-semibold">
                      {skill.name}
                    </h3>
                  </div>

                  {/* Animated Counter */}
                  <span className="text-gray-400 text-sm">
                    <CountUp end={skill.percent} duration={1.5} />%
                  </span>
                </div>

                {/* Progress Bar */}
                <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${skill.percent}%` }}
                    transition={{ duration: 1.5 }}
                    className="h-full bg-purple-500 rounded-full shadow-[0_0_10px_rgba(168,85,247,0.8)]"
                  />
                </div>
              </motion.div>
            )
          })}
        </motion.div>

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