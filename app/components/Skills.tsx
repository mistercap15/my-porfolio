"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const skills = [
  { name: "React.js", level: 95, category: "frontend", color: "bg-blue" },
  { name: "Next.js", level: 88, category: "frontend", color: "bg-foreground" },
  { name: "Vue.js", level: 85, category: "frontend", color: "bg-green" },
  { name: "Nuxt.js", level: 82, category: "frontend", color: "bg-green" },
  { name: "TypeScript", level: 90, category: "language", color: "bg-blue" },
  { name: "JavaScript", level: 93, category: "language", color: "bg-yellow" },
  { name: "React Native", level: 88, category: "mobile", color: "bg-cyan" },
  { name: "Node.js", level: 78, category: "backend", color: "bg-green" },
  { name: "Redux Toolkit", level: 87, category: "state", color: "bg-purple" },
  { name: "MongoDB", level: 75, category: "database", color: "bg-green" },
  { name: "Tailwind CSS", level: 92, category: "styling", color: "bg-cyan" },
  { name: "Bootstrap", level: 88, category: "styling", color: "bg-purple" },
  { name: "HTML/CSS", level: 95, category: "frontend", color: "bg-orange" },
];

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-20 sm:py-24 lg:py-28 relative bg-surface">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-green/20 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <span className="text-xs text-comment">{"// section.02"}</span>
          <h2 className="font-[family-name:var(--font-space-grotesk)] text-3xl sm:text-4xl lg:text-5xl font-bold mt-2">
            <span className="text-yellow">skills</span>
            <span className="text-foreground">()</span>
            <span className="cursor-blink text-green ml-1">_</span>
          </h2>
          <div className="section-separator mt-4" />
        </motion.div>

        {/* npm install simulation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="bg-background border border-border rounded-lg overflow-hidden mb-10"
        >
          <div className="flex items-center gap-2 px-4 py-2 bg-panel border-b border-border">
            <div className="flex gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-red/70" />
              <span className="w-2.5 h-2.5 rounded-full bg-yellow/70" />
              <span className="w-2.5 h-2.5 rounded-full bg-green/70" />
            </div>
            <span className="text-xs text-comment ml-2">
              terminal — npm install
            </span>
          </div>
          <div className="p-5 text-sm">
            <p className="text-green mb-1">
              $ npm install khilan-patel-skills
            </p>
            <p className="text-comment text-xs mb-3">
              added {skills.length} packages in 3.2s
            </p>
            <p className="text-muted text-xs">
              {skills.length} packages installed successfully. 0
              vulnerabilities.
            </p>
          </div>
        </motion.div>

        {/* Skill dependency tree */}
        <div className="grid md:grid-cols-2 gap-x-8 gap-y-1">
          {skills.map((skill, i) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, x: -10 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.3, delay: 0.15 + i * 0.04 }}
              className="group py-3 border-b border-border/50"
            >
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <span className="text-green text-xs">+--</span>
                  <span className="text-sm text-foreground group-hover:text-green transition-colors">
                    {skill.name}
                  </span>
                  <span className="text-xs px-1.5 py-0.5 bg-panel border border-border rounded-sm text-comment">
                    {skill.category}
                  </span>
                </div>
                <span className="text-xs text-comment font-mono">
                  v{skill.level / 10}.{skill.level % 10}.0
                </span>
              </div>

              {/* Progress bar */}
              <div className="h-1.5 bg-panel rounded-full overflow-hidden ml-7">
                <motion.div
                  initial={{ width: 0 }}
                  animate={isInView ? { width: `${skill.level}%` } : {}}
                  transition={{
                    duration: 1,
                    delay: 0.3 + i * 0.05,
                    ease: "easeOut",
                  }}
                  className={`h-full ${skill.color} rounded-full`}
                  style={{ opacity: 0.8 }}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom status */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 1.2 }}
          className="mt-8 text-xs text-comment text-center"
        >
          {"// "}All dependencies resolved. Build successful.
        </motion.div>
      </div>
    </section>
  );
}
