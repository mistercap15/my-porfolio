"use client";

import { motion } from "framer-motion";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

const skills = [
  "Next.js",
  "React",
  "TypeScript",
  "Node.js",
  "MongoDB",
  "Framer Motion",
  "React Native",
  "GraphQL",
];

const projects = [
  {
    title: "Nebula Commerce",
    description:
      "3D-inspired analytics and checkout experiences that improved conversion by 22%.",
    stack: ["Next.js", "Stripe", "Prisma"],
  },
  {
    title: "Orbit Team Hub",
    description:
      "Developer collaboration platform with live code spaces and animated data visualizations.",
    stack: ["React", "Node.js", "Socket.IO"],
  },
  {
    title: "Pulse Mobile",
    description:
      "A cross-platform fitness app with realtime coaching and modular architecture.",
    stack: ["React Native", "Expo", "Firebase"],
  },
];

const experiences = [
  {
    role: "Senior Frontend Developer",
    org: "PixelForge Studio",
    duration: "2024 — Present",
    points: [
      "Led UI architecture for enterprise dashboards used by 40k+ active users.",
      "Built reusable motion components that reduced development time by 30%.",
    ],
  },
  {
    role: "Full Stack Developer",
    org: "CodeCanvas Labs",
    duration: "2022 — 2024",
    points: [
      "Shipped scalable web and mobile products for SaaS and fintech clients.",
      "Optimized API throughput and improved performance under high traffic.",
    ],
  },
];

function SectionTitle({ prefix, title }: { prefix: string; title: string }) {
  return (
    <div className="mb-8">
      <p className="text-xs tracking-[0.22em] text-cyan/80 uppercase">{prefix}</p>
      <h2 className="text-3xl sm:text-4xl font-semibold mt-3 text-white">{title}</h2>
    </div>
  );
}

