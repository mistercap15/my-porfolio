"use client";

import { motion } from "framer-motion";

const footerLinks = [
  { label: "GitHub", href: "https://github.com/mistercap15" },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/khilan-patel-4417b196",
  },
  { label: "Twitter", href: "https://twitter.com" },
];

export default function Footer() {
  return (
    <footer className="py-12 relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <a
              href="#"
              className="font-[family-name:var(--font-space-grotesk)] text-lg font-bold"
            >
              <span className="text-orange">khilan</span>
              <span className="text-foreground">.dev</span>
            </a>
            <span className="text-muted text-sm">
              &copy; {new Date().getFullYear()}
            </span>
          </div>

          <div className="flex items-center gap-6">
            {footerLinks.map((link) => (
              <motion.a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -2 }}
                className="text-sm text-muted hover:text-orange transition-colors link-underline"
              >
                {link.label}
              </motion.a>
            ))}
          </div>

          <p className="text-xs text-muted">
            Crafted with care & clean code.
          </p>
        </div>
      </div>
    </footer>
  );
}
