"use client";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Logo */}
          <div className="flex items-center gap-1 text-sm">
            <span className="text-comment">~/</span>
            <span className="text-green">khilan</span>
            <span className="text-muted">.dev</span>
          </div>

          {/* Center */}
          <p className="text-xs text-comment text-center">
            {"/* "}Crafted with clean code & caffeine{" */"}
          </p>

          {/* Right */}
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/khilanpatel"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted hover:text-green transition-colors text-xs"
            >
              github
            </a>
            <span className="text-border">|</span>
            <a
              href="https://linkedin.com/in/khilanpatel"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted hover:text-green transition-colors text-xs"
            >
              linkedin
            </a>
            <span className="text-border">|</span>
            <a
              href="https://twitter.com/khilanpatel"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted hover:text-green transition-colors text-xs"
            >
              twitter
            </a>
          </div>
        </div>

        <div className="mt-6 pt-4 border-t border-border/50 text-center">
          <p className="text-xs text-comment">
            &copy; {new Date().getFullYear()} Khilan Patel.{" "}
            <span className="text-muted">
              process.exit(0)
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
}
