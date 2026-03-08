"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const contributions = [
  {
    project: "next-auth",
    description: "Contributed session handling improvements and TypeScript type fixes",
    stars: "18.2k",
    link: "https://github.com",
  },
  {
    project: "tailwindcss",
    description: "Fixed responsive utility edge cases and documentation improvements",
    stars: "80k",
    link: "https://github.com",
  },
  {
    project: "react-hook-form",
    description: "Added custom validation pattern examples and performance optimizations",
    stars: "40k",
    link: "https://github.com",
  },
];

export default function OpenSource() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-28 relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="text-sm font-mono text-teal tracking-wider uppercase">
            05 / Open Source
          </span>
          <h2 className="font-[family-name:var(--font-space-grotesk)] text-4xl lg:text-5xl font-bold mt-4">
            Giving back<span className="text-teal">.</span>
          </h2>
          <div className="section-separator mt-6" />
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {contributions.map((item, i) => (
            <motion.a
              key={item.project}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.1 }}
              whileHover={{ y: -6, scale: 1.02 }}
              className="group block bg-surface border border-border rounded-2xl p-6 hover:border-teal/40 hover:shadow-lg transition-all"
            >
              <div className="flex items-start justify-between mb-4">
                <svg
                  className="w-8 h-8 text-muted group-hover:text-teal transition-colors"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22" />
                </svg>
                <span className="flex items-center gap-1 text-xs text-muted">
                  <svg
                    className="w-3.5 h-3.5"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                  {item.stars}
                </span>
              </div>
              <h3 className="font-[family-name:var(--font-space-grotesk)] font-bold text-lg group-hover:text-teal transition-colors">
                {item.project}
              </h3>
              <p className="text-sm text-muted mt-2 leading-relaxed">
                {item.description}
              </p>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
