"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState, FormEvent } from "react";

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle"
  );

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      await fetch("https://formsubmit.co/ajax/khilanpatel15@gmail.com", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      setStatus("sent");
      setForm({ name: "", email: "", message: "" });
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="py-20 sm:py-24 lg:py-28 relative bg-surface">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-green/20 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <div className="grid lg:grid-cols-12 gap-8 sm:gap-12">
          {/* Left */}
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
            >
              <span className="text-xs text-comment">{"// section.07"}</span>
              <h2 className="font-[family-name:var(--font-space-grotesk)] text-3xl sm:text-4xl lg:text-5xl font-bold mt-2">
                <span className="text-red">contact</span>
                <span className="text-foreground">()</span>
                <span className="cursor-blink text-green ml-1">_</span>
              </h2>
              <div className="section-separator mt-4" />

              <div className="mt-8 space-y-4 text-sm">
                <p className="text-comment">
                  {"/**"}
                  <br />
                  {" * Got a project in mind? Want to collaborate?"}
                  <br />
                  {" * Send me a message and I'll get back to you."}
                  <br />
                  {" */"}
                </p>

                <div className="space-y-2 pt-4">
                  <div className="flex items-center gap-3">
                    <span className="text-comment">location:</span>
                    <span className="text-foreground">India</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-comment">phone:</span>
                    <span className="text-green">+91 9527785556</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-comment">email:</span>
                    <span className="text-blue">
                      khilanpatel015@gmail.com
                    </span>
                  </div>
                </div>

                {/* Social links */}
                <div className="flex gap-3 pt-4">
                  {[
                    {
                      label: "GitHub",
                      href: "https://github.com/khilanpatel",
                      icon: (
                        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                      ),
                    },
                    {
                      label: "LinkedIn",
                      href: "https://linkedin.com/in/khilanpatel",
                      icon: (
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                      ),
                    },
                    {
                      label: "Twitter",
                      href: "https://twitter.com/khilanpatel",
                      icon: (
                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                      ),
                    },
                  ].map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 flex items-center justify-center border border-border rounded-sm text-muted hover:text-green hover:border-green/40 transition-all bg-background"
                      aria-label={social.label}
                    >
                      <svg
                        className="w-4 h-4"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        {social.icon}
                      </svg>
                    </a>
                  ))}
                  <a
                    href="mailto:khilanpatel15@gmail.com"
                    className="w-10 h-10 flex items-center justify-center border border-border rounded-sm text-muted hover:text-green hover:border-green/40 transition-all bg-background"
                    aria-label="Email"
                  >
                    <svg
                      className="w-4 h-4"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <rect x="2" y="4" width="20" height="16" rx="2" />
                      <path d="M22 7l-10 6L2 7" />
                    </svg>
                  </a>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right — form as terminal */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-7"
          >
            <div className="bg-background border border-border rounded-lg overflow-hidden">
              {/* Terminal header */}
              <div className="flex items-center gap-2 px-4 py-2.5 bg-panel border-b border-border">
                <div className="flex gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-red/70" />
                  <span className="w-2.5 h-2.5 rounded-full bg-yellow/70" />
                  <span className="w-2.5 h-2.5 rounded-full bg-green/70" />
                </div>
                <span className="text-xs text-comment ml-2">
                  contact-form — node send-message.js
                </span>
              </div>

              {status === "sent" ? (
                <div className="p-8 text-center">
                  <p className="text-green text-sm mb-2">
                    {">"} Message sent successfully!
                  </p>
                  <p className="text-comment text-xs">
                    Process exited with code 0
                  </p>
                  <button
                    onClick={() => setStatus("idle")}
                    className="mt-4 px-4 py-2 text-xs border border-border text-muted hover:text-green hover:border-green/30 rounded-sm transition-all"
                  >
                    $ new_message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="p-5 space-y-4">
                  <div>
                    <label className="text-xs text-comment mb-1.5 block">
                      const name =
                    </label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) =>
                        setForm({ ...form, name: e.target.value })
                      }
                      className="w-full bg-surface border border-border rounded-sm px-4 py-2.5 text-sm text-foreground placeholder-muted/50 focus:outline-none focus:border-green/50 focus:ring-1 focus:ring-green/20 transition-all"
                      placeholder='"Your Name"'
                    />
                  </div>
                  <div>
                    <label className="text-xs text-comment mb-1.5 block">
                      const email =
                    </label>
                    <input
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) =>
                        setForm({ ...form, email: e.target.value })
                      }
                      className="w-full bg-surface border border-border rounded-sm px-4 py-2.5 text-sm text-foreground placeholder-muted/50 focus:outline-none focus:border-green/50 focus:ring-1 focus:ring-green/20 transition-all"
                      placeholder='"your@email.com"'
                    />
                  </div>
                  <div>
                    <label className="text-xs text-comment mb-1.5 block">
                      const message =
                    </label>
                    <textarea
                      required
                      rows={5}
                      value={form.message}
                      onChange={(e) =>
                        setForm({ ...form, message: e.target.value })
                      }
                      className="w-full bg-surface border border-border rounded-sm px-4 py-2.5 text-sm text-foreground placeholder-muted/50 focus:outline-none focus:border-green/50 focus:ring-1 focus:ring-green/20 transition-all resize-none"
                      placeholder='`Your message here...`'
                    />
                  </div>

                  {status === "error" && (
                    <p className="text-red text-xs">
                      Error: Failed to send. Please try again.
                    </p>
                  )}

                  <button
                    type="submit"
                    disabled={status === "sending"}
                    className="w-full py-3 bg-green/10 border border-green/40 text-green text-sm rounded-sm hover:bg-green/20 disabled:opacity-50 transition-all"
                  >
                    {status === "sending"
                      ? "> sending..."
                      : "$ node send-message.js"}
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