export default function Home() {
  return (
    <div className="relative min-h-screen bg-[#060711] text-slate-100 overflow-x-hidden">
      <div className="mesh-bg" />
      <div className="noise-overlay" />

      <header className="fixed top-0 inset-x-0 z-50 border-b border-white/10 backdrop-blur-xl bg-[#070914]/70">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          <a href="#" className="text-sm sm:text-base font-semibold tracking-wide text-white">
            khilan<span className="text-cyan">.dev</span>
          </a>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            {navItems.map((item) => (
              <a key={item.label} href={item.href} className="text-slate-300 hover:text-cyan transition-colors">
                {item.label}
              </a>
            ))}
          </nav>
          <a
            href="#contact"
            className="text-xs sm:text-sm px-3 py-1.5 rounded-full border border-cyan/40 text-cyan hover:bg-cyan/10 transition"
          >
            Let&apos;s build
          </a>
        </div>
      </header>

      <main className="relative z-10">
        <section className="min-h-screen flex items-center pt-28 pb-16 px-4 sm:px-6">
          <div className="max-w-6xl mx-auto w-full grid lg:grid-cols-12 gap-10 items-center">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="lg:col-span-7"
            >
              <p className="text-cyan tracking-[0.25em] text-xs uppercase">Developer Portfolio 3D Edition</p>
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-semibold leading-[1.1] mt-4 text-balance">
                Building immersive
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan to-violet-400"> digital products</span>
              </h1>
              <p className="mt-6 text-slate-300 max-w-xl leading-relaxed">
                I design and engineer high-performance web and mobile experiences with cinematic depth, modern architecture,
                and clean developer-first execution.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href="#projects" className="pill-btn pill-primary">
                  View Projects
                </a>
                <a href="#contact" className="pill-btn pill-secondary">
                  Contact Me
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, rotateY: 20 }}
              animate={{ opacity: 1, rotateY: 0 }}
              transition={{ duration: 0.9, delay: 0.2 }}
              className="lg:col-span-5"
            >
              <div className="scene-wrap">
                <motion.div
                  animate={{ rotateY: [0, -12, 0], rotateX: [0, 8, 0] }}
                  transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                  className="holo-card"
                >
                  <p className="text-xs uppercase tracking-[0.2em] text-cyan/80">System Profile</p>
                  <h3 className="text-2xl font-semibold mt-3">Khilan Patel</h3>
                  <p className="text-slate-300 mt-2">Full Stack Developer · 3+ years</p>
                  <div className="mt-6 grid grid-cols-2 gap-3 text-sm">
                    <div className="glass-chip">React Architectures</div>
                    <div className="glass-chip">Creative UI Motion</div>
                    <div className="glass-chip">Mobile Engineering</div>
                    <div className="glass-chip">API Performance</div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        <section id="about" className="py-24 px-4 sm:px-6">
          <div className="max-w-6xl mx-auto">
            <SectionTitle prefix="01" title="About" />
            <div className="tilt-grid">
              <motion.article whileHover={{ rotateX: 5, rotateY: -6 }} className="tilt-panel">
                I&apos;m a software engineer focused on premium portfolio, SaaS, and product interfaces. I care deeply about UI
                storytelling, maintainable code, and scalable systems.
              </motion.article>
              <motion.article whileHover={{ rotateX: -4, rotateY: 8 }} className="tilt-panel">
                My workflow combines product thinking with frontend craftsmanship, turning complex ideas into intuitive,
                performant experiences.
              </motion.article>
            </div>
          </div>
        </section>

        <section id="skills" className="py-24 px-4 sm:px-6">
          <div className="max-w-6xl mx-auto">
            <SectionTitle prefix="02" title="3D Skill Matrix" />
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill}
                  whileHover={{ y: -6, rotateX: 8, rotateY: -8 }}
                  transition={{ type: "spring", stiffness: 220, damping: 18 }}
                  className="skill-cube"
                >
                  <p className="text-xs text-cyan/70">Node {index + 1}</p>
                  <p className="text-lg mt-2 font-medium">{skill}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section id="projects" className="py-24 px-4 sm:px-6">
          <div className="max-w-6xl mx-auto">
            <SectionTitle prefix="03" title="Featured Projects" />
            <div className="grid lg:grid-cols-3 gap-5">
              {projects.map((project) => (
                <motion.article
                  key={project.title}
                  whileHover={{ y: -8, rotateX: 4, rotateY: 2 }}
                  className="project-card"
                >
                  <h3 className="text-xl font-semibold text-white">{project.title}</h3>
                  <p className="text-slate-300 mt-3 text-sm leading-relaxed">{project.description}</p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.stack.map((item) => (
                      <span key={item} className="stack-pill">
                        {item}
                      </span>
                    ))}
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        <section id="experience" className="py-24 px-4 sm:px-6">
          <div className="max-w-6xl mx-auto">
            <SectionTitle prefix="04" title="Experience" />
            <div className="space-y-5">
              {experiences.map((exp) => (
                <motion.article key={exp.role} whileHover={{ rotateX: 3, scale: 1.01 }} className="exp-card">
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <h3 className="text-xl font-semibold">{exp.role}</h3>
                    <p className="text-sm text-cyan">{exp.duration}</p>
                  </div>
                  <p className="text-slate-300 mt-1">{exp.org}</p>
                  <ul className="mt-4 space-y-2 text-sm text-slate-200 list-disc pl-5">
                    {exp.points.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="py-24 px-4 sm:px-6 pb-28">
          <div className="max-w-5xl mx-auto">
            <SectionTitle prefix="05" title="Let’s Create Something Future-Ready" />
            <motion.div whileHover={{ rotateX: 4, rotateY: -4 }} className="contact-shell">
              <p className="text-slate-200 leading-relaxed max-w-2xl">
                If you want a developer portfolio, SaaS dashboard, or product site with strong 3D identity and clean code,
                let&apos;s collaborate.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a className="pill-btn pill-primary" href="mailto:khilanpatel15@gmail.com">
                  Email Me
                </a>
                <a className="pill-btn pill-secondary" href="https://github.com/khilanpatel" target="_blank" rel="noopener noreferrer">
                  GitHub
                </a>
                <a className="pill-btn pill-secondary" href="https://linkedin.com/in/khilanpatel" target="_blank" rel="noopener noreferrer">
                  LinkedIn
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </div>
  );
}
