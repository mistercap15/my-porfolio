"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

function TypingText({ text, delay = 0 }: { text: string; delay?: number }) {
  const [displayed, setDisplayed] = useState("");
  const [done, setDone] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      let i = 0;
      const interval = setInterval(() => {
        setDisplayed(text.slice(0, i + 1));
        i++;
        if (i >= text.length) {
          clearInterval(interval);
          setDone(true);
        }
      }, 40);
      return () => clearInterval(interval);
    }, delay);
    return () => clearTimeout(timeout);
  }, [text, delay]);

  return (
    <span>
      {displayed}
      {!done && <span className="cursor-blink text-green">|</span>}
    </span>
  );
}

export default function Hero() {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowContent(true), 600);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden dot-grid">
      {/* Ambient glow */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-green/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-blue/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-32 w-full">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Left — Terminal */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-surface border border-border rounded-lg overflow-hidden glow-green"
            >
              {/* Title bar */}
              <div className="flex items-center gap-2 px-4 py-2.5 bg-panel border-b border-border">
                <div className="flex gap-1.5">
                  <span className="w-3 h-3 rounded-full bg-red/80" />
                  <span className="w-3 h-3 rounded-full bg-yellow/80" />
                  <span className="w-3 h-3 rounded-full bg-green/80" />
                </div>
                <span className="text-xs text-comment ml-2">
                  ~/khilan.dev — zsh
                </span>
              </div>

              {/* Terminal content */}
              <div className="p-5 lg:p-6 space-y-3 text-sm lg:text-base">
                <div>
                  <span className="text-green">khilan@dev</span>
                  <span className="text-muted">:</span>
                  <span className="text-blue">~</span>
                  <span className="text-foreground">$ </span>
                  <TypingText text="whoami" delay={300} />
                </div>

                {showContent && (
                  <>
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.2 }}
                    >
                      <p className="text-foreground">Khilan Patel</p>
                      <p className="text-comment text-sm">
                        Software Engineer specializing in React & React Native
                      </p>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.8 }}
                      className="pt-2"
                    >
                      <span className="text-green">khilan@dev</span>
                      <span className="text-muted">:</span>
                      <span className="text-blue">~</span>
                      <span className="text-foreground">$ </span>
                      <TypingText text="cat about.txt" delay={1200} />
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 2.2 }}
                      className="text-muted leading-relaxed"
                    >
                      <p>
                        I build performant web & mobile applications with{" "}
                        <span className="text-blue">React.js</span>,{" "}
                        <span className="text-purple">Next.js</span>,{" "}
                        <span className="text-cyan">Vue.js</span>, and{" "}
                        <span className="text-yellow">React Native</span>.
                      </p>
                      <p className="mt-1">
                        Turning caffeine into clean, scalable code since 2022.
                      </p>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 2.8 }}
                      className="pt-2"
                    >
                      <span className="text-green">khilan@dev</span>
                      <span className="text-muted">:</span>
                      <span className="text-blue">~</span>
                      <span className="text-foreground">$ </span>
                      <span className="text-foreground">ls actions/</span>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 3.2 }}
                      className="flex flex-wrap gap-3 pt-1"
                    >
                      <a
                        href="#projects"
                        className="px-4 py-2 bg-green/10 border border-green/40 text-green text-sm rounded-sm hover:bg-green/20 transition-all group"
                      >
                        <span className="text-comment group-hover:text-green">
                          ./
                        </span>
                        view_projects
                      </a>
                      <a
                        href="/Khilan_Patel_CV.pdf"
                        target="_blank"
                        className="px-4 py-2 bg-blue/10 border border-blue/30 text-blue text-sm rounded-sm hover:bg-blue/20 transition-all group"
                      >
                        <span className="text-comment group-hover:text-blue">
                          ./
                        </span>
                        download_cv
                      </a>
                      <a
                        href="#contact"
                        className="px-4 py-2 bg-purple/10 border border-purple/30 text-purple text-sm rounded-sm hover:bg-purple/20 transition-all group"
                      >
                        <span className="text-comment group-hover:text-purple">
                          ./
                        </span>
                        contact_me
                      </a>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 3.5 }}
                      className="pt-2"
                    >
                      <span className="text-green">khilan@dev</span>
                      <span className="text-muted">:</span>
                      <span className="text-blue">~</span>
                      <span className="text-foreground">$ </span>
                      <span className="cursor-blink text-green">|</span>
                    </motion.div>
                  </>
                )}
              </div>
            </motion.div>
          </div>

          {/* Right — Status panel */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="lg:col-span-5 space-y-4"
          >
            <div className="bg-surface border border-border rounded-lg p-5">
              <div className="flex items-center gap-2 mb-4">
                <span className="w-2 h-2 rounded-full bg-green animate-pulse" />
                <span className="text-xs text-green uppercase tracking-widest">
                  System Status
                </span>
              </div>

              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-comment">location:</span>
                  <span className="text-foreground">India</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-comment">experience:</span>
                  <span className="text-green">3+ years</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-comment">projects_shipped:</span>
                  <span className="text-blue">10+</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-comment">status:</span>
                  <span className="text-green">open_to_work</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-comment">current_role:</span>
                  <span className="text-yellow">@Infosys</span>
                </div>
              </div>
            </div>

            <div className="bg-surface border border-border rounded-lg p-5">
              <p className="text-xs text-comment mb-3">
                // tech_stack.config
              </p>
              <div className="flex flex-wrap gap-2">
                {[
                  { name: "React", color: "text-blue border-blue/30" },
                  {
                    name: "Next.js",
                    color: "text-foreground border-muted/30",
                  },
                  { name: "Vue.js", color: "text-green border-green/30" },
                  { name: "TypeScript", color: "text-blue border-blue/30" },
                  {
                    name: "React Native",
                    color: "text-cyan border-cyan/30",
                  },
                  { name: "Node.js", color: "text-green border-green/30" },
                  { name: "MongoDB", color: "text-green border-green/30" },
                  { name: "Redux", color: "text-purple border-purple/30" },
                ].map((tech) => (
                  <span
                    key={tech.name}
                    className={`text-xs px-2.5 py-1 border rounded-sm ${tech.color} bg-background`}
                  >
                    {tech.name}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 4 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-xs text-comment">scroll_down</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-4 h-7 border border-border rounded-full flex items-start justify-center p-1"
          >
            <motion.div className="w-1 h-1.5 bg-green rounded-full" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
