"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const projects = [
  {
    title: "TaskFlow",
    description:
      "A real-time project management platform with drag-and-drop boards, team collaboration, and smart deadline tracking. Built for remote teams who value simplicity.",
    tech: ["Next.js", "TypeScript", "MongoDB", "Tailwind CSS"],
    github: "https://github.com",
    live: "https://example.com",
    accent: "border-teal",
    accentBg: "bg-teal/5",
    number: "01",
  },
  {
    title: "ShopMobile",
    description:
      "Cross-platform e-commerce mobile app with seamless payment integration, push notifications, and offline-first architecture for unreliable networks.",
    tech: ["React Native", "Expo", "Node.js", "Express"],
    github: "https://github.com",
    live: "https://example.com",
    accent: "border-coral",
    accentBg: "bg-coral/5",
    number: "02",
  },
  {
    title: "DevDash",
    description:
      "Developer analytics dashboard aggregating GitHub, Jira, and CI/CD data into a single, actionable overview. Features real-time updates and custom widgets.",
    tech: ["Vue.js", "Nuxt.js", "TypeScript", "Tailwind CSS"],
    github: "https://github.com",
    live: "https://example.com",
    accent: "border-electric",
    accentBg: "bg-electric/5",
    number: "03",
  },
  {
    title: "ContentAPI",
    description:
      "Headless CMS with a developer-friendly REST and GraphQL API, built-in image optimization, and webhook integrations for modern JAMstack workflows.",
    tech: ["Node.js", "Express", "MongoDB", "TypeScript"],
    github: "https://github.com",
    live: "https://example.com",
    accent: "border-emerald",
    accentBg: "bg-emerald/5",
    number: "04",
  },
];

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-28 relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6"
        >
          <div>
            <span className="text-sm font-mono text-teal tracking-wider uppercase">
              03 / Projects
            </span>
            <h2 className="font-[family-name:var(--font-space-grotesk)] text-4xl lg:text-5xl font-bold mt-4">
              Selected work<span className="text-teal">.</span>
            </h2>
            <div className="section-separator mt-6" />
          </div>
          <p className="text-muted max-w-md">
            A curated collection of projects that showcase my approach to
            solving real problems with clean code.
          </p>
        </motion.div>

        {/* Alternating project cards */}
        <div className="space-y-12">
          {projects.map((project, i) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.15 * i }}
              whileHover={{ y: -4 }}
              className={`group relative border ${project.accent} rounded-2xl p-8 lg:p-10 ${project.accentBg} transition-shadow hover:shadow-xl`}
            >
              <div
                className={`grid lg:grid-cols-12 gap-8 items-start ${
                  i % 2 === 1 ? "lg:direction-rtl" : ""
                }`}
              >
                {/* Number */}
                <div
                  className={`lg:col-span-2 ${
                    i % 2 === 1 ? "lg:order-last lg:text-right" : ""
                  }`}
                >
                  <span className="font-[family-name:var(--font-space-grotesk)] text-6xl font-bold text-border/60 group-hover:text-border transition-colors">
                    {project.number}
                  </span>
                </div>

                {/* Content */}
                <div
                  className={`lg:col-span-10 space-y-5 ${
                    i % 2 === 1 ? "lg:order-first" : ""
                  }`}
                >
                  <h3 className="font-[family-name:var(--font-space-grotesk)] text-2xl lg:text-3xl font-bold">
                    {project.title}
                  </h3>
                  <p className="text-muted leading-relaxed max-w-2xl">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="text-xs font-mono px-3 py-1 bg-surface border border-border rounded-full"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-4 pt-2">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm text-muted hover:text-foreground transition-colors link-underline"
                    >
                      <svg
                        className="w-4 h-4"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                      </svg>
                      Source
                    </a>
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm text-muted hover:text-foreground transition-colors link-underline"
                    >
                      <svg
                        className="w-4 h-4"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3" />
                      </svg>
                      Live Demo
                    </a>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
