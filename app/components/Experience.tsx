"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const commits = [
  {
    hash: "a3f8c2d",
    date: "Nov 2024 — Present",
    branch: "main",
    role: "Associate Consultant",
    company: "Infosys",
    message:
      "Building and maintaining enterprise-grade web applications for global clients using React.js. Collaborating with cross-functional teams to deliver scalable solutions with clean, modular code.",
    tech: ["React.js", "TypeScript", "Redux", "REST APIs"],
    color: "text-green",
    dotColor: "bg-green",
  },
  {
    hash: "b7e1d4a",
    date: "Feb 2024 — Sep 2024",
    branch: "feature/impero",
    role: "Software Engineer",
    company: "Impero IT Services",
    message:
      "Led development of multiple client projects spanning web and mobile. Built responsive UIs with React and Vue, delivered cross-platform apps with React Native, and integrated RESTful APIs for seamless data flow.",
    tech: ["React", "Vue.js", "React Native", "Node.js"],
    color: "text-blue",
    dotColor: "bg-blue",
  },
  {
    hash: "c9d3f5b",
    date: "Jul 2022 — Jan 2024",
    branch: "feature/itpath",
    role: "React JS Developer",
    company: "IT Path Solutions",
    message:
      "Developed and maintained web applications using React.js and Next.js. Implemented state management with Redux Toolkit and Context API, built reusable component libraries, and optimized application performance.",
    tech: ["React.js", "Next.js", "Redux Toolkit", "Tailwind CSS"],
    color: "text-cyan",
    dotColor: "bg-cyan",
  },
  {
    hash: "d1a2b3c",
    date: "2017 — 2022",
    branch: "origin/education",
    role: "B.E. Information Technology",
    company: "Gujarat Technological University",
    message:
      "Earned a Bachelor of Engineering in Information Technology. Built a strong foundation in computer science, data structures, algorithms, and software engineering principles.",
    tech: ["Computer Science", "Data Structures", "Algorithms"],
    color: "text-yellow",
    dotColor: "bg-yellow",
  },
];

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="py-28 relative bg-surface">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-green/20 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <span className="text-xs text-comment">{"// section.04"}</span>
          <h2 className="font-[family-name:var(--font-space-grotesk)] text-4xl lg:text-5xl font-bold mt-2">
            <span className="text-cyan">experience</span>
            <span className="text-foreground">()</span>
            <span className="cursor-blink text-green ml-1">_</span>
          </h2>
          <div className="section-separator mt-4" />
          <p className="text-sm text-comment mt-4">
            $ git log --oneline --graph
          </p>
        </motion.div>

        {/* Git log style */}
        <div className="space-y-1">
          {commits.map((commit, i) => (
            <motion.div
              key={commit.hash}
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.2 + i * 0.15 }}
              className="relative group"
            >
              {/* Git graph line */}
              <div className="flex gap-4">
                {/* Graph visualization */}
                <div className="flex flex-col items-center shrink-0 w-8">
                  <div
                    className={`w-3 h-3 rounded-full ${commit.dotColor} ring-2 ring-background z-10 group-hover:scale-125 transition-transform`}
                  />
                  {i < commits.length - 1 && (
                    <div className="w-px flex-1 bg-border" />
                  )}
                </div>

                {/* Commit content */}
                <div className="bg-background border border-border rounded-lg p-5 mb-4 flex-1 group-hover:border-green/20 transition-colors">
                  {/* Commit header */}
                  <div className="flex flex-wrap items-center gap-2 text-xs mb-3">
                    <span className="text-yellow font-mono">
                      {commit.hash}
                    </span>
                    <span className="text-muted">|</span>
                    <span className={`${commit.color}`}>
                      ({commit.branch})
                    </span>
                    <span className="text-muted">|</span>
                    <span className="text-comment">{commit.date}</span>
                  </div>

                  {/* Role & company */}
                  <h3 className="font-[family-name:var(--font-space-grotesk)] font-bold text-lg">
                    <span className="text-foreground">{commit.role}</span>
                    <span className="text-muted"> @ </span>
                    <span className={commit.color}>{commit.company}</span>
                  </h3>

                  {/* Commit message */}
                  <p className="text-sm text-muted mt-2 leading-relaxed">
                    {commit.message}
                  </p>

                  {/* Tech tags */}
                  <div className="flex flex-wrap gap-2 mt-4">
                    {commit.tech.map((t) => (
                      <span
                        key={t}
                        className="text-xs px-2 py-0.5 bg-surface border border-border rounded-sm text-comment"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 1.2 }}
          className="mt-6 ml-12 text-xs text-comment"
        >
          {"// "}End of git log — {commits.length} commits shown
        </motion.div>
      </div>
    </section>
  );
}
