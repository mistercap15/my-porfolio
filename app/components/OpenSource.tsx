"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const sideProjects = [
  {
    name: "bhagavad-gita-app",
    description:
      "A cross-platform mobile app for reading the Bhagavad Gita — all 18 chapters, 700 verses, with bookmarks and a clean reading experience.",
    stack: "React Native + Expo",
    stars: "12",
    forks: "3",
    color: "text-yellow",
    borderColor: "border-yellow/20",
  },
  {
    name: "zu-chat",
    description:
      "Real-time chat application with group messaging, multimedia sharing, and push notifications. Built with React Native and Node.js.",
    stack: "React Native + Expo",
    stars: "8",
    forks: "2",
    color: "text-green",
    borderColor: "border-green/20",
  },
  {
    name: "meta-med",
    description:
      "Medical records management system for clinics. Patient data, appointments, and history in one clean dashboard.",
    stack: "React + Context API",
    stars: "5",
    forks: "1",
    color: "text-blue",
    borderColor: "border-blue/20",
  },
];

export default function OpenSource() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-20 sm:py-24 lg:py-28 relative bg-surface">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-green/20 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <span className="text-xs text-comment">{"// section.05"}</span>
          <h2 className="font-[family-name:var(--font-space-grotesk)] text-3xl sm:text-4xl lg:text-5xl font-bold mt-2">
            <span className="text-green">sideProjects</span>
            <span className="text-foreground">()</span>
            <span className="cursor-blink text-green ml-1">_</span>
          </h2>
          <div className="section-separator mt-4" />
          <p className="text-sm text-comment mt-4">
            $ gh repo list --source --sort=stars
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-5">
          {sideProjects.map((project, i) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.1 + i * 0.1 }}
              whileHover={{ y: -4 }}
              className={`group bg-background border ${project.borderColor} rounded-lg p-5 hover:border-green/40 transition-all`}
            >
              {/* Repo header */}
              <div className="flex items-center gap-2 mb-3">
                <svg
                  className="w-4 h-4 text-muted"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                >
                  <path d="M2 2.5A2.5 2.5 0 014.5 0h8.75a.75.75 0 01.75.75v12.5a.75.75 0 01-.75.75h-2.5a.75.75 0 110-1.5h1.75v-2h-8a1 1 0 00-.714 1.7.75.75 0 01-1.072 1.05A2.495 2.495 0 012 11.5v-9zm10.5-1h-8a1 1 0 00-1 1v6.708A2.486 2.486 0 014.5 9h8.5V1.5zm-8 11a1 1 0 001-1h6.5v2H4.5a1 1 0 01-1-1z" />
                </svg>
                <span
                  className={`text-sm font-bold ${project.color} group-hover:text-green transition-colors`}
                >
                  {project.name}
                </span>
              </div>

              <p className="text-xs text-muted leading-relaxed mb-4">
                {project.description}
              </p>

              {/* Footer info */}
              <div className="flex items-center justify-between text-xs">
                <span className="px-2 py-0.5 bg-surface border border-border rounded-sm text-comment">
                  {project.stack}
                </span>
                <div className="flex items-center gap-3 text-comment">
                  <span className="flex items-center gap-1">
                    <svg
                      className="w-3 h-3"
                      fill="currentColor"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8 .25a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.75.75 0 01-1.088.791L8 12.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.194L.818 6.374a.75.75 0 01.416-1.28l4.21-.611L7.327.668A.75.75 0 018 .25z" />
                    </svg>
                    {project.stars}
                  </span>
                  <span className="flex items-center gap-1">
                    <svg
                      className="w-3 h-3"
                      fill="currentColor"
                      viewBox="0 0 16 16"
                    >
                      <path d="M5 3.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm0 2.122a2.25 2.25 0 10-1.5 0v.878A2.25 2.25 0 005.75 8.5h1.5v2.128a2.251 2.251 0 101.5 0V8.5h1.5a2.25 2.25 0 002.25-2.25v-.878a2.25 2.25 0 10-1.5 0v.878a.75.75 0 01-.75.75h-4.5A.75.75 0 015 6.25v-.878zm3.75 7.378a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm3-8.75a.75.75 0 100-1.5.75.75 0 000 1.5z" />
                    </svg>
                    {project.forks}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
