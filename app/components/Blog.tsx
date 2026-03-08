"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import { blogPosts } from "../data/blog";

export default function Blog() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="blog" className="py-28 bg-surface relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="text-sm font-mono text-orange tracking-wider uppercase">
            06 / Blog
          </span>
          <h2 className="font-[family-name:var(--font-space-grotesk)] text-4xl lg:text-5xl font-bold mt-4">
            Tech thoughts<span className="text-orange">.</span>
          </h2>
          <div className="section-separator mt-6" />
          <p className="text-muted mt-6 max-w-xl leading-relaxed">
            I write about web development, mobile apps, and the tools and
            patterns that make building software better.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {blogPosts.map((post, i) => (
            <Link key={post.slug} href={`/blog/${post.slug}`}>
              <motion.article
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 + i * 0.1 }}
                whileHover={{ y: -4 }}
                className={`group h-full bg-background border-l-4 ${post.accent} border border-border rounded-2xl p-6 hover:shadow-lg transition-all cursor-pointer`}
              >
                <div className="flex items-center gap-3 text-xs text-muted mb-3">
                  <time>{post.date}</time>
                  <span className="w-1 h-1 bg-muted/40 rounded-full" />
                  <span>{post.readTime}</span>
                </div>

                <h3 className="font-[family-name:var(--font-space-grotesk)] font-bold text-lg leading-snug group-hover:text-orange transition-colors">
                  {post.title}
                </h3>

                <p className="text-sm text-muted mt-3 leading-relaxed">
                  {post.excerpt}
                </p>

                <div className="flex items-center justify-between mt-5">
                  <div className="flex gap-2">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs font-mono px-2 py-0.5 bg-surface border border-border rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <span className="text-sm text-muted group-hover:text-orange transition-colors">
                    Read more &rarr;
                  </span>
                </div>
              </motion.article>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
