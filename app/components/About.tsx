"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const highlights = [
  {
    label: "Frontend",
    description: "React, Next.js, Vue.js, Nuxt.js with responsive, pixel-perfect UI",
    color: "bg-violet/10 text-violet border-violet/20",
  },
  {
    label: "Backend",
    description: "Node.js, Express — REST APIs and server-side logic",
    color: "bg-coral/10 text-warm border-coral/20",
  },
  {
    label: "Mobile",
    description: "React Native & Expo for cross-platform mobile apps",
    color: "bg-electric/10 text-electric border-electric/20",
  },
  {
    label: "State & Data",
    description: "Redux Toolkit, Context API, MongoDB for robust data flow",
    color: "bg-amber/10 text-amber border-amber/20",
  },
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-28 relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8" ref={ref}>
        <div className="grid lg:grid-cols-12 gap-16">
          {/* Left side - label */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="lg:col-span-4"
          >
            <div className="lg:sticky lg:top-28">
              <span className="text-sm font-mono text-violet tracking-wider uppercase">
                01 / About
              </span>
              <h2 className="font-[family-name:var(--font-space-grotesk)] text-4xl lg:text-5xl font-bold mt-4 leading-tight">
                A bit about
                <br />
                myself<span className="text-violet">.</span>
              </h2>
              <div className="section-separator mt-6" />
            </div>
          </motion.div>

          {/* Right side - content */}
          <div className="lg:col-span-8 space-y-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6"
            >
              <p className="text-lg text-muted leading-relaxed">
                I&apos;m Khilan Patel, a passionate React.js developer based in
                Pune, India. I hold a B.E. in Information Technology from
                Sinhgad College of Engineering, Pune. I thrive on turning complex
                problems into clean, performant web and mobile applications.
              </p>
              <p className="text-lg text-muted leading-relaxed">
                My approach is rooted in collaboration — working closely with
                back-end developers, project managers, and clients to deliver
                tailored solutions. I&apos;m always eager to learn and implement
                new technologies to enhance development efficiency and product
                quality.
              </p>
            </motion.div>

            {/* Highlight blocks */}
            <div className="grid sm:grid-cols-2 gap-4">
              {highlights.map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                  whileHover={{ y: -4 }}
                  className={`p-5 rounded-xl border ${item.color} transition-shadow hover:shadow-lg`}
                >
                  <h3 className="font-semibold font-[family-name:var(--font-space-grotesk)] text-lg mb-1">
                    {item.label}
                  </h3>
                  <p className="text-sm opacity-80">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
