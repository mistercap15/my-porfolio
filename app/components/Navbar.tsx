"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { label: "about", href: "#about" },
  { label: "skills", href: "#skills" },
  { label: "projects", href: "#projects" },
  { label: "experience", href: "#experience" },
  { label: "blog", href: "#blog" },
  { label: "contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-surface/95 backdrop-blur-md border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 gap-3">
          {/* Logo — file path style */}
          <a href="#" className="flex items-center gap-0.5 text-sm group">
            <span className="text-comment">~/</span>
            <span className="text-green group-hover:glow-text-green transition-all">
              khilan
            </span>
            <span className="text-muted">.dev</span>
            <span className="cursor-blink text-green ml-0.5">_</span>
          </a>

          {/* Desktop — VS Code tabs */}
          <div className="hidden md:flex items-center">
            <div className="flex items-center border border-border rounded-sm overflow-hidden">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setActiveTab(item.label)}
                  className={`px-4 py-1.5 text-xs transition-all border-r border-border last:border-r-0 ${
                    activeTab === item.label
                      ? "bg-background text-green border-t-2 border-t-green"
                      : "text-muted hover:text-foreground hover:bg-surface-hover"
                  }`}
                >
                  {item.label}
                  <span className="text-comment">.tsx</span>
                </a>
              ))}
            </div>

            <a
              href="#contact"
              className="ml-4 px-4 py-1.5 text-xs border border-green/30 text-green hover:bg-green/10 rounded-sm transition-all"
            >
              {">"} run contact
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden flex flex-col gap-1.5 p-2"
            aria-label="Toggle menu"
          >
            <motion.span
              animate={
                mobileOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }
              }
              className="block w-5 h-[1.5px] bg-green origin-center"
            />
            <motion.span
              animate={
                mobileOpen ? { opacity: 0, x: -8 } : { opacity: 1, x: 0 }
              }
              className="block w-5 h-[1.5px] bg-green"
            />
            <motion.span
              animate={
                mobileOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }
              }
              className="block w-5 h-[1.5px] bg-green origin-center"
            />
          </button>
        </div>
      </div>

      {/* Mobile terminal menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "100dvh" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-background/98 backdrop-blur-xl border-t border-border overflow-hidden"
          >
            <div className="p-6 pt-8 font-mono">
              <p className="text-xs text-comment mb-6">
                khilan@dev:~$ ls sections/
              </p>
              <div className="space-y-1">
                {navItems.map((item, i) => (
                  <motion.a
                    key={item.label}
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + i * 0.05 }}
                    className="flex items-center gap-3 py-3 text-lg group"
                  >
                    <span className="text-green text-sm">{">"}</span>
                    <span className="text-foreground group-hover:text-green transition-colors">
                      {item.label}
                    </span>
                    <span className="text-comment text-sm">.tsx</span>
                  </motion.a>
                ))}
              </div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="mt-8 pt-6 border-t border-border"
              >
                <a
                  href="#contact"
                  onClick={() => setMobileOpen(false)}
                  className="inline-block px-5 py-2.5 bg-green/10 border border-green/30 text-green text-sm rounded-sm hover:bg-green/20 transition-all"
                >
                  $ npm run contact
                </a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
