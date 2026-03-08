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
          <p className="text-red text-sm mb-2">Error: Post not found</p>
          <p className="text-comment text-xs mb-6">
            Process exited with code 404
          </p>
          <Link
            href="/#blog"
            className="text-green hover:underline text-sm"
          >
            $ cd ~/blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      {/* Top nav bar */}
      <nav className="fixed top-0 left-0 right-0 z-40 bg-surface/90 backdrop-blur-xl border-b border-border">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 h-14 flex items-center justify-between">
          <Link
            href="/#blog"
            className="inline-flex items-center gap-2 text-sm text-muted hover:text-green transition-colors"
          >
            <span className="text-green">{"<"}</span>
            cd ~/blog
          </Link>
          <div className="flex items-center gap-1 text-sm">
            <span className="text-comment">~/</span>
            <span className="text-green">khilan</span>
            <span className="text-muted">.dev</span>
          </div>
        </div>
      </nav>

      {/* Article */}
      <motion.article
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto px-6 lg:px-8 pt-28 pb-20"
      >
        {/* File header */}
        <div className="bg-surface border border-border rounded-lg overflow-hidden mb-8">
          <div className="flex items-center gap-2 px-4 py-2 bg-panel border-b border-border">
            <div className="flex gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-red/70" />
              <span className="w-2.5 h-2.5 rounded-full bg-yellow/70" />
              <span className="w-2.5 h-2.5 rounded-full bg-green/70" />
            </div>
            <span className="text-xs text-comment ml-2">
              ~/blog/{post.slug}.md
            </span>
          </div>

          <div className="p-6">
            {/* Meta */}
            <div className="flex items-center gap-3 text-xs text-comment mb-4">
              <time>{post.date}</time>
              <span className="text-border">|</span>
              <span>{post.readTime}</span>
            </div>

            {/* Title */}
            <h1 className="font-[family-name:var(--font-space-grotesk)] text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight text-foreground">
              {post.title}
            </h1>

            {/* Tags */}
            <div className="flex gap-2 mt-4">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs px-2.5 py-0.5 bg-background border border-border rounded-sm text-comment"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="space-y-0">
          {post.content.split("\n\n").map((block, i) => {
            if (block.startsWith("## ")) {
              return (
                <h2
                  key={i}
                  className="font-[family-name:var(--font-space-grotesk)] text-xl font-bold mt-10 mb-4 text-green"
                >
                  <span className="text-comment text-sm mr-2">##</span>
                  {block.replace("## ", "")}
                </h2>
              );
            }

            if (block.startsWith("```")) {
              const lines = block.split("\n");
              const lang = lines[0].replace("```", "") || "code";
              const code = lines.slice(1, -1).join("\n");
              return (
                <div
                  key={i}
                  className="bg-surface border border-border rounded-lg overflow-hidden my-6"
                >
                  <div className="flex items-center gap-2 px-4 py-1.5 bg-panel border-b border-border">
                    <span className="text-xs text-comment">{lang}</span>
                  </div>
                  <pre className="p-5 overflow-x-auto text-sm leading-relaxed">
                    <code className="text-foreground">{code}</code>
                  </pre>
                </div>
              );
            }

            if (block.startsWith("- ")) {
              const items = block.split("\n");
              return (
                <ul key={i} className="space-y-2 my-4 ml-1">
                  {items.map((item, j) => (
                    <li
                      key={j}
                      className="flex gap-2 text-sm text-muted leading-relaxed"
                    >
                      <span className="text-green mt-0.5 shrink-0">
                        {">"}
                      </span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: item
                            .replace(/^- /, "")
                            .replace(
                              /\*\*(.*?)\*\*/g,
                              '<strong class="text-foreground font-semibold">$1</strong>'
                            ),
                        }}
                      />
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
                      className="flex gap-3 text-sm text-muted leading-relaxed"
                    >
                      <span className="text-green font-mono text-xs font-bold shrink-0 mt-0.5">
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

            return (
              <p
                key={i}
                className="text-sm text-muted leading-relaxed my-4"
                dangerouslySetInnerHTML={{
                  __html: block
                    .replace(
                      /\*\*(.*?)\*\*/g,
                      '<strong class="text-foreground font-semibold">$1</strong>'
                    )
                    .replace(
                      /`([^`]+)`/g,
                      '<code class="bg-surface px-1.5 py-0.5 rounded-sm text-xs text-green border border-border">$1</code>'
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
            className="text-sm text-muted hover:text-green transition-colors"
          >
            {"<"} all posts
          </Link>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-muted hover:text-green transition-colors"
          >
            share on X {">"}
          </a>
        </div>
      </motion.article>
    </div>
  );
}
