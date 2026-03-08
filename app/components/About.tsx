"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const codeBlock = `{
  "name": "khilan-patel",
  "version": "3.0.0",
  "description": "Software Engineer",
  "location": "India",
  "education": "B.E. Information Technology",
  "interests": [
    "web-development",
    "mobile-apps",
    "clean-architecture",
    "open-source"
  ]
}`;

const specializations = [
  {
    keyword: "const",
    name: "frontend",
    value: '["React", "Next.js", "Vue.js", "Nuxt.js"]',
    color: "text-blue",
    keyColor: "text-purple",
  },
  {
    keyword: "const",
    name: "backend",
    value: '["Node.js", "Express", "MongoDB"]',
    color: "text-green",
    keyColor: "text-purple",
  },
  {
    keyword: "const",
    name: "mobile",
    value: '["React Native", "Expo"]',
    color: "text-cyan",
    keyColor: "text-purple",
  },
  {
    keyword: "const",
    name: "stateManagement",
    value: '["Redux Toolkit", "Pinia", "Context API"]',
    color: "text-yellow",
    keyColor: "text-purple",
  },
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-20 sm:py-24 lg:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <div className="grid lg:grid-cols-12 gap-8 sm:gap-12 [&>*]:min-w-0">
          {/* Left — section header */}
          <div className="lg:col-span-4 lg:sticky lg:top-28 lg:self-start">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
            >
              <span className="text-xs text-comment">{"// section.01"}</span>
              <h2 className="font-[family-name:var(--font-space-grotesk)] text-3xl sm:text-4xl lg:text-5xl font-bold mt-2">
                <span className="text-purple">about</span>
                <span className="text-foreground">()</span>
                <span className="cursor-blink text-green ml-1">_</span>
              </h2>
              <div className="section-separator mt-4" />
              <p className="text-muted mt-6 text-sm leading-relaxed">
                <span className="text-comment">/**</span>
                <br />
                <span className="text-comment">
                  {" "}* A developer who loves building
                </span>
                <br />
                <span className="text-comment">
                  {" "}* things that live on the internet.
                </span>
                <br />
                <span className="text-comment">{" */"}</span>
              </p>
            </motion.div>
          </div>

          {/* Right — code content */}
          <div className="lg:col-span-8 space-y-6">
            {/* package.json style card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-surface border border-border rounded-lg overflow-hidden"
            >
              <div className="flex items-center gap-2 px-4 py-2 bg-panel border-b border-border">
                <span className="text-xs text-yellow">{"{ }"}</span>
                <span className="text-xs text-muted">
                  package.json — developer profile
                </span>
              </div>
              <pre className="p-5 text-sm leading-relaxed overflow-x-auto">
                <code>
                  {codeBlock.split("\n").map((line, i) => (
                    <div key={i} className="flex">
                      <span className="text-line-number w-6 text-right mr-4 select-none text-xs">
                        {i + 1}
                      </span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: line
                            .replace(
                              /"([^"]+)":/g,
                              '<span class="text-blue">"$1"</span>:'
                            )
                            .replace(
                              /: "([^"]+)"/g,
                              ': <span class="text-green">"$1"</span>'
                            )
                            .replace(
                              /"([^"]+)"(,?)\s*$/g,
                              '<span class="text-green">"$1"</span>$2'
                            ),
                        }}
                      />
                    </div>
                  ))}
                </code>
              </pre>
            </motion.div>

            {/* Bio paragraphs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-surface border border-border rounded-lg p-5"
            >
              <p className="text-comment text-sm mb-1">{"/* README.md */"}</p>
              <div className="space-y-3 text-sm text-muted leading-relaxed mt-3">
                <p>
                  I&apos;m a{" "}
                  <span className="text-green">Software Engineer</span> based in
                  India with <span className="text-blue">3+ years</span> of
                  experience crafting web and mobile applications. I specialize
                  in <span className="text-blue">React.js</span>,{" "}
                  <span className="text-purple">Next.js</span>,{" "}
                  <span className="text-cyan">Vue.js</span>, and{" "}
                  <span className="text-yellow">React Native</span> — building
                  apps people actually enjoy using.
                </p>
                <p>
                  From responsive dashboards to cross-platform mobile apps,
                  I&apos;m passionate about clean code, thoughtful UX, and
                  shipping features that make a real difference for users.
                </p>
              </div>
            </motion.div>

            {/* Specializations as variable declarations */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-surface border border-border rounded-lg overflow-hidden"
            >
              <div className="flex items-center gap-2 px-4 py-2 bg-panel border-b border-border">
                <span className="text-xs text-purple">TS</span>
                <span className="text-xs text-muted">specializations.ts</span>
              </div>
              <div className="p-5 space-y-2.5">
                {specializations.map((spec, i) => (
                  <div key={i} className="flex items-start gap-0 text-sm">
                    <span className="text-line-number w-6 text-right mr-4 select-none text-xs">
                      {i + 1}
                    </span>
                    <span>
                      <span className={spec.keyColor}>{spec.keyword}</span>{" "}
                      <span className="text-foreground">{spec.name}</span>
                      <span className="text-muted"> = </span>
                      <span className={spec.color}>{spec.value}</span>
                      <span className="text-muted">;</span>
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
