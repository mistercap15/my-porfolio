"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const timeline = [
  {
    year: "2024 — Present",
    role: "Senior Full-Stack Developer",
    company: "Freelance / Contract",
    description:
      "Building custom web applications and mobile solutions for startups and agencies. Focus on Next.js, React Native, and scalable Node.js backends.",
    tech: ["Next.js", "React Native", "TypeScript", "MongoDB"],
    accent: "bg-teal",
  },
  {
    year: "2022 — 2024",
    role: "Full-Stack Developer",
    company: "Tech Startup",
    description:
      "Led frontend architecture migration to Next.js. Developed real-time features and RESTful APIs serving 50K+ monthly users.",
    tech: ["React", "Node.js", "Express", "MongoDB"],
    accent: "bg-coral",
  },
  {
    year: "2021 — 2022",
    role: "Frontend Developer",
    company: "Digital Agency",
    description:
      "Built responsive web applications for diverse clients. Introduced component library and design system that reduced development time by 40%.",
    tech: ["Vue.js", "Nuxt.js", "Tailwind CSS"],
    accent: "bg-electric",
  },
  {
    year: "2019 — 2021",
    role: "Junior Developer",
    company: "Software Company",
    description:
      "Started professional journey building internal tools and customer-facing features. Learned the fundamentals of production-grade code.",
    tech: ["React", "Node.js", "MongoDB"],
    accent: "bg-emerald",
  },
];

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="py-28 bg-surface relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="text-sm font-mono text-teal tracking-wider uppercase">
            04 / Experience
          </span>
          <h2 className="font-[family-name:var(--font-space-grotesk)] text-4xl lg:text-5xl font-bold mt-4">
            My journey<span className="text-teal">.</span>
          </h2>
          <div className="section-separator mt-6" />
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 lg:left-1/2 top-0 bottom-0 w-px bg-border lg:-translate-x-px" />

          <div className="space-y-12">
            {timeline.map((item, i) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.15 * i }}
                className={`relative grid lg:grid-cols-2 gap-8 ${
                  i % 2 === 0 ? "" : "lg:direction-rtl"
                }`}
              >
                {/* Dot on timeline */}
                <div className="absolute left-4 lg:left-1/2 top-2 w-3 h-3 -translate-x-1.5 lg:-translate-x-1.5">
                  <span
                    className={`block w-3 h-3 rounded-full ${item.accent} ring-4 ring-surface`}
                  />
                </div>

                {/* Content */}
                <div
                  className={`pl-12 lg:pl-0 ${
                    i % 2 === 0
                      ? "lg:pr-16 lg:text-right"
                      : "lg:pl-16 lg:col-start-2 lg:text-left"
                  }`}
                >
                  <span className="text-xs font-mono text-teal">
                    {item.year}
                  </span>
                  <h3 className="font-[family-name:var(--font-space-grotesk)] text-xl font-bold mt-1">
                    {item.role}
                  </h3>
                  <p className="text-muted text-sm mt-0.5">{item.company}</p>
                  <p className="text-muted mt-3 leading-relaxed text-sm">
                    {item.description}
                  </p>
                  <div
                    className={`flex flex-wrap gap-2 mt-3 ${
                      i % 2 === 0 ? "lg:justify-end" : ""
                    }`}
                  >
                    {item.tech.map((t) => (
                      <span
                        key={t}
                        className="text-xs font-mono px-2 py-0.5 bg-background border border-border rounded"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
