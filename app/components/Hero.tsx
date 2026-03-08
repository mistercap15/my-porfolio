"use client";

import { motion } from "framer-motion";

const stagger = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] as const },
  },
};

export default function Hero() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="min-h-screen relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-orange/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 left-10 w-72 h-72 bg-coral/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-32 pb-20 relative z-10">
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="visible"
          className="grid lg:grid-cols-12 gap-12 items-start"
        >
          {/* Left column - main content */}
          <div className="lg:col-span-7 space-y-8">
            <motion.div variants={fadeUp} className="flex items-center gap-3">
              <span className="h-px w-12 bg-orange" />
              <span className="text-sm font-mono text-orange tracking-wider uppercase">
                Software Engineer (React JS)
              </span>
            </motion.div>

            <motion.h1
              variants={fadeUp}
              className="font-[family-name:var(--font-space-grotesk)] text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight"
            >
              Hi, I&apos;m{" "}
              <span className="relative inline-block">
                <span className="relative z-10">Khilan</span>
                <motion.span
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 1, duration: 0.6, ease: "easeOut" }}
                  className="absolute bottom-2 left-0 right-0 h-3 bg-orange/20 origin-left -z-0"
                />
              </span>
              <span className="text-orange">.</span>
              <br />
              <span className="text-4xl sm:text-5xl lg:text-6xl text-muted">
                I build for web & mobile.
              </span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="text-lg text-muted max-w-lg leading-relaxed"
            >
              Passionate and detail-oriented React.js developer with a proven
              track record of building high-performance web applications.
              Delivering scalable, responsive, and user-centric solutions.
            </motion.p>

            <motion.div variants={fadeUp} className="flex flex-wrap gap-4 pt-2">
              <button
                onClick={() => scrollTo("projects")}
                className="group inline-flex items-center gap-2 px-6 py-3 bg-foreground text-background rounded-lg font-medium text-sm hover:bg-foreground/90 transition-colors cursor-pointer"
              >
                View Projects
                <span className="inline-block group-hover:translate-x-1 transition-transform">
                  &rarr;
                </span>
              </button>
              <a
                href="/resume.pdf"
                download
                className="inline-flex items-center gap-2 px-6 py-3 bg-orange text-white rounded-lg font-medium text-sm hover:bg-orange-dark transition-colors"
              >
                <svg
                  className="w-4 h-4"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <polyline points="7 10 12 15 17 10" />
                  <line x1="12" y1="15" x2="12" y2="3" />
                </svg>
                Download CV
              </a>
              <button
                onClick={() => scrollTo("contact")}
                className="inline-flex items-center gap-2 px-6 py-3 border border-border rounded-lg font-medium text-sm hover:border-orange hover:text-orange transition-colors cursor-pointer"
              >
                Contact Me
              </button>
            </motion.div>
          </div>

          {/* Right column - decorative info */}
          <motion.div variants={fadeUp} className="lg:col-span-5 lg:pt-16">
            <div className="space-y-6">
              {/* Status card */}
              <div className="bg-surface border border-border rounded-2xl p-6 space-y-4">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-cyan rounded-full animate-pulse" />
                  <span className="text-sm text-muted">
                    Based in Pune, India
                  </span>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-2xl font-bold font-[family-name:var(--font-space-grotesk)]">
                      3+
                    </p>
                    <p className="text-xs text-muted">Years Experience</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold font-[family-name:var(--font-space-grotesk)]">
                      10+
                    </p>
                    <p className="text-xs text-muted">Projects Delivered</p>
                  </div>
                </div>
              </div>

              {/* Tech badges */}
              <div className="flex flex-wrap gap-2">
                {[
                  "React",
                  "Next.js",
                  "Vue.js",
                  "TypeScript",
                  "React Native",
                  "Node.js",
                ].map((tech) => (
                  <motion.span
                    key={tech}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className="px-3 py-1.5 bg-surface border border-border rounded-full text-xs font-mono text-muted"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 pointer-events-none"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            className="w-5 h-8 border-2 border-muted/40 rounded-full flex justify-center pt-1.5"
          >
            <div className="w-1 h-1.5 bg-muted/60 rounded-full" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
