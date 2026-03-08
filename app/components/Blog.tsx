"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import { blogPosts } from "../data/blog";

const accentMap: Record<string, string> = {
  "border-orange": "border-orange/30",
  "border-cyan": "border-cyan/30",
  "border-coral": "border-yellow/30",
  "border-electric": "border-blue/30",
};

const colorMap: Record<string, string> = {
  "border-orange": "text-orange",
  "border-cyan": "text-cyan",
  "border-coral": "text-yellow",
  "border-electric": "text-blue",
};

export default function Blog() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="blog" className="py-28 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <span className="text-xs text-comment">{"// section.06"}</span>
          <h2 className="font-[family-name:var(--font-space-grotesk)] text-4xl lg:text-5xl font-bold mt-2">
            <span className="text-orange">blog</span>
            <span className="text-foreground">()</span>
            <span className="cursor-blink text-green ml-1">_</span>
          </h2>
          <div className="section-separator mt-4" />
          <p className="text-sm text-comment mt-4">
            $ cat ~/thoughts/*.md | head -4
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-5">
          {blogPosts.map((post, i) => (
            <Link key={post.slug} href={`/blog/${post.slug}`}>
              <motion.article
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.1 + i * 0.08 }}
                whileHover={{ y: -3 }}
                className={`group h-full bg-surface border-l-2 ${
                  accentMap[post.accent] || "border-green/30"
                } border border-border rounded-lg overflow-hidden hover:border-green/30 transition-all cursor-pointer`}
              >
                {/* File tab */}
                <div className="flex items-center justify-between px-4 py-2 bg-panel border-b border-border">
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-comment">~/blog/</span>
                    <span
                      className={`text-xs ${
                        colorMap[post.accent] || "text-green"
                      }`}
                    >
                      {post.slug.slice(0, 20)}...
                    </span>
                  </div>
                  <span className="text-xs text-comment">{post.readTime}</span>
                </div>

                <div className="p-5">
                  <div className="flex items-center gap-2 text-xs text-comment mb-3">
                    <time>{post.date}</time>
                  </div>

                  <h3 className="font-[family-name:var(--font-space-grotesk)] font-bold text-base leading-snug group-hover:text-green transition-colors">
                    {post.title}
                  </h3>

                  <p className="text-xs text-muted mt-2 leading-relaxed line-clamp-2">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center justify-between mt-4">
                    <div className="flex gap-2">
                      {post.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs px-2 py-0.5 bg-background border border-border rounded-sm text-comment"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <span className="text-xs text-muted group-hover:text-green transition-colors">
                      read more {">"}
                    </span>
                  </div>
                </div>
              </motion.article>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
