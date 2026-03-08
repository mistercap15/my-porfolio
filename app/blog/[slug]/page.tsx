"use client";

import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import Link from "next/link";
import { getPostBySlug } from "../../data/blog";

export default function BlogPost() {
  const params = useParams();
  const post = getPostBySlug(params.slug as string);

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-[family-name:var(--font-space-grotesk)] text-4xl font-bold">
            Post not found
          </h1>
          <Link
            href="/#blog"
            className="inline-block mt-6 text-orange hover:underline"
          >
            &larr; Back to blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      {/* Top nav bar */}
      <nav className="fixed top-0 left-0 right-0 z-40 bg-surface/80 backdrop-blur-xl border-b border-border">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 h-16 flex items-center justify-between">
          <Link
            href="/#blog"
            className="inline-flex items-center gap-2 text-sm text-muted hover:text-foreground transition-colors"
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
              <polyline points="15 18 9 12 15 6" />
            </svg>
            Back to portfolio
          </Link>
          <a
            href="#"
            className="font-[family-name:var(--font-space-grotesk)] text-lg font-bold tracking-tight"
          >
            <span className="text-orange">khilan</span>
            <span className="text-foreground">.dev</span>
          </a>
        </div>
      </nav>

      {/* Article */}
      <motion.article
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto px-6 lg:px-8 pt-32 pb-20"
      >
        {/* Meta */}
        <div className="flex items-center gap-3 text-sm text-muted mb-4">
          <time>{post.date}</time>
          <span className="w-1 h-1 bg-muted/40 rounded-full" />
          <span>{post.readTime}</span>
        </div>

        {/* Title */}
        <h1 className="font-[family-name:var(--font-space-grotesk)] text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
          {post.title}
        </h1>

        {/* Tags */}
        <div className="flex gap-2 mt-6">
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs font-mono px-3 py-1 bg-surface border border-border rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="h-px bg-border my-10" />

        {/* Content */}
        <div className="prose-custom">
          {post.content.split("\n\n").map((block, i) => {
            if (block.startsWith("## ")) {
              return (
                <h2
                  key={i}
                  className="font-[family-name:var(--font-space-grotesk)] text-2xl font-bold mt-10 mb-4"
                >
                  {block.replace("## ", "")}
                </h2>
              );
            }

            if (block.startsWith("```")) {
              const lines = block.split("\n");
              const code = lines.slice(1, -1).join("\n");
              return (
                <pre
                  key={i}
                  className="bg-[#1c1917] text-[#e7e5e4] rounded-xl p-5 overflow-x-auto text-sm leading-relaxed my-6 font-[family-name:var(--font-mono)]"
                >
                  <code>{code}</code>
                </pre>
              );
            }

            if (block.startsWith("- ")) {
              const items = block.split("\n");
              return (
                <ul key={i} className="space-y-2 my-4 ml-1">
                  {items.map((item, j) => (
                    <li
                      key={j}
                      className="flex gap-2 text-muted leading-relaxed"
                    >
                      <span className="text-orange mt-1.5 shrink-0">
                        &#8226;
                      </span>
                      <span>{item.replace(/^- /, "")}</span>
                    </li>
                  ))}
                </ul>
              );
            }

            if (
              block.startsWith("1. ") ||
              block.match(/^\d+\.\s\*\*/)
            ) {
              const items = block.split("\n");
              return (
                <ol key={i} className="space-y-2 my-4 ml-1">
                  {items.map((item, j) => (
                    <li
                      key={j}
                      className="flex gap-3 text-muted leading-relaxed"
                    >
                      <span className="text-orange font-mono text-sm font-bold shrink-0">
                        {j + 1}.
                      </span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: item
                            .replace(/^\d+\.\s/, "")
                            .replace(
                              /\*\*(.*?)\*\*/g,
                              '<strong class="text-foreground font-semibold">$1</strong>'
                            ),
                        }}
                      />
                    </li>
                  ))}
                </ol>
              );
            }

            // Regular paragraph — handle inline code and bold
            return (
              <p
                key={i}
                className="text-muted leading-relaxed my-4"
                dangerouslySetInnerHTML={{
                  __html: block
                    .replace(
                      /\*\*(.*?)\*\*/g,
                      '<strong class="text-foreground font-semibold">$1</strong>'
                    )
                    .replace(
                      /`([^`]+)`/g,
                      '<code class="bg-surface px-1.5 py-0.5 rounded text-sm font-[family-name:var(--font-mono)] text-orange">$1</code>'
                    ),
                }}
              />
            );
          })}
        </div>

        {/* Bottom nav */}
        <div className="h-px bg-border my-10" />
        <div className="flex items-center justify-between">
          <Link
            href="/#blog"
            className="inline-flex items-center gap-2 text-sm text-muted hover:text-orange transition-colors"
          >
            &larr; All posts
          </Link>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-muted hover:text-orange transition-colors"
          >
            Share on X &rarr;
          </a>
        </div>
      </motion.article>
    </div>
  );
}
