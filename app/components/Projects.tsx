"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const projects = [
  {
    id: "01",
    name: "clinical-q",
    title: "Clinical Q",
    description:
      "Healthcare web app enabling clinicians to manage patient queues, appointments, and real-time updates with integrated Stripe payments.",
    tech: ["React", "Context API", "Bootstrap", "Stripe"],
    github: "https://github.com/khilanpatel",
    live: "#",
    color: "text-blue",
    borderColor: "border-blue/30",
  },
  {
    id: "02",
    name: "bhagavad-gita-app",
    title: "Bhagavad Gita App",
    description:
      "Cross-platform mobile app for reading all 18 chapters and 700 verses of the Bhagavad Gita with bookmarks, search, and a clean reading experience.",
    tech: ["React Native", "Expo", "TypeScript"],
    github: "https://github.com/khilanpatel",
    live: "#",
    color: "text-yellow",
    borderColor: "border-yellow/30",
  },
  {
    id: "03",
    name: "zu-chat",
    title: "Zu Chat",
    description:
      "Real-time messaging app with group chats, multimedia sharing, and push notifications built with a Node.js backend and MongoDB.",
    tech: ["React Native", "Node.js", "MongoDB"],
    github: "https://github.com/khilanpatel",
    live: "#",
    color: "text-green",
    borderColor: "border-green/30",
  },
  {
    id: "04",
    name: "leaving-cert-plus",
    title: "Leaving Cert Plus",
    description:
      "Comprehensive study platform for Irish Leaving Cert students with subject resources, quiz modules, progress tracking, and subscription via Stripe.",
    tech: ["Nuxt.js", "Pinia", "Bootstrap", "Stripe"],
    github: "https://github.com/khilanpatel",
    live: "#",
    color: "text-cyan",
    borderColor: "border-cyan/30",
  },
  {
    id: "05",
    name: "u-trade",
    title: "uTrade",
    description:
      "Stock trading simulation platform where users can practice buying and selling stocks with virtual currency and real-time market data.",
    tech: ["React", "Context API", "Bootstrap"],
    github: "https://github.com/khilanpatel",
    live: "#",
    color: "text-purple",
    borderColor: "border-purple/30",
  },
  {
    id: "06",
    name: "cj-fallon",
    title: "CJ Fallon",
    description:
      "Educational publisher platform for digital textbooks, teacher resources, and interactive learning content for Irish schools.",
    tech: ["Nuxt.js", "Pinia", "Bootstrap"],
    github: "https://github.com/khilanpatel",
    live: "#",
    color: "text-orange",
    borderColor: "border-orange/30",
  },
];

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-28 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <span className="text-xs text-comment">{"// section.03"}</span>
          <h2 className="font-[family-name:var(--font-space-grotesk)] text-4xl lg:text-5xl font-bold mt-2">
            <span className="text-blue">projects</span>
            <span className="text-foreground">()</span>
            <span className="cursor-blink text-green ml-1">_</span>
          </h2>
          <div className="section-separator mt-4" />
          <p className="text-sm text-comment mt-4">
            $ ls -la ~/projects/{" "}
            <span className="text-muted">— {projects.length} items</span>
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-5">
          {projects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.1 + i * 0.08 }}
              whileHover={{ y: -3 }}
              className={`group bg-surface border ${project.borderColor} border-l-2 rounded-lg overflow-hidden hover:border-l-4 transition-all`}
            >
              {/* File tab header */}
              <div className="flex items-center justify-between px-4 py-2 bg-panel border-b border-border">
                <div className="flex items-center gap-2">
                  <span className={`text-xs ${project.color}`}>
                    {project.id}
                  </span>
                  <span className="text-xs text-muted">{project.name}/</span>
                </div>
                <div className="flex items-center gap-2">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted hover:text-foreground transition-colors"
                    aria-label="GitHub"
                  >
                    <svg
                      className="w-3.5 h-3.5"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                    </svg>
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted hover:text-green transition-colors"
                    aria-label="Live demo"
                  >
                    <svg
                      className="w-3.5 h-3.5"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" />
                      <polyline points="15 3 21 3 21 9" />
                      <line x1="10" y1="14" x2="21" y2="3" />
                    </svg>
                  </a>
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="font-[family-name:var(--font-space-grotesk)] font-bold text-lg group-hover:text-green transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-muted mt-2 leading-relaxed">
                  {project.description}
                </p>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="text-xs px-2 py-0.5 bg-background border border-border rounded-sm text-comment"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom status */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 1 }}
          className="mt-8 text-xs text-comment text-center"
        >
          {"// "}Total: {projects.length} repositories | 0 errors | all tests
          passing
        </motion.div>
      </div>
    </section>
  );
}
