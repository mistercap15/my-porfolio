"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const skills = [
  {
    name: "React",
    category: "Frontend",
    level: 95,
    accent: "bg-teal",
  },
  {
    name: "Next.js",
    category: "Frontend",
    level: 92,
    accent: "bg-foreground",
  },
  {
    name: "Vue.js",
    category: "Frontend",
    level: 85,
    accent: "bg-emerald",
  },
  {
    name: "Nuxt.js",
    category: "Frontend",
    level: 80,
    accent: "bg-emerald",
  },
  {
    name: "TypeScript",
    category: "Language",
    level: 90,
    accent: "bg-electric",
  },
  {
    name: "Tailwind CSS",
    category: "Styling",
    level: 95,
    accent: "bg-teal",
  },
  {
    name: "Node.js",
    category: "Backend",
    level: 88,
    accent: "bg-emerald",
  },
  {
    name: "Express",
    category: "Backend",
    level: 85,
    accent: "bg-coral",
  },
  {
    name: "React Native",
    category: "Mobile",
    level: 82,
    accent: "bg-electric",
  },
  {
    name: "Expo",
    category: "Mobile",
    level: 80,
    accent: "bg-electric",
  },
  {
    name: "MongoDB",
    category: "Database",
    level: 85,
    accent: "bg-emerald",
  },
];

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-28 bg-surface relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="text-sm font-mono text-teal tracking-wider uppercase">
            02 / Skills
          </span>
          <h2 className="font-[family-name:var(--font-space-grotesk)] text-4xl lg:text-5xl font-bold mt-4">
            Tech I work with<span className="text-teal">.</span>
          </h2>
          <div className="section-separator mt-6" />
        </motion.div>

        {/* Skills as staggered horizontal bars with creative layout */}
        <div className="grid lg:grid-cols-2 gap-x-16 gap-y-6">
          {skills.map((skill, i) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.06 }}
              className="group"
            >
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-3">
                  <motion.span
                    whileHover={{ scale: 1.1 }}
                    className={`w-2.5 h-2.5 rounded-full ${skill.accent}`}
                  />
                  <span className="font-[family-name:var(--font-space-grotesk)] font-semibold text-base group-hover:text-teal transition-colors">
                    {skill.name}
                  </span>
                </div>
                <span className="text-xs font-mono text-muted px-2 py-0.5 bg-background rounded">
                  {skill.category}
                </span>
              </div>
              <div className="h-1.5 bg-border rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={isInView ? { width: `${skill.level}%` } : {}}
                  transition={{
                    duration: 1,
                    delay: 0.3 + i * 0.06,
                    ease: "easeOut",
                  }}
                  className={`h-full rounded-full ${skill.accent}`}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
